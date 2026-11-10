/**
 * Validates contact form input. Returns an error string or null if valid.
 */
export function validateContactForm(data: {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}): string | null {
  if (!data.name || data.name.trim().length < 2 || data.name.length > 100) {
    return 'Name must be between 2 and 100 characters.';
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return 'Please provide a valid email address.';
  }
  if (data.email.length > 254) {
    return 'Email address is too long.';
  }
  if (!data.phone || !/^[+\d\s()-]{7,20}$/.test(data.phone)) {
    return 'Please provide a valid phone number.';
  }
  if (!data.message || data.message.trim().length < 10 || data.message.length > 2000) {
    return 'Message must be between 10 and 2000 characters.';
  }
  return null;
}

/**
 * Validates tax return form input. Returns an error string or null if valid.
 * Checks all required fields including financial data.
 */
export function validateTaxForm(data: Record<string, unknown>): string | null {
  const str = (key: string): string => {
    const val = data[key];
    return typeof val === 'string' ? val.trim() : '';
  };

  // --- Personal Information ---
  if (!str('name') || str('name').length < 2 || str('name').length > 200) {
    return 'Full name is required (2-200 characters).';
  }
  if (!str('tfn') || !/^\d{3}\s?\d{3}\s?\d{3}$/.test(str('tfn'))) {
    return 'A valid 9-digit Tax File Number is required.';
  }
  if (!str('occupation') || str('occupation').length < 2 || str('occupation').length > 200) {
    return 'Occupation is required.';
  }
  if (!str('dob')) {
    return 'Date of birth is required.';
  }
  if (!str('marital_status')) {
    return 'Marital status is required.';
  }
  if (!str('medicareExempt') || !['Y', 'N'].includes(str('medicareExempt'))) {
    return 'Medicare levy exemption status is required (Y or N).';
  }

  // --- Contact Details ---
  if (!str('email') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str('email'))) {
    return 'A valid email address is required.';
  }
  if (str('email').length > 254) {
    return 'Email address is too long.';
  }
  if (!str('phone') || !/^[+\d\s()-]{7,20}$/.test(str('phone'))) {
    return 'A valid phone number is required.';
  }
  if (!str('address') || str('address').length < 5 || str('address').length > 500) {
    return 'A valid address is required.';
  }

  // --- Bank Details ---
  if (!str('bank_name') || str('bank_name').length < 2 || str('bank_name').length > 100) {
    return 'Bank name is required.';
  }
  if (!str('refund_acct_name') || str('refund_acct_name').length < 2 || str('refund_acct_name').length > 100) {
    return 'Refund account name is required.';
  }
  if (!str('bsb') || !/^\d{3}-?\d{3}$/.test(str('bsb'))) {
    return 'A valid 6-digit BSB is required (e.g. 062-000).';
  }
  if (!str('account_number') || !/^\d{6,10}$/.test(str('account_number'))) {
    return 'A valid account number is required (6-10 digits).';
  }

  // --- PDF payload ---
  if (data.pdfBase64) {
    const pdf = str('pdfBase64');
    // Basic sanity check: must start with valid base64 PDF header or be raw base64
    if (pdf.length > 7_000_000) {
      return 'PDF payload is too large (max ~5MB).';
    }
    // Check it looks like valid base64 (only base64 characters)
    const base64Part = pdf.includes(',') ? pdf.split(',')[1] : pdf;
    if (!/^[A-Za-z0-9+/=]+$/.test(base64Part.slice(0, 100))) {
      return 'Invalid PDF data format.';
    }
  }

  return null;
}

/**
 * Validates chatbot lead input. Returns an error string or null if valid.
 */
export function validateLeadForm(data: {
  name?: string;
  email?: string;
  phone?: string;
}): string | null {
  if (!data.name || data.name.trim().length < 1 || data.name.length > 100) {
    return 'Name is required.';
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return 'Please provide a valid email address.';
  }
  return null;
}
