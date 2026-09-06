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
  // TODO: confirm the live domain before launch (the inbox below is on .com)
  url: "https://healthbeyondhurdles.com",
  email: "info@healthbeyondhurdles.com",
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
