export const siteConfig = {
  name: 'Bio Buddies',
  appVersion: '1.0.3',
  tagline: "See it. Snap it. Report it. Don't move it.",
  subtitle: "Protecting Queensland's biodiversity",
  website: {
    baseUrl: 'https://ajithjosephthomas.github.io/ghoulhunters',
    homeUrl: 'https://ajithjosephthomas.github.io/ghoulhunters/',
    aboutUsUrl: 'https://ajithjosephthomas.github.io/ghoulhunters/who-we-are',
    biodiversityQueenslandUrl: 'https://www.qld.gov.au/environment/plants-animals/biodiversity',
    reportBiosecurityUrl: 'https://ajithjosephthomas.github.io/ghoulhunters/#report-biosecurity',
    spotterRewardsUrl: 'https://ajithjosephthomas.github.io/ghoulhunters/spotter-rewards',
  },
  biosecurity: {
    authority: 'Biosecurity Queensland',
    phone: '13 25 23',
    reportUrl: 'https://www.dpi.qld.gov.au/contact/report-a-biosecurity-pest-or-disease',
    defaultWarning:
      'Do not touch or move suspected invasive species — moving them can spread pests and harm biodiversity.',
  },
  tags: {
    asianGoldClam: 'Asian Gold Clam',
    others: 'Others',
  },
} as const;
