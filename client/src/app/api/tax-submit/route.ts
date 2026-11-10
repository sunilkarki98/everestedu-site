import { NextRequest } from 'next/server';
import { Readable } from 'stream';
import { sheets, drive } from '@/lib/google';
import { transporter, ADMIN_EMAIL, TAX_EMAIL } from '@/lib/email';
import { validateTaxForm } from '@/lib/validators';
import { createRateLimiter, getClientIp } from '@/lib/rate-limit';

// 5 tax return submissions per minute per IP
const taxLimiter = createRateLimiter({ limit: 5, windowMs: 60_000 });

// Escape user text to prevent spreadsheet formula injection
const escapeCell = (val: unknown): string => {
  if (typeof val !== 'string') return '';
  const trimmed = val.trim();
  return /^[-+=@]/.test(trimmed) ? `'${trimmed}` : trimmed;
};

// Format clean human-readable date in Australia/Sydney timezone (e.g. "10/11/2026, 04:15:30 PM")
const formatSubmissionDate = (date: Date = new Date()): string => {
  return new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Sydney',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date);
};

// Format phone number ensuring country code and preventing spreadsheet formula parsing
const formatPhoneForSheet = (phone: unknown, countryCode = '+61'): string => {
  if (typeof phone !== 'string' || !phone.trim()) return '';
  let clean = phone.trim();
  if (!clean.startsWith('+')) {
    if (clean.startsWith('0')) clean = clean.slice(1);
    clean = `${countryCode} ${clean}`;
  }
  return `'${clean}`;
};

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const { allowed } = taxLimiter.check(ip);
    if (!allowed) {
      return Response.json(
        { result: 'error', error: 'Too many submissions. Please wait a moment before trying again.' },
        { status: 429 }
      );
    }

    const body = await req.json();

    // ── DEBUG: Log what the server actually receives ──
    console.log('TAX FORM DEBUG — received fields:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      occupation: body.occupation,
      dob: body.dob,
      visa_subclass: body.visa_subclass,
      marital_status: body.marital_status,
      abn: body.abn,
      address: body.address,
      hasPdfBase64: !!body.pdfBase64,
      pdfBase64Length: body.pdfBase64?.length,
      allKeys: Object.keys(body),
    });

    // Validate required fields
    const validationError = validateTaxForm(body);
    if (validationError) {
      return Response.json({ result: 'error', error: validationError }, { status: 400 });
    }

    const sheetId = process.env.GOOGLE_TAX_SHEET_ID;
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!sheetId || !folderId) {
      console.error('Missing Google IDs in env');
      return Response.json({ result: 'error', error: 'Server configuration error.' }, { status: 500 });
    }

    // ── Independent Steps: failure of one must NEVER affect the others ──
    const results = { drive: false, sheets: false, email: false };

    // STEP 1: Upload PDF to Google Drive
    let pdfLink = '';
    if (body.pdfBase64) {
      try {
        const base64Data = body.pdfBase64.split(',')[1] || body.pdfBase64;
        const buffer = Buffer.from(base64Data, 'base64');
        const bufferStream = new Readable();
        bufferStream.push(buffer);
        bufferStream.push(null);

        const sanitizedName = (body.name || 'Unknown').replace(/[^a-zA-Z0-9]/g, '_');
        const fileName = `TaxReturn_${sanitizedName}_${Date.now()}.pdf`;

        const fileRes = await drive.files.create({
          requestBody: {
            name: fileName,
            parents: [folderId],
            mimeType: 'application/pdf',
          },
          media: {
            mimeType: 'application/pdf',
            body: bufferStream,
          },
          supportsAllDrives: true,
          fields: 'id, webViewLink',
        });
        pdfLink = fileRes.data.webViewLink || '';
        body.PDF_Link = `=HYPERLINK("${pdfLink}", "📄 View PDF")`;
        results.drive = true;
      } catch (driveErr) {
        console.error('STEP 1 FAILED — Google Drive upload:', driveErr);
      }
    }

    // STEP 2: Append row to Google Sheets
    const pdfCell = pdfLink ? `=HYPERLINK("${pdfLink}", "📄 View PDF")` : 'Upload Failed';
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: 'Sheet1!A:K',
        valueInputOption: 'USER_ENTERED',
        requestBody: { 
          values: [[
            `'${formatSubmissionDate()}`,
            escapeCell(body.name),
            escapeCell(body.email),
            formatPhoneForSheet(body.phone, body.country_code),
            escapeCell(body.occupation),
            escapeCell(body.dob),
            escapeCell(body.visa_subclass || 'N/A'),
            escapeCell(body.marital_status),
            escapeCell(body.abn || 'N/A'),
            escapeCell(body.address),
            pdfCell
          ]]
        },
      });
      results.sheets = true;
    } catch (sheetErr) {
      console.error('STEP 2 FAILED — Google Sheets append:', sheetErr);
    }

    // STEP 3: Send Email via Nodemailer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const mailOptions = {
          from: `"Everest Tax System" <${process.env.EMAIL_USER}>`,
          to: `${TAX_EMAIL}, ${ADMIN_EMAIL}`,
          subject: `New Tax Return Submitted: ${body.name || 'Client'}`,
          text: `A new tax return has been submitted by ${body.name}.\n\nPhone: ${body.phone}\nEmail: ${body.email}\n\nYou can view the uploaded PDF in Google Drive here:\n${pdfLink || '(Drive upload failed — see email attachment)'}\n\nA copy of the PDF is also attached to this email.`,
          attachments: body.pdfBase64 ? [
            {
              filename: `TaxReturn_${(body.name || 'Unknown').replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
              content: body.pdfBase64.split(',')[1] || body.pdfBase64,
              encoding: 'base64' as const,
            }
          ] : [],
        };

        try {
          await transporter.sendMail(mailOptions);
          results.email = true;
          console.log('Email sent successfully!');
        } catch (emailErr) {
          console.error('STEP 3 FAILED — Email send:', emailErr);
        }

      } catch (emailErr) {
        console.error('STEP 3 FAILED — Email transporter init:', emailErr);
      }
    }

    console.log('Tax submission results:', results);

    // If both Sheets and Email failed, do not falsely report success
    if (!results.sheets && !results.email) {
      console.error('CRITICAL: Both Sheets and Email delivery failed for tax submission');
      return Response.json(
        { result: 'error', error: 'Failed to record tax submission. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    return Response.json({ result: 'success' });
  } catch (err) {
    console.error('Tax form submission error:', err);
    return Response.json({ result: 'error', error: 'Failed to save tax return data.' }, { status: 500 });
  }
}
