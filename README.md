# KanchanFlow - Manufacturing CRM

## Project Description

KanchanFlow is a manufacturing CRM designed for precision job shops, CNC machining units and MSME contract fabricators. It handles the end-to-end workflow from initial customer inquiry through quotation engineering, drawing revision control, cost estimation, work order release and shop-floor pipeline tracking.

This project is a frontend implementation built as part of the Meru Technosoft Frontend Internship assignment.

## Technologies Used

- Next.js 16.4.2 with App Router and the app/ directory
- JavaScript and JSX throughout
- Tailwind CSS v4 for utility classes
- Inter font via next/font/google
- React 19

## Setup Instructions

Prerequisites:
- Node.js v18 or higher (project was developed on Node.js v24)
- npm

Steps:
1. Open the project folder in a terminal
2. Install dependencies: npm install
3. Start the development server: npm run dev
4. Open http://localhost:3000 in your browser
5. Run the lint check: npm run lint
6. Run the production build check: npm run build

## Implemented Pages

1. Home (/)
   - Hero section with product UI mockup built in HTML and CSS
   - Operational metrics strip
   - Problem and solution comparison (shop-floor bottlenecks vs KanchanFlow workflow)
   - Six feature cards covering all required capabilities
   - Industries section with three illustrative manufacturing sectors
   - Pricing teaser with links to the pricing page
   - FAQ accordion with five questions and keyboard navigation
   - Live RFQ reference lookup using sample data (KF-1042, KF-1088, KF-1105)
   - Final call to action with links to features and pricing

2. Features (/features)
   - Six alternating sections, one per feature, with text on one side and an HTML/CSS mockup on the other
   - Features covered: quotation management, BOM, work order handoff, sales pipeline, WhatsApp communication, reports and analytics
   - Workflow comparison table showing manual processes vs KanchanFlow (illustrative)
   - Feature-specific FAQ accordion
   - Final CTA to book a walkthrough

3. Pricing (/pricing)
   - Monthly and annual billing toggle that updates displayed prices
   - Three plan cards: Workshop Edition, Plant Edition (recommended) and Enterprise Operations
   - Pricing FAQ accordion with five questions
   - Walkthrough booking form with labelled fields and client-side validation
   - Final CTA linking to the features page

## Shared Components

- Navbar: sticky, text-based wordmark, links to all three pages, working mobile menu with keyboard support and escape-key close, visible focus states
- Footer: brand description, navigation links, contact and social links, copyright line
- Button: reusable component supporting primary, secondary, dark and outline-light variants

## Colour Palette

- Graphite: #202321 - headers, hero background, dark panels, primary CTA buttons
- Warm Gold: #D6A64F - brand accent, status badges, active indicators, FAQ toggle icon
- Off-White: #F5F4EF - alternating section backgrounds, form fields
- Steel Grey: #D9DCD7 - borders, divider lines, card boundaries
- Dark Text: #292C29 - primary headings and body copy

## Typography

Inter (Google Fonts) is loaded via next/font/google with display: swap and the latin subset. No external CSS framework typography overrides are applied.

## Assumptions

- Prices shown on the pricing page are illustrative figures for evaluation purposes only. They are not verified official KanchanFlow commercial rates. The disclaimer is displayed on the page.
- Industry classifications and company names used in mockups are fictional and intended to illustrate typical manufacturing scenarios.
- The FAQ accordion and RFQ lookup tool use client-side state only. No backend requests are made.
- The walkthrough booking form performs client-side validation and shows a confirmation message. It does not submit data to any server.
- WhatsApp communication is described as a product feature but is not implemented as a live integration.
- Drawing revision audit trail and GST/e-Invoicing features are described in the UI but are not connected to a backend.
- Social links in the footer point to linkedin.com and github.com as clearly labelled generic destinations, not to a specific KanchanFlow account.

## SEO and Accessibility

- Each page has a unique title and meta description via the Next.js metadata API
- Open Graph title and description are set on all three pages
- One H1 per page with a logical heading hierarchy
- Semantic HTML elements: header, nav, main, section, footer
- Form fields have associated labels using htmlFor and id
- FAQ and billing toggle buttons have aria-expanded, aria-controls and aria-pressed attributes
- Keyboard-visible focus states on all interactive elements using focus-visible ring
- prefers-reduced-motion media query disables transitions for users who prefer it
- The comparison table on the features page is contained in an overflow-x: auto wrapper

## Known Limitations

- Lighthouse cannot be run automatically in this environment. See instructions below to run it manually in Chrome DevTools.
- No backend integration. All data is static or managed with React useState.
- No authentication, user accounts or database connectivity.
- The mobile menu does not trap focus when open. Tab navigation will leave the menu.
- The comparison table may require horizontal scroll on very narrow viewports despite the overflow wrapper.

## How to Run a Lighthouse Mobile Test

1. Open http://localhost:3000 or your deployed URL in Google Chrome
2. Open Chrome DevTools using F12 or right-click and select Inspect
3. Go to the Lighthouse tab
4. Set Device to Mobile
5. Select Performance, Accessibility and SEO categories
6. Click Analyze page load
7. Save the report for the assignment submission

## What Could Be Improved with More Time

- Add a backend or API route for the walkthrough booking form to send actual email notifications
- Add a product image or screenshot gallery on the features page instead of only HTML mockups
- Implement focus trapping in the mobile menu for stricter keyboard accessibility
- Add unit tests using Jest and React Testing Library for the accordion and toggle components
- Set up a proper CI pipeline with lint, build and test checks on each commit
- Add a sitemap.xml and robots.txt for production SEO
- Verify actual Lighthouse scores after deployment and address any specific performance issues flagged

## Git Commits

The project has the following commits in the repository. All commits were made by the developer after reviewing each completed stage.

Run git log --oneline to see the current commit history.


Live website URL: https://kanchanflow-liard.vercel.app/
Repository URL: https://github.com/RishaubKumar/kanchanflow
