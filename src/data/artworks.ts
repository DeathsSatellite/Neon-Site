// ---------------------------------------------------------------------------
// STREET-ART PORTFOLIO (placeholder)
// Swap generated placeholder art for real mural photography by adding an
// `image` field and rendering with Astro's <Image />.
// ---------------------------------------------------------------------------

export interface Artwork {
  title: string;
  location: string;
  year: number;
  medium: string;
  blurb: string;
  /** Palette seed for the generated placeholder art. */
  seed: number;
  /** Grid emphasis — 'wide' spans two columns, 'tall' spans two rows. */
  span?: 'wide' | 'tall';
}

export const artworks: Artwork[] = [
  {
    title: 'Concrete Jungle',
    location: 'Riverside · Jacksonville',
    year: 2024,
    medium: 'Aerosol & latex on brick, 40ft',
    blurb: 'A 40-foot canopy of native palms rendered in acid-neon over a former textile wall.',
    seed: 3,
    span: 'wide',
  },
  {
    title: 'Bold City Saint',
    location: 'Downtown · Bay St',
    year: 2023,
    medium: 'Aerosol on concrete',
    blurb: 'The neighborhood patron saint, halo built from arcade coin-slots.',
    seed: 0,
    span: 'tall',
  },
  {
    title: 'Coin Riot',
    location: 'Five Points',
    year: 2024,
    medium: 'Aerosol & marker',
    blurb: 'Pixel-fire spilling out of a busted cabinet — a love letter to the 8-bit era.',
    seed: 2,
  },
  {
    title: 'River Current',
    location: 'San Marco',
    year: 2022,
    medium: 'Aerosol on panel',
    blurb: 'The St. Johns rendered as a ribbon of chrome and cyan.',
    seed: 1,
  },
  {
    title: 'Springfield Bloom',
    location: 'Springfield',
    year: 2023,
    medium: 'Latex & aerosol, 25ft',
    blurb: 'Wildflowers reclaiming a boarded-up storefront, tag-lettered petals.',
    seed: 4,
  },
  {
    title: 'Night Shift',
    location: 'Rail Yard District',
    year: 2024,
    medium: 'Aerosol on steel',
    blurb: 'A freight-car piece caught between two floodlights and a passing train.',
    seed: 1,
    span: 'wide',
  },
  {
    title: 'Duval Dreamer',
    location: 'Murray Hill',
    year: 2021,
    medium: 'Aerosol on brick',
    blurb: 'A kid with a rattle-can halo, first commissioned wall in the city.',
    seed: 0,
  },
  {
    title: 'High Score',
    location: 'Beaches · Jax Beach',
    year: 2023,
    medium: 'Aerosol & stencil',
    blurb: 'Surf meets synthwave — a sunset stacked like a leaderboard.',
    seed: 2,
  },
];
