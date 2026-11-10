import { NextRequest } from 'next/server';
import { sheets } from '@/lib/google';
import { validateContactForm } from '@/lib/validators';
import { createRateLimiter, getClientIp } from '@/lib/rate-limit';

// 5 contact form submissions per minute per IP
const contactLimiter = createRateLimiter({ limit: 5, windowMs: 60_000 });

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = getClientIp(req);
    const { allowed } = contactLimiter.check(ip);
    if (!allowed) {
      return Response.json(
        { result: 'error', error: 'Too many requests. Please try again shortly.' },
        { status: 429 }
      );
    }

    const sheetId = process.env.GOOGLE_CRM_SHEET_ID;
    
    if (!sheetId) {
      console.error('GOOGLE_CRM_SHEET_ID environment variable is not set properly');
      return Response.json({ result: 'error', error: 'Server configuration error.' }, { status: 500 });
    }

    const body = await req.json();

    const validationError = validateContactForm(body);
    if (validationError) {
      return Response.json({ result: 'error', error: validationError }, { status: 400 });
    }

    // Sanitize inputs
    const sanitized = {
      name: body.name.trim().slice(0, 100),
      email: body.email.trim().slice(0, 254),
      phone: body.phone.trim().slice(0, 20),
      message: body.message.trim().slice(0, 2000),
    };

    // Append to the separate CRM sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:F',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          new Date().toISOString(),
          sanitized.name,
          sanitized.email,
          sanitized.phone,
          sanitized.message,
          'Contact Page' // Source
        ]],
      },
    });

    return Response.json({ result: 'success' });
  } catch (err) {
    console.error('Contact form submission error:', err instanceof Error ? err.message : 'Unknown error');
    return Response.json({ result: 'error', error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
