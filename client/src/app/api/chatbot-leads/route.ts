import { NextRequest } from 'next/server';
import { sheets } from '@/lib/google';
import { validateLeadForm } from '@/lib/validators';
import { createRateLimiter, getClientIp } from '@/lib/rate-limit';

// 10 lead submissions per minute per IP
const leadLimiter = createRateLimiter({ limit: 10, windowMs: 60_000 });

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = getClientIp(req);
  const { allowed } = leadLimiter.check(ip);
  if (!allowed) {
    return Response.json(
      { error: 'Too many requests. Please try again shortly.' },
      { status: 429 }
    );
  }

  const { name, email, phone } = await req.json();

  const validationError = validateLeadForm({ name, email, phone });
  if (validationError) {
    return Response.json({ error: validationError }, { status: 400 });
  }

  try {
    const sheetId = process.env.GOOGLE_CRM_SHEET_ID;
    
    if (!sheetId) {
      console.error('GOOGLE_CRM_SHEET_ID environment variable is not set');
      return Response.json({ error: 'Server configuration error' }, { status: 500 });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:F',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          new Date().toISOString(),
          name.substring(0, 100),
          email.substring(0, 100),
          (phone || '').substring(0, 20),
          '', // No message for Chatbot leads
          'Chatbot' // Source
        ]],
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Sheet append error:', error);
    return Response.json({ error: 'Failed to save lead' }, { status: 500 });
  }
}
