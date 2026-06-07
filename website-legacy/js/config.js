/**
 * Nature Ninjas site configuration.
 * To add a new invasive species program: add an entry to `programs` and create
 * content/species/{id}.html and content/watch/{id}.html (plus images/species/{id}/).
 * Set `thumbnail` to an image filename in that folder for the home page card.
 */
window.NATURE_NINJAS_CONFIG = {
  site: {
    name: 'Nature Ninjas',
    tagline: 'See it. Snap it. Report it. Don\'t move it.',
    subtitle: 'Protecting Queensland\'s biodiversity',
    region: 'Brisbane River & south-east Queensland',
    description:
      'Nature Ninjas helps communities learn about invasive species, report safely, and earn spotter rewards for genuine accurate sightings.',
    schoolName: "St Anthony's Primary School",
    schoolSuburb: 'Kedron',
    schoolYearLevel: 'Grade 5',
    year: 2026,
  },

  /** Community reporter rewards program (spotter-rewards.html) */
  reporterRewards: {
    enabled: true,
    pageHref: 'spotter-rewards.html',
    pageMetaDescription:
      'Earn Nature Ninjas spotter rewards for genuine, accurate invasive species sightings — mugs, jackets, coupons, and more.',
    heading: 'Spotter rewards',
    badge: 'Thank our heroes',
    lead:
      'Real sightings. Real impact. Real thanks.',
    body:
      'Nature Ninjas celebrates people who help with care and honesty. Stay active, report what you really see, and you could earn thank-you gifts from our community program.',
    eligibilityHeading: 'Who can earn rewards?',
    eligibility:
      'Active members who submit genuine, accurate sightings that help protect our rivers and wildlife. Each report is reviewed — we only reward helpful, honest reports.',
    rewards: [
      { icon: 'coffee', label: 'Branded mugs' },
      { icon: 'checkroom', label: 'Jackets & hoodies' },
      { icon: 'redeem', label: 'Reward coupons' },
      { icon: 'emoji_events', label: 'More spotter prizes' },
    ],
    note:
      'Always report suspected pests to official biosecurity channels too. Nature Ninjas rewards are extra thank-yous for our community — not a replacement for official reporting.',
  },

  biosecurity: {
    authority: 'Biosecurity Queensland',
    phone: '13 25 23',
    reportUrl: 'https://www.dpi.qld.gov.au/contact/report-a-biosecurity-pest-or-disease',
    reportHours: 24,
    defaultWarning:
      'Do not touch or move suspected invasive species — moving them can spread pests and harm biodiversity.',
  },

  /** Static pages always in the main nav */
  nav: [
    { href: 'index.html', label: 'Home' },
    { href: 'programs.html', label: 'Programs' },
    { href: 'spotter-rewards.html', label: 'Spotter rewards' },
    { href: 'program.html', label: 'How it works' },
    { href: 'who-we-are.html', label: 'Who We Are' },
    { href: 'blueprint.html', label: 'Blueprint' },
  ],

  /**
   * Invasive species / eradication watch programs.
   * status: "active" | "coming-soon"
   */
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
        'Nature Ninjas Gold Clam Watch — community awareness and reporting for Brisbane River biosecurity.',
      doNotMoveWarning:
        'Do not touch or move freshwater gold clam — it can spread the pest.',
      doNotMoveDetail:
        'the clam. Moving it can spread larvae and harm river biodiversity.',
      reportLabel: 'suspected gold clam',
      speciesContent: 'content/species/freshwater-gold-clam.html',
      watchContent: 'content/watch/freshwater-gold-clam.html',
      imagesDir: 'images/species/freshwater-gold-clam',
      thumbnail: 'bq-riverbank.jpg',
      heroStory: 'partials/hero-story.html',
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

    // Example: uncomment and add content files to enable a second program
    // {
    //   id: 'example-pest',
    //   status: 'coming-soon',
    //   name: 'Example Invasive Species',
    //   scientificName: 'Species name',
    //   aliases: 'common names',
    //   commonNameShort: 'pest',
    //   organismLabel: 'organism',
    //   region: 'Queensland waterways',
    //   cardIcon: 'bug_report',
    //   cardDescription: 'Species guide coming soon.',
    //   watchProjectName: 'Example Watch',
    //   watchSubtitle: 'Coming soon',
    //   metaDescription: 'Coming soon.',
    //   watchMetaDescription: 'Coming soon.',
    //   doNotMoveWarning: 'Do not touch or move suspected invasive species.',
    //   doNotMoveDetail: 'the organism. Moving it may spread the pest.',
    //   reportLabel: 'suspected pest',
    //   speciesContent: 'content/species/example-pest.html',
    //   watchContent: 'content/watch/example-pest.html',
    //   imagesDir: 'images/species/example-pest',
    //   showInNav: false,
    //   legacyUrls: [],
    //   externalLinks: [],
    //   footerLinks: [],
    // },
  ],
};
