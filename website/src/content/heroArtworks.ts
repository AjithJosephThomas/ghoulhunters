/**
 * Hero background artworks for Brisbane River / Caring for Country pages.
 *
 * The panoramic "Caring for Country — Land, Water and Sky" banner is wide enough
 * to focus on land (left), water (centre), or sky (right) per page.
 *
 * Add more PNGs to public/images/hero/ and register them here with artist credit.
 */
export interface HeroArtwork {
  id: string;
  /** Filename under public/images/hero/ */
  file: string;
  credit: string;
  /** CSS background-position — pans across the panoramic artwork */
  position: string;
  theme: 'land' | 'water' | 'sky' | 'country';
}

export const heroArtworks: Record<string, HeroArtwork> = {
  'caring-country-full': {
    id: 'caring-country-full',
    file: 'caring-for-country-banner.png',
    credit: 'Caring for Country — Land, Water and Sky',
    position: 'center center',
    theme: 'country',
  },
  'caring-country-land': {
    id: 'caring-country-land',
    file: 'caring-for-country-banner.png',
    credit: 'Caring for Country — Land, Water and Sky (land)',
    position: '12% center',
    theme: 'land',
  },
  'caring-country-water': {
    id: 'caring-country-water',
    file: 'caring-for-country-banner.png',
    credit: 'Caring for Country — Land, Water and Sky (water)',
    position: '50% center',
    theme: 'water',
  },
  'caring-country-sky': {
    id: 'caring-country-sky',
    file: 'caring-for-country-banner.png',
    credit: 'Caring for Country — Land, Water and Sky (sky)',
    position: '88% center',
    theme: 'sky',
  },
};

/** Which artwork each route uses — different focus per page */
const routeArtworkMap: Array<{ match: (path: string) => boolean; artworkId: string }> = [
  { match: (p) => p === '/', artworkId: 'caring-country-water' },
  { match: (p) => p.startsWith('/programs'), artworkId: 'caring-country-land' },
  { match: (p) => p.startsWith('/species'), artworkId: 'caring-country-water' },
  { match: (p) => p.startsWith('/watch'), artworkId: 'caring-country-water' },
  { match: (p) => p.startsWith('/how-it-works'), artworkId: 'caring-country-land' },
  { match: (p) => p.startsWith('/who-we-are'), artworkId: 'caring-country-sky' },
  { match: (p) => p.startsWith('/blueprint'), artworkId: 'caring-country-land' },
  { match: (p) => p.startsWith('/spotter-rewards'), artworkId: 'caring-country-sky' },
];

export function getHeroArtworkForPath(pathname: string): HeroArtwork {
  const normalised = pathname.replace(/\/$/, '') || '/';
  const entry = routeArtworkMap.find((r) => r.match(normalised));
  const id = entry?.artworkId ?? 'caring-country-full';
  return heroArtworks[id] ?? heroArtworks['caring-country-full'];
}

export function heroArtworkUrl(file: string): string {
  return `${import.meta.env.BASE_URL}images/hero/${file}`.replace(/\/+/g, '/');
}
