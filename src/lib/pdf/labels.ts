import type { Locale } from "@/i18n/routing";

export const pdfLabels: Record<
  Locale,
  {
    kicker: string;
    title: string;
    subtitle: string;
    preparedFor: string;
    disclaimer: string;
    toc: string;
    footerOrg: string;
    calloutWarning: string;
    calloutInfo: string;
    calloutTip: string;
    phoneLabel: string;
  }
> = {
  en: {
    kicker: "Newcomer Health Navigation Project",
    title: "The Newcomer Healthcare Guide",
    subtitle: "A plain-language introduction to Saskatchewan's healthcare system",
    preparedFor: "Prepared as a working sample for Health Beyond Hurdles' funding proposal",
    disclaimer:
      "General information only, not medical advice. In a life-threatening emergency, call 911.",
    toc: "Contents",
    footerOrg: "Health Beyond Hurdles / Santé Sans Obstacles",
    calloutWarning: "Important",
    calloutInfo: "Good to know",
    calloutTip: "Tip",
    phoneLabel: "Phone",
  },
  fr: {
    kicker: "Projet de navigation en santé pour nouveaux arrivants",
    title: "Le guide santé pour nouveaux arrivants",
    subtitle: "Une introduction en langage clair au système de santé de la Saskatchewan",
    preparedFor:
      "Préparé comme exemple de travail pour la demande de financement de Health Beyond Hurdles",
    disclaimer:
      "Information générale seulement, pas un avis médical. En cas d'urgence potentiellement mortelle, composez le 911.",
    toc: "Table des matières",
    footerOrg: "Health Beyond Hurdles / Santé Sans Obstacles",
    calloutWarning: "Important",
    calloutInfo: "À savoir",
    calloutTip: "Astuce",
    phoneLabel: "Téléphone",
  },
};
