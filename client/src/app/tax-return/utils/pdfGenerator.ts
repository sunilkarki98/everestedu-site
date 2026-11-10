export const workExpItems = [
  { label: "Car expense (If you have multiple jobs)", key: "exp_car" },
  { label: "Travel Expenses", key: "exp_travel" },
  { label: "Uniform for work", key: "exp_uniform" },
  { label: "Laundry", key: "exp_laundry" },
  { label: "Union fee", key: "exp_union" },
  { label: "Ahpra fee (Only for RN & EN)", key: "exp_ahpra" },
  { label: "Self Education Costs", key: "exp_education" },
  { label: "Tools Expenses", key: "exp_tools" },
  { label: "Donation", key: "other_donations" },
  { label: "Tax Agent fees (Last Year)", key: "other_tax_agent_fees" },
  { label: "Home office Expenses (70c/hour)", key: "exp_home_office" },
];

export const buildTaxSummaryText = (data: Record<string, string>, hasSignature: boolean) => {
  const getVal = (key: string) => data[key] ? String(data[key]).trim() : "";

  const lines = [];
  lines.push("EVEREST.TAX");
  lines.push("TAX RETURN FORM — CLIENT SUMMARY");
  lines.push("Generated: " + new Date().toLocaleString());
  lines.push("=".repeat(60));

  lines.push("\n01. PERSONAL INFORMATION");
  lines.push("-".repeat(40));
  lines.push(`Name: ${getVal("name")}`);
  lines.push(`TFN: ${getVal("tfn")}`);
  lines.push(`Occupation: ${getVal("occupation")}`);
  lines.push(`DOB: ${getVal("dob")}`);
  lines.push(`Visa subclass: ${getVal("visa_subclass")}`);
  lines.push(`Marital status: ${getVal("marital_status")}`);
  lines.push(`No. of dependents: ${getVal("dependents")}`);
  lines.push(`Medicare levy exempt: ${getVal("medicareExempt") || "N/A"}`);
  lines.push(`ABN: ${getVal("abn") || "N/A"}`);

  lines.push("\n02. CONTACT DETAILS");
  lines.push("-".repeat(40));
  lines.push(`Address: ${getVal("address")}`);
  lines.push(`Phone: ${getVal("phone")}`);
  lines.push(`Email: ${getVal("email")}`);
  lines.push(`Preferred contact: ${getVal("contactMethod")}`);

  lines.push("\n03. BANK DETAILS (FOR REFUND)");
  lines.push("-".repeat(40));
  lines.push(`Bank name: ${getVal("bank_name")}`);
  lines.push(`Refund account name: ${getVal("refund_acct_name")}`);
  lines.push(`BSB: ${getVal("bsb")}`);
  lines.push(`Account Number: ${getVal("account_number")}`);

  lines.push("\n04. EXPENSES (WORK RELATED)");
  lines.push("-".repeat(40));
  let anyExp = false;
  workExpItems.forEach(({ label, key }) => {
    const yn = getVal(`${key}_selected`);
    // Only include expenses that are marked "Y"
    if (yn === "Y") {
      const details = getVal(`${key}_details`);
      const amount = getVal(`${key}_amount`);
      if (details || amount) {
        anyExp = true;
        lines.push(`${label}: Y  | Details: ${details}  | $${amount}`);
      }
    }
  });
  if (!anyExp) lines.push("(none indicated)");

  lines.push("\n05. DECLARATION & SIGNATURE");
  lines.push("-".repeat(40));
  lines.push("Client confirms authorisation of Everest.Tax and the registered tax agent as tax agent.");
  lines.push("Client confirms information provided is true and correct.");
  lines.push("Client acknowledges 5-year record-keeping obligation.");
  lines.push(`Acknowledged: ${getVal("ackCheck") === "on" ? "Yes" : "No"}`);
  lines.push(`Date signed: ${getVal("sig_date")}`);
  lines.push(`Signature captured: ${hasSignature ? "Yes" : "No"}`);

  return lines.join("\n");
};

import { jsPDF } from 'jspdf';

export const generateTaxPDF = (
  data: Record<string, string>, 
  hasSignature: boolean, 
  signatureDataUrl?: string
) => {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const summaryText = buildTaxSummaryText(data, hasSignature);
  const lines = doc.splitTextToSize(summaryText, 500);
  
  // Add text to PDF
  doc.setFont("courier", "normal");
  doc.setFontSize(10);
  
  let cursorY = 40;
  lines.forEach((line: string) => {
    if (cursorY > 800) {
      doc.addPage();
      cursorY = 40;
    }
    doc.text(line, 40, cursorY);
    cursorY += 14;
  });

  // Add signature image if available
  if (hasSignature && signatureDataUrl) {
    if (cursorY > 700) {
       doc.addPage();
       cursorY = 40;
    }
    doc.text("Signature:", 40, cursorY + 20);
    doc.addImage(signatureDataUrl, "PNG", 40, cursorY + 30, 150, 75);
  }

  return doc;
};
