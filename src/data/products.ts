// ---------------------------------------------------------------------------
// STREETWEAR CATALOG (placeholder)
// Replace `seed` art with real product photos by editing ProductCard/PlaceholderArt,
// or add an `image` field pointing at a file in /src/assets and render it with
// Astro's <Image /> component. Prices are in whole USD.
// ---------------------------------------------------------------------------

export type ProductCategory = 'apparel' | 'accessories' | 'prints' | 'objects';

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  /** Optional strike-through original price for "drop" pricing. */
  compareAt?: number;
  blurb: string;
  description: string;
  /** Size / variant options. Empty = one-size / no variant picker. */
  sizes: string[];
  /** Palette seed for the generated placeholder art (0–4 maps to accent hues). */
  seed: number;
  /** Marketing flags. */
  badge?: 'NEW DROP' | 'LOW STOCK' | 'LIMITED' | 'RESTOCK';
  soldOut?: boolean;
}

export const products: Product[] = [
  {
    slug: 'duval-saint-box-logo-tee',
    name: 'Duval Saint Box-Logo Tee',
    category: 'apparel',
    price: 42,
    blurb: 'Heavyweight 240gsm tee with the sprayed box logo.',
    description:
      'Premium 240gsm ring-spun cotton, boxy street fit, screen-printed box logo pulled straight off the Riverside wall. Pre-shrunk, built to outlive the trend cycle.',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    seed: 0,
    badge: 'NEW DROP',
  },
  {
    slug: '904-arcade-hoodie',
    name: '904 Arcade Hoodie',
    category: 'apparel',
    price: 88,
    compareAt: 110,
    blurb: 'Pixel-glitch graphic on a 400gsm brushed-back hoodie.',
    description:
      'Midweight-to-heavy 400gsm fleece, double-lined hood, ribbed cuffs. Front-and-back pixel-glitch print inspired by late-night arcade cabinets on Bay Street.',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    seed: 1,
    badge: 'LOW STOCK',
  },
  {
    slug: 'spray-cap-6panel',
    name: 'Spray Cap — 6 Panel',
    category: 'accessories',
    price: 34,
    blurb: 'Structured 6-panel with embroidered rattle-can.',
    description:
      'Structured cotton twill 6-panel, embroidered spray-can motif, adjustable metal clasp. One size, all heads.',
    sizes: [],
    seed: 2,
    badge: 'RESTOCK',
  },
  {
    slug: 'concrete-jungle-deck',
    name: 'Concrete Jungle Skate Deck',
    category: 'objects',
    price: 75,
    blurb: '7-ply maple deck, full-wrap mural graphic.',
    description:
      '7-ply Canadian maple, 8.25" concave, full-wrap print of the Concrete Jungle mural. Skate it or hang it — either way it hits.',
    sizes: [],
    seed: 3,
    badge: 'LIMITED',
  },
  {
    slug: 'riverside-riot-print',
    name: 'Riverside Riot — Giclée Print',
    category: 'prints',
    price: 60,
    blurb: 'Signed 18×24 archival giclée, edition of 100.',
    description:
      'Museum-grade archival giclée on 310gsm cotton rag, 18×24". Hand-numbered and signed, strictly limited to 100. Ships flat in a rigid mailer.',
    sizes: [],
    seed: 4,
    badge: 'LIMITED',
  },
  {
    slug: 'bold-city-tote',
    name: 'Bold City Canvas Tote',
    category: 'accessories',
    price: 28,
    blurb: 'Heavy 16oz canvas, screen-printed skyline tag.',
    description:
      '16oz natural canvas tote, reinforced straps, screen-printed Bold City skyline tag. Carries paint, groceries, or your whole aesthetic.',
    sizes: [],
    seed: 1,
  },
  {
    slug: 'saint-sticker-pack',
    name: 'Saint Sticker Pack (×12)',
    category: 'accessories',
    price: 14,
    blurb: 'Twelve die-cut weatherproof vinyl slaps.',
    description:
      'Twelve die-cut, UV- and weatherproof vinyl stickers straight from the sketchbook. Slap responsibly.',
    sizes: [],
    seed: 2,
    badge: 'NEW DROP',
  },
  {
    slug: 'graffiti-cargo-pant',
    name: 'Graffiti Cargo Pant',
    category: 'apparel',
    price: 96,
    blurb: 'Utility cargo with paint-splatter wash.',
    description:
      'Relaxed utility cargo in 12oz ripstop, hand-finished paint-splatter wash, six pockets deep enough for a full can lineup.',
    sizes: ['28', '30', '32', '34', '36'],
    seed: 0,
    soldOut: true,
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  apparel: 'Apparel',
  accessories: 'Accessories',
  prints: 'Prints',
  objects: 'Objects',
};

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
