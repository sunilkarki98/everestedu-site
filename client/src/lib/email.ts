import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@eevsgroup.com';
export const TAX_EMAIL = process.env.TAX_EMAIL || 'tax.everest@yahoo.com';
