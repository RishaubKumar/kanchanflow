# KanchanFlow - Manufacturing CRM

## Project Overview

KanchanFlow is a manufacturing CRM designed for precision job shops, CNC units, and MSME contract manufacturers. It handles quotation engineering, drawing revision tracking, cost buildups, and shop-floor sales pipelines. This frontend project is built as part of the Meru Technosoft Frontend Internship assignment.

## Current Implementation Status

Stage 2 is complete. The application features a shared layout and multi-page routing:
- Shared layout in `app/layout.js` providing persistent header and footer placement across all routes without layout shift.
- Reusable `Navbar` component featuring a text-based KanchanFlow wordmark, route links (Home, Features, Pricing), active link indicators via `usePathname`, a primary "Book a walkthrough" call to action, sticky top positioning, keyboard accessibility with visible focus rings, and an interactive mobile toggle menu.
- Reusable `Footer` component with an industrial summary of KanchanFlow, quick links to all three pages, verified support contact channels, and copyright information.
- Reusable `Button` component supporting multiple semantic variants (`primary`, `secondary`, `dark`, `outline-light`) and polymorphic rendering as either a native button or Next.js `Link`.
- Route implementation across all three required pages:
  - Home (`/`): Landing page with value proposition, live RFQ reference lookup, and core operational highlights.
  - Features (`/features`): Dedicated breakdown of four engineering modules: RFQ intake & drawing sync, multi-step cost buildup, shop-floor work order conversion, and MSME regional compliance.
  - Pricing (`/pricing`): Commercial tiers (Workshop, Plant, Enterprise) and an interactive walkthrough booking form with live client-side validation.
- All code uses standard JavaScript functions and `if/else` control flow, avoiding ternary operators for conditional rendering.

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

The interface is styled for an industrial manufacturing environment, avoiding generic AI gradients and excessive decorative elements. The palette consists of:
- Graphite (#202321): Used for header bars, dark surfaces, and primary action buttons.
- Warm Gold (#D6A64F): Used for brand accents, status tags, and primary action highlights.
- Off-white (#F5F4EF): Used for the main page background to maintain clean readability.
- Steel Grey (#D9DCD7): Used for borders, divider lines, and subtle structural frames.
- Dark Text (#292C29): Used for primary headings and body typography.

Layout rules:
- Max container width is fixed at `max-w-6xl` (72rem) with consistent horizontal padding (`px-6`).
- Section padding maintains a uniform vertical rhythm (`py-12` to `py-16`).
- All interactive controls feature visible focus indicators (`focus-visible:ring-2 focus-visible:ring-warm-gold`).

## Assumptions

- Next.js App Router with JavaScript and JSX is used throughout.
- The shared layout wraps all three pages inside `app/layout.js`, ensuring consistent navigation and footer rendering across routes.
- Button components adapt between HTML anchor tags and button elements based on the presence of the `href` prop.
- Walkthrough booking on the pricing page uses client-side state to provide immediate, honest confirmation without backend network calls.
