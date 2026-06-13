export interface NavItem {
  path: string;
  label: string;
}

export interface RewardItem {
  icon: string;
  label: string;
}

export interface ExternalLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface Program {
  id: string;
  status: 'active' | 'coming-soon';
  name: string;
  scientificName: string;
  aliases: string;
  commonNameShort: string;
  organismLabel: string;
  region: string;
  cardIcon: string;
  cardDescription: string;
  watchProjectName: string;
  watchSubtitle: string;
  metaDescription: string;
  watchMetaDescription: string;
  doNotMoveWarning: string;
  doNotMoveDetail: string;
  reportLabel: string;
  imagesDir: string;
  thumbnail: string;
  showInNav: boolean;
  legacyUrls: string[];
  externalLinks: ExternalLink[];
  footerLinks: ExternalLink[];
}

export const siteConfig = {
  site: {
    name: 'Bio Buddies',
    tagline: "See it. Snap it. Report it. Don't move it.",
    subtitle: "Protecting Queensland's biodiversity",
    region: 'Brisbane River & south-east Queensland',
    description:
      'Bio Buddies helps communities learn about invasive species, report safely, and earn spotter rewards for genuine accurate sightings.',
    schoolName: "St Anthony's Primary School",
    schoolSuburb: 'Kedron',
    schoolYearLevel: 'Grade 5',
    year: 2026,
  },

  reporterRewards: {
    enabled: true,
    path: '/spotter-rewards',
    pageMetaDescription:
      'Earn Bio Buddies spotter rewards for genuine, accurate invasive species sightings — mugs, jackets, coupons, and more.',
    heading: 'Spotter rewards',
    badge: 'Thank our heroes',
    lead: 'Real sightings. Real impact. Real thanks.',
    body:
      'Bio Buddies celebrates people who help with care and honesty. Stay active, report what you really see, and you could earn thank-you gifts from our community program.',
    eligibilityHeading: 'Who can earn rewards?',
    eligibility:
      'Active members who submit genuine, accurate sightings that help protect our rivers and wildlife. Each report is reviewed — we only reward helpful, honest reports.',
    rewards: [
      { icon: 'coffee', label: 'Branded mugs' },
      { icon: 'checkroom', label: 'Jackets & hoodies' },
      { icon: 'redeem', label: 'Reward coupons' },
      { icon: 'emoji_events', label: 'More spotter prizes' },
    ] as RewardItem[],
    note:
      'Always report suspected pests to official biosecurity channels too. Bio Buddies rewards are extra thank-yous for our community — not a replacement for official reporting.',
  },

  biosecurity: {
    authority: 'Biosecurity Queensland',
    phone: '13 25 23',
    reportUrl: 'https://www.dpi.qld.gov.au/contact/report-a-biosecurity-pest-or-disease',
    reportHours: 24,
    defaultWarning:
      'Do not touch or move suspected invasive species — moving them can spread pests and harm biodiversity.',
  },

  nav: [
    { path: '/', label: 'Home' },
    { path: '/programs', label: 'Programs' },
    { path: '/spotter-rewards', label: 'Spotter rewards' },
    { path: '/how-it-works', label: 'How it works' },
    { path: '/who-we-are', label: 'Who We Are' },
    { path: '/blueprint', label: 'Blueprint' },
  ] as NavItem[],

  programs: [
    {
      id: 'freshwater-gold-clam',
      status: 'active',
      name: 'Freshwater Gold Clam',
      scientificName: 'Corbicula fluminea',
      aliases: 'also called Asian gold clam, Asian clam, or golden clam',
      commonNameShort: 'gold clam',
      organismLabel: 'clam',
      region: 'Brisbane River',
      cardIcon: 'pest_control',
      cardDescription:
        'What it looks like, where it lives, and why it matters for our ecosystem.',
      watchProjectName: 'Gold Clam Watch',
      watchSubtitle: 'Community awareness & safe reporting',
      metaDescription:
        'Identify freshwater gold clam (Corbicula fluminea) in the Brisbane River. Official facts, photos, and what to do if you see one.',
      watchMetaDescription:
        'Bio Buddies Gold Clam Watch — community awareness and reporting for Brisbane River biosecurity.',
      doNotMoveWarning:
        'Do not touch or move freshwater gold clam — it can spread the pest.',
      doNotMoveDetail:
        'the clam. Moving it can spread larvae and harm river biodiversity.',
      reportLabel: 'suspected gold clam',
      imagesDir: '/images/species/freshwater-gold-clam',
      thumbnail: 'dpi-shell-closeup.jpeg',
      showInNav: true,
      legacyUrls: ['asian-gold-clam.html', 'eradication-project.html'],
      externalLinks: [
        {
          label: 'Queensland fact sheet',
          url: 'https://www.business.qld.gov.au/industries/farms-fishing-forestry/agriculture/biosecurity/animals/invasive/restricted/freshwater-gold-clam',
          primary: true,
        },
        {
          label: 'DPI management hub',
          url: 'https://dpi.engagementhub.com.au/freshwater-gold-clam',
        },
        {
          label: 'NSW DPI species page',
          url: 'https://www.dpi.nsw.gov.au/dpi/biosecurity/aquatic-biosecurity/aquatic-pests-and-diseases/freshwater-pests/freshwater-molluscs/freshwater-gold-clam',
        },
      ],
      footerLinks: [
        {
          label: 'DPI — Gold clam management',
          url: 'https://dpi.engagementhub.com.au/freshwater-gold-clam',
        },
        {
          label: 'Business Queensland fact sheet',
          url: 'https://www.business.qld.gov.au/industries/farms-fishing-forestry/agriculture/biosecurity/animals/invasive/restricted/freshwater-gold-clam',
        },
        {
          label: 'NSW DPI — Freshwater gold clam',
          url: 'https://www.dpi.nsw.gov.au/dpi/biosecurity/aquatic-biosecurity/aquatic-pests-and-diseases/freshwater-pests/freshwater-molluscs/freshwater-gold-clam',
        },
      ],
    },
  ] as Program[],
};

export function getProgram(id: string): Program | undefined {
  return siteConfig.programs.find((p) => p.id === id);
}

export function activePrograms(): Program[] {
  return siteConfig.programs.filter((p) => p.status === 'active');
}

export function programImage(program: Program, filename: string): string {
  return `${import.meta.env.BASE_URL}${program.imagesDir.replace(/^\//, '')}/${filename}`.replace(
    /\/+/g,
    '/',
  );
}
