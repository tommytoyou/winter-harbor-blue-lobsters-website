# Winter Harbor Blue Lobsters

Ultra-premium luxury e-commerce for hand-selected Maine lobster. Built with Next.js 15, TypeScript, Tailwind CSS, Shadcn-style UI, Framer Motion, and Stripe.

**Tagline:** *Hand-Selected. Cold-Water Perfection. From Winter Harbor to the World's Finest Tables.*

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** + custom harbor design tokens
- **Shadcn/ui**-style components (Radix primitives)
- **Framer Motion** for scroll and micro-interactions
- **Stripe** checkout (Shopify-ready via env vars)
- **CMS-ready** — static JSON today; Sanity or Contentful via `lib/cms.ts`

## Project Structure

```
winter-harbor-blue-lobsters-website/
├── app/
│   ├── page.tsx                 # Homepage (hero, featured products)
│   ├── our-story/               # Brand story
│   ├── lobstermen/              # Dynamic profiles
│   ├── shop/                    # Catalog, product detail, cart, success
│   ├── traceability/            # Batch lookup
│   ├── for-chefs/               # B2B portal
│   ├── journal/                 # Blog / stories
│   ├── contact/                 # Contact form
│   ├── certificate/             # Certificate of Authenticity download
│   └── api/checkout/            # Stripe session
├── components/
│   ├── layout/                  # Header, footer
│   ├── luxury/                  # Hero, product cards, animations
│   └── ui/                      # Button, input, tabs, etc.
├── content/                     # Static CMS data (lobstermen, stories)
├── lib/                         # Cart, products, stripe, traceability, cms
├── public/
├── styles/globals.css
├── .env.example
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

## Getting Started

```bash
cd winter-harbor-blue-lobsters-website
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local`:

| Variable | Description |
|----------|-------------|
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `NEXT_PUBLIC_SITE_URL` | Site URL for checkout redirects |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Optional Sanity CMS |
| `CONTENTFUL_SPACE_ID` | Optional Contentful CMS |

## Stripe Setup

1. Create products/prices in Stripe Dashboard (optional — checkout uses dynamic `price_data`).
2. Add keys to `.env.local`.
3. Use test card `4242 4242 4242 4242` in test mode.

## Deploy to Vercel

1. Push to GitHub.
2. Import project in [Vercel](https://vercel.com).
3. Set root directory to `winter-harbor-blue-lobsters-website` if monorepo.
4. Add environment variables from `.env.example`.
5. Deploy — Next.js is detected automatically.

```bash
npm run build   # verify locally first
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Full-screen hero, guarantees, featured shop |
| `/our-story` | Generational narrative, pillars |
| `/lobstermen` | Captain profiles (CMS-ready) |
| `/shop` | Live, frozen, gifts, subscription tabs |
| `/shop/[slug]` | Product detail with size selection |
| `/shop/cart` | Cart + Stripe checkout |
| `/traceability` | Batch ID lookup (try `WHB2026A0142`) |
| `/for-chefs` | B2B pricing and testimonials |
| `/journal` | Stories and recipes |
| `/contact` | Concierge form |
| `/certificate` | Download authenticity certificate |

## CMS Migration

Replace static imports in pages with `fetchLobstermen()` / `fetchStories()` from `lib/cms.ts`. See comments in that file for Sanity and Contentful examples.

## License

Proprietary — Winter Harbor Blue Lobsters.
