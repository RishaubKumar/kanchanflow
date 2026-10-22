# KanchanFlow - Manufacturing CRM

## Project Overview

KanchanFlow is a manufacturing CRM designed for precision job shops, CNC units, and MSME contract manufacturers. It handles quotation engineering, drawing revision tracking, cost buildups, and shop-floor sales pipelines. This frontend project is built as part of the Meru Technosoft Frontend Internship assignment.

## Current Implementation Status

Stage 3 is complete. The application features a distinctive manufacturing hero section and an HTML/CSS product mockup:
- Hero Section on `/`:
  - Supporting category label: "Manufacturing CRM & Shop-Floor Pipeline".
  - Core headline: "Manage quotations, work orders, and your sales pipeline in one place."
  - Direct value statement focused on reducing drawing errors, streamlining multi-tier estimation, and eliminating complex ERP bloat.
  - Active call-to-action buttons: "Explore features" (navigates to `/features`) and "View pricing" (navigates to `/pricing`).
  - Key trust points: No ERP bloat, drawing revision synchronization, and India GST/MSME readiness.
- Product UI Mockup Component (`components/ProductMockup.js`):
  - Built directly using semantic HTML and Tailwind CSS without third-party chart libraries or bloated dependencies.
  - Features an active plant console view with pipeline stages (RFQ Intake, Cost Buildup, Quote Dispatched, Shop Floor Release).
  - Displays a live quotations list with revision tags (`Rev A`, `Rev B`, `Rev C`), parts descriptions, customer names, and approval badges.
  - Displays shop-floor work orders with assigned CNC stations, batch quantities, and current progress stages.
  - Includes a bottom operational summary bar with pending dispatch counts, drawing sync audit status, and average estimation turnaround.
  - Fully responsive: sits beside the headline on large screens (`lg:grid-cols-12`) and stacks cleanly beneath on mobile/tablet devices without horizontal clipping.
- Reusable Shared Layout & Components:
  - Persistent `Navbar` with active route detection, mobile menu, and "Book a walkthrough" CTA.
  - Reusable `Button` supporting multiple variants (`primary`, `secondary`, `dark`, `outline-light`).
  - Comprehensive `Footer` with navigation links, direct email, and verified external destinations.
  - Working `/features` and `/pricing` routes with interactive forms and zero dead buttons.
- Strict use of standard JavaScript functions and `if/else` control flow, avoiding ternary operators for conditional rendering.

## Setup Instructions

Prerequisites:
- Node.js (v18 or higher recommended; developed on Node.js v24)
- npm

Steps:
1. Clone or open the project folder in your terminal:
   cd c:\Kanchanflow
2. Install dependencies:
   npm install
3. Start the local development server:
   npm run dev
4. Open http://localhost:3000 in your browser to view the application.
5. Run the production build check:
   npm run build
6. Run the lint check:
   npm run lint

## Design Choices and Color Palette

The interface is styled for an industrial manufacturing environment, avoiding generic AI gradients, glowing borders, or artificial decorative effects. The palette consists of:
- Graphite (#202321): Used for header bars, hero canvas, dark console panels, and primary buttons.
- Warm Gold (#D6A64F): Used for brand accents, status tags, badge highlights, and active pipeline indicators.
- Off-white (#F5F4EF): Used for the main body background to maintain clean readability.
- Steel Grey (#D9DCD7): Used for borders, divider lines, and structural card boundaries.
- Dark Text (#292C29): Used for primary headings and body typography.

Layout rules:
- Max container width is fixed at `max-w-6xl` (72rem) with consistent horizontal padding (`px-6`).
- Responsive grid alignment smoothly transitions from stacked columns on mobile to multi-column arrangements on desktop.
- All interactive controls feature visible keyboard focus indicators (`focus-visible:ring-2 focus-visible:ring-warm-gold`).

## Assumptions

- Next.js App Router with JavaScript and JSX is used throughout.
- The product UI mockup uses realistic sample manufacturing records (part names, CNC stations, quotation values) clearly labeled as sample plant data.
- Hero call-to-action buttons directly navigate to the respective pages (`/features` and `/pricing`) instead of relying on inert triggers or external redirects.
