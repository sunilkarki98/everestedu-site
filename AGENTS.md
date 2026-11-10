# Everest Education & Visa Services (EEVS) - Architecture Rules

This project has been heavily optimized for Vercel deployment, high security, and dynamic AI models. Whenever you work on this project, you **MUST** adhere to the following rules:

## 1. Architecture (Strictly Next.js)
- **NO EXPRESS SERVER:** The old `server/` directory has been deleted. Do not attempt to use Express or run a separate backend.
- **API Routes:** All backend logic (email, Google Sheets, AI) lives inside `client/src/app/api/` using the Next.js App Router.
- **Port:** There is no `localhost:5000`. All frontend fetches must use relative paths (e.g. `/api/chat`).

## 2. Google Sheets & Data Security
The system uses TWO completely decoupled Google Sheets for maximum security:

**A. Tax Returns (`GOOGLE_TAX_SHEET_ID`)**
- Route: `/api/tax-submit`
- **Security Rule:** You must NEVER save sensitive financial data (TFN, Bank Account numbers, specific deductions) into the Google Sheet.
- The Google Sheet strictly acts as a directory. It receives exactly 11 columns (Date, Name, Email, Phone, Occupation, DOB, Visa Subclass, Marital Status, ABN, Address, PDF_Link).
- The `PDF_Link` MUST be formatted as a Google Sheets formula: `=HYPERLINK("url", "📄 View PDF")`.

**B. Leads & Contacts (`GOOGLE_CRM_SHEET_ID`)**
- Routes: `/api/chatbot-leads`, `/api/contact`
- This sheet receives exactly 6 columns: `Date | Name | Email | Phone | Message | Source`

## 3. AI Chatbot
- The chatbot uses the **Vercel AI SDK** with support for both Google Gemini and OpenAI.
- **Never hardcode the model string in the code.**
- The model provider is dynamically determined by the `AI_MODEL` environment variable (e.g., `gemini-1.5-flash` or `gpt-4o-mini`).
- Do not let the AI invent pricing, visa rules, or office locations. All knowledge must be pulled from `src/data/` or the `llms.txt` file.

## 4. UI/UX
- Use TailwindCSS and Framer Motion for animations.
- The chatbot must fallback gracefully if the lead capture fails (let the user chat anyway).
- WhatsApp links must use the `NEXT_PUBLIC_WHATSAPP_NUMBER` variable formatted strictly as numbers without symbols (e.g., `61406000815`).
