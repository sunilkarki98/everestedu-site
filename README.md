# 🏔️ Everest Education & Visa Services

> Trusted education & visa services in Australia. Family-owned, student-first.

## Project Structure

```
everest-landing-page/
├── client/          ← Next.js full-stack application (Frontend & API routes deployed to Vercel)
│   ├── src/
│   │   ├── app/     ← App Router pages & /api route handlers
│   │   ├── components/
│   │   ├── config/
│   │   ├── data/
│   │   └── lib/     ← Utilities, Google API, email, rate limiting
│   └── public/
├── AGENTS.md        ← Architectural rules and specifications
└── README.md
```

## Quick Start

### Prerequisites

- Node.js >= 20.9.0
- npm

### Setup & Run

```bash
# Navigate to the client directory
cd client

# Configure environment variables
cp .env.example .env.local

# Install dependencies and start development server
npm install
npm run dev
```

The application runs on `http://localhost:3000`.

## Architecture & Security Highlights

1. **Full-Stack Next.js:** All frontend pages and backend endpoints (`/api/chat`, `/api/chatbot-leads`, `/api/contact`, `/api/tax-submit`) reside in Next.js App Router for serverless deployment on Vercel.
2. **Decoupled Google Sheets:**
   - **Tax Returns (`GOOGLE_TAX_SHEET_ID`):** Strict directory only (11 columns). Sensitive financial data (TFN, BSB, Account details, deductions) is **never** saved to Google Sheets; it is compiled into a client-generated PDF.
   - **CRM Leads (`GOOGLE_CRM_SHEET_ID`):** 6-column directory (`Date | Name | Email | Phone | Message | Source`).
3. **AI Chatbot:** Built with Vercel AI SDK, dynamically powered via `AI_MODEL` (e.g. Gemini or OpenAI) with built-in context from EEVS services, courses, and FAQs.

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Styling & Motion**: Tailwind CSS v4, Framer Motion
- **AI & Integrations**: Vercel AI SDK, Google APIs (Drive, Sheets), Nodemailer
- **Deployment**: Vercel

