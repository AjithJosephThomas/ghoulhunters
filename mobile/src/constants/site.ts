export const siteConfig = {
  name: 'Bio Buddies',
  tagline: "See it. Snap it. Report it. Don't move it.",
  subtitle: "Protecting Queensland's biodiversity",
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
