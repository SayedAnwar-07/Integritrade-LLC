# Integritrade LLC — Corporate Website

> Next.js 16 marketing website for **Integritrade LLC**, a certified IT Asset Disposition (ITAD), hard‑drive shredding, secure data destruction, and e‑waste recycling provider serving businesses across California.

🔗 **Production domain:** [integritradellc.com](https://integritradellc.com/)

---

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Page Routes](#page-routes)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Styling & UI](#styling--ui)
- [State Management](#state-management)
- [Forms & Email](#forms--email)
- [Deployment](#deployment)
- [Code Quality](#code-quality)
- [Contact](#contact)

---

## About the Project

Integritrade LLC offers ITAD services (pickup, chain‑of‑custody tracking, certified data destruction, recycling, and asset recovery) for regulated industries — healthcare (HIPAA), finance (GLBA/SOX), education (FERPA), and corporate enterprise. The site serves three audiences:

1. **Enterprise ITAD clients** retiring IT assets at scale.
2. **Regulated industries** needing audit‑ready compliance workflows (HIPAA, GLBA, SOX, FERPA, NIST 800‑88).
3. **Local customers** in California seeking free e‑waste drop‑off or pickup.

Key site features include service catalogs, industry‑specific landing pages, certifications, a booking/quote form, dark‑mode theming, animated sections, and 3D visuals.

---

## Tech Stack

### Core Framework

| Tech | Version | Purpose |
|------|---------|---------|
| **Next.js** | `^16.2.6` | React framework (App Router, SSR/SSG, image optimization) |
| **React** | `^19.2.6` | UI library |
| **TypeScript** | `^5.4.5` | Type safety |
| **Node.js** | `>=18.17` | Runtime (Node 20+ recommended for Next 16) |

### Styling

- **Tailwind CSS** `3.4.7` — utility‑first styling
- **tailwindcss-animate** — animation utilities
- **tailwind-merge** + **clsx** + **class-variance-authority** — class composition helpers
- **next-themes** — dark/light mode toggle
- **shadcn/ui** — component primitives (config in `components.json`)

### UI Primitives (Radix UI)

Accessible, unstyled headless primitives used to build the component library:

`@radix-ui/react-accordion`, `react-alert-dialog`, `react-dialog`, `react-dropdown-menu`, `react-navigation-menu`, `react-select`, `react-separator`, `react-slot`, `react-tabs`

### Icons

- **lucide-react** — primary icon set
- **react-icons** — additional icons

### Animation & 3D

- **framer-motion** / **motion** — page and component animations
- **cobe** — interactive 3D globe

### State Management

- **@reduxjs/toolkit** + **react-redux** — global store (see `store/`)

### Forms & Validation

- **react-hook-form** — form handling
- **zod** — schema validation

### Email & Notifications

- **@emailjs/browser** — client‑side email
- **@react-email/components** + **@react-email/render** — JSX email templates
- **react-hot-toast** — toast notifications

---

## Project Structure

```
Integritrade-LLC/
├── app/                  # Next.js App Router pages and layouts
│   ├── (routes)/         # Service, industry, about, etc. pages
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable React components (UI, sections, layout)
├── assets/               # Local images, fonts, media used in code
├── public/               # Static assets served at root (favicons, og images)
├── data/                 # Static content (services, industries, FAQs, etc.)
├── lib/                  # Utilities, helpers, API clients
├── store/                # Redux Toolkit slices and store config
├── types/                # Shared TypeScript types
├── components.json       # shadcn/ui configuration
├── tailwind.config.ts    # Tailwind theme, plugins, content paths
├── postcss.config.js     # PostCSS pipeline
├── next.config.mjs       # Next.js configuration
├── tsconfig.json         # TypeScript compiler options
├── .eslintrc.json        # ESLint config (extends next/core-web-vitals)
└── package.json
```

---

## Page Routes

Routes mirror the App Router file structure under `app/`:

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services overview, industries, process, certifications |
| `/services/` | Services index |
| `/services/e-waste-recycling/` | Electronics recycling service detail |
| `/services/data-destruction-services/` | Data destruction service detail |
| `/services/asset-recovery-services/` | Asset remarketing / buyback |
| `/services/it-asset-disposition/` | Full ITAD package |
| `/industries/` | Industries index |
| `/industries/business-corporate/` | Corporate & enterprise |
| `/industries/healthcare/` | Healthcare (HIPAA) |
| `/industries/finance/` | Banking & finance (GLBA/SOX) |
| `/industries/education/` | Education (FERPA) |
| `/certifications/` | R2v3 and other certifications |
| `/about/` | About the company |
| `/about/our-team/` | Team members |
| `/about/our-partners/` | Partner organizations |
| `/about/our-capabilities/` | Operational capabilities |
| `/accepted-items/` | Accepted e‑waste items list |
| `/service-area/` | California service zones |
| `/service-book/` | Booking / quote request form |
| `/terms/` | Terms of service |
| `/privacy/` | Privacy policy |

---

## Getting Started

### Prerequisites

- **Node.js** 18.17 or newer (Node 20+ recommended)
- **npm**, **yarn**, or **pnpm**
- A **Resend** API key (or Nodemailer SMTP credentials) if you plan to test the contact form

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SayedAnwar-07/Integritrade-LLC.git
cd Integritrade-LLC

# 2. Install dependencies
npm install
# or
yarn install
# or
pnpm install

# 3. Create your environment file
cp .env.example .env.local   # if .env.example exists, otherwise create .env.local manually

# 4. Start the dev server
npm run dev
```

The site will be available at **http://localhost:3000**.

---

## Styling & UI

- **Tailwind config** lives in `tailwind.config.ts` (theme tokens, dark mode, plugin list).
- **shadcn/ui** components are scaffolded based on `components.json` and live under `components/ui/`.
- **Dark mode** is handled by `next-themes` (class strategy). Toggle component lives in the header.
- **Class merging** uses the standard shadcn pattern: `cn()` helper in `lib/utils.ts` combining `clsx` + `tailwind-merge`.

---

## State Management

Redux Toolkit is configured under `store/`. Typical structure:

```
store/
├── index.ts          # configureStore + RootState/AppDispatch types
├── hooks.ts          # typed useAppDispatch / useAppSelector
└── slices/           # feature slices (UI, form state, etc.)
```

Wrap the app with the Redux `<Provider>` in `app/layout.tsx` (or a client component imported there) so server components remain untouched.

---

## Forms & Email

The booking/quote form (`/service-book/`) is built with **react-hook-form** + **zod** schemas. On submit, it posts to a Next.js Route Handler (under `app/api/...`) which dispatches the email through Resend (primary) with Nodemailer/EmailJS as fallbacks. Email templates are authored as React components via `@react-email/components` and rendered server‑side with `@react-email/render`.
