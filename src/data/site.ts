// ---------------------------------------------------------------------------
// GLOBAL SITE CONFIG  ·  swap these placeholder values for the real artist's.
// Everything user-facing (name, socials, contact) reads from here.
// ---------------------------------------------------------------------------

export const site = {
  brand: 'NEON CONCRETE',
  // The artist's street tag / alias (placeholder).
  tag: 'DUVAL SAINT',
  legalName: 'Placeholder Artist Name',
  city: 'Jacksonville, FL',
  areaCode: '904',
  tagline: 'Street art, streetwear & pixel dreams out of the Bold City.',
  email: 'hello@neonconcrete.example',
  // Social links — replace # with real URLs (or remove the entry to hide it).
  socials: [
    { label: 'Instagram', handle: '@duval.saint', href: '#' },
    { label: 'TikTok', handle: '@duval.saint', href: '#' },
    { label: 'YouTube', handle: 'DUVAL SAINT', href: '#' },
  ],
  // Storefront currency.
  currency: 'USD',
  currencySymbol: '$',
} as const;

export type Social = (typeof site.socials)[number];
