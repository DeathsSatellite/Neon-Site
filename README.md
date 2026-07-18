# NEON CONCRETE

Storefront + portfolio for a Jacksonville street artist — neo-brutalist graffiti × arcade aesthetic. Built with **Astro** (static output), a persisted client-side cart, and lightweight CSS/SVG motion that runs fast on any device.

> ⚠️ **Placeholder content.** Artist name (`DUVAL SAINT`), copy, imagery, prices and socials are stand-ins. See [Swapping in real content](#swapping-in-real-content).

---

## Quick start

```bash
npm install
npm run dev      # local dev server → http://localhost:4321
npm run build    # static production build → ./dist
npm run preview  # preview the built site
```

Requires Node 18+.

## What's inside

| Route | Page |
|-------|------|
| `/` | Home — hero, latest drops, gallery peek, story strip, commission CTA |
| `/shop` | Catalog with client-side category filter (`?category=apparel` etc.) |
| `/shop/[slug]` | Product detail — size picker, quantity, add-to-cart, related items |
| `/gallery` | Street-art portfolio (masonry grid) |
| `/about` | Artist story + timeline |
| `/commissions` | Services + validated inquiry form |
| `/cart` | Full cart page |
| `/checkout` | Contact / shipping / payment checkout (see payments below) |
| `/404` | Arcade "Game Over" page |

### Structure

```
src/
  data/         site.ts · products.ts · artworks.ts   ← edit content here
  styles/       global.css                            ← design tokens + system
  scripts/      cart.ts                                ← persisted cart store (nanostores)
  components/   Header, Footer, CartDrawer, ProductCard, PlaceholderArt, Marquee, ArcadeSprite
  layouts/      BaseLayout.astro
  pages/        the routes above
public/         favicon.svg
```

## Swapping in real content

- **Text / prices / socials / artist name:** edit `src/data/site.ts`, `src/data/products.ts`, `src/data/artworks.ts`.
- **Images:** the `PlaceholderArt` component generates graffiti-styled SVG stand-ins. Replace with real photos by dropping files in `src/assets/` and rendering Astro's [`<Image />`](https://docs.astro.build/en/guides/images/) in place of `<PlaceholderArt />` on the product/gallery pages.
- **Colors / type:** all tokens live at the top of `src/styles/global.css` (`:root`).

## Payments — wiring up real checkout

The store is complete through the cart and checkout **UI + validation**. Payment capture is intentionally not implemented (no card data is collected here). Two clearly-marked hand-off points:

1. **`src/pages/checkout.astro`** — search for `PLACE-ORDER`. Replace the demo confirmation with a real integration:
   - **Stripe Checkout** (recommended, simplest): create a Checkout Session server-side and redirect. See <https://stripe.com/docs/checkout/quickstart>.
   - **Shopify Buy SDK / Storefront API** if inventory lives in Shopify.
2. The `/commissions` form and `/checkout` are client-validated only. Point the commissions form at **Formspree**, **Netlify Forms**, or a serverless function to actually deliver submissions.

Because checkout needs a server round-trip, deploy with an SSR adapter (`@astrojs/vercel`, `@astrojs/netlify`, etc.) when you add live payments, or keep the front-end static and call Stripe from a serverless function.

## Deploying

Static build (`npm run build`) → deploy `./dist` to Netlify, Vercel, Cloudflare Pages or GitHub Pages. Set `site` in `astro.config.mjs` to the real domain first (used for canonical URLs).

## Accessibility & performance notes

- Mobile-first, single-column down to 375px; 44px+ touch targets; visible focus rings.
- All motion is gated behind `prefers-reduced-motion` (global kill-switch in `global.css`).
- Fonts load with `display=swap`; only three families. No images to lazy-load yet (SVG placeholders) — add `loading="lazy"` when real photos go in.
- Cart state persists to `localStorage` (`nc-cart:v1`).
