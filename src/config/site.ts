/**
 * Central place for real-world facts that are still placeholders.
 * Replace these before the site goes live publicly; everything here
 * is either explicitly provided by the org or an honest "TBD" placeholder,
 * never an invented fact (no fake phone numbers, staff names, or addresses).
 */
export const siteConfig = {
  name: "Health Beyond Hurdles",
  nameFr: "Santé Sans Obstacles",
  shortName: "HBH",
  url: "https://healthbeyondhurdles.org", // TODO: replace with real domain once registered
  // TODO: replace with a real monitored inbox before launch
  email: "info@healthbeyondhurdles.org",
  location: {
    city: "Regina",
    province: "Saskatchewan",
    country: "Canada",
  },
  social: {
    // TODO: add real social profiles once created
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  status: "proposed" as const,
};

export type SiteConfig = typeof siteConfig;
