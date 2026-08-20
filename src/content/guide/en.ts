import type { GuideMeta, GuideSection } from "./types";

export const guideMeta: GuideMeta = {
  lastUpdated: "August 2026",
  version: "Draft 1.0",
};

export const guideSections: GuideSection[] = [
  {
    id: "welcome",
    number: "00",
    title: "How to use this guide",
    intro:
      "A plain-language introduction to Saskatchewan's healthcare system for newcomers who have lived in the province for less than five years.",
    blocks: [
      {
        type: "p",
        text: "This guide was written for immigrants, refugees, international students, temporary and permanent residents, and newcomer families who currently live in Saskatchewan and want a clear starting point for understanding how healthcare works here. It is offered equally in French and English, because we believe your ability to understand your health information should never depend on which of Canada's official languages you speak.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "This is general information, not medical advice",
        text: "Nothing in this guide diagnoses conditions, recommends treatment, or interprets test results. For anything specific to your health, contact a licensed healthcare provider, call HealthLine 811, or go to an emergency department. In a life-threatening emergency, always call 911.",
      },
      {
        type: "callout",
        tone: "info",
        title: "About this draft",
        text: "This edition was prepared to accompany Health Beyond Hurdles / Santé sans obstacles's funding proposal, as a working sample of the first resource the Newcomer Health Navigation Project would publish. Before an official release, it would be reviewed by healthcare professionals and settlement workers, checked against current sources, and dated at each update, exactly as described in our quality-assurance commitments below.",
      },
      {
        type: "p",
        text: "Use the table of contents to jump straight to what you need, or read start to finish. Each section stands on its own, so there's no wrong place to begin.",
      },
    ],
  },
  {
    id: "system",
    number: "01",
    title: "How Saskatchewan's healthcare system works",
    blocks: [
      {
        type: "p",
        text: "Saskatchewan has a publicly funded healthcare system. If you hold a valid Saskatchewan Health Card, medically necessary visits to a doctor or nurse practitioner and medically necessary hospital care are covered at no cost to you at the point of care. The system is funded through taxes, not through fees paid at each visit.",
      },
      {
        type: "p",
        text: "Your health card is what proves you're covered. You'll be asked for it, or its number, almost anywhere you receive care: a doctor's office, a walk-in clinic, a hospital, or a lab.",
      },
      {
        type: "subheading",
        text: "What's generally included",
      },
      {
        type: "list",
        items: [
          "Visits to a family doctor or nurse practitioner",
          "Visits to medical specialists (usually with a referral)",
          "Hospital stays and emergency department care",
          "Most medically necessary surgery",
          "Many lab tests and diagnostic imaging ordered by your provider",
        ],
      },
      {
        type: "subheading",
        text: "What's usually not automatically included",
      },
      {
        type: "p",
        text: "Prescription drugs taken at home, routine dental care, vision care, and ambulance transport are generally not covered automatically the way doctor and hospital visits are, and may come with a cost. Coverage and assistance programs exist for many of these (see the Referrals, Tests & Prescriptions section), but the details depend on your situation. Ask your pharmacist, your provider, or HealthLine 811, or look into extra coverage through an employer, school, or private plan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Keep it current",
        text: "Update your address with eHealth Saskatchewan whenever you move, and carry your health card (or a photo of it) whenever you might need care.",
      },
    ],
  },
  {
    id: "health-card",
    number: "02",
    title: "Getting your Saskatchewan Health Card",
    blocks: [
      {
        type: "p",
        text: "The Saskatchewan Health Card is administered by eHealth Saskatchewan. Applying is free, and it's worth doing as soon as possible after you arrive.",
      },
      {
        type: "subheading",
        text: "How to apply",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Get the application form online at ehealthsask.ca, or ask for a paper copy at a local government or settlement office.",
          "Gather photocopies of documents that prove: your legal entitlement to be in Canada (such as your immigration or study/work permit documents), your Saskatchewan residency, and your identity.",
          "Submit the completed form with your documents by mail, email, or fax, as instructed on the form.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Processing takes time",
        text: "Applications often take several weeks to process, and rules about exactly when coverage begins can depend on your immigration status and situation. Apply right away, and confirm current timelines directly with eHealth Saskatchewan rather than relying on anything you read elsewhere, including this guide.",
      },
      {
        type: "p",
        text: "If you're waiting for your card, ask about temporary private health insurance to bridge any gap. If you are a refugee claimant or refugee, you may be eligible for coverage through the federal Interim Federal Health Program (IFHP), which can include hospital care, provider visits, and some prescription, vision, and dental costs, until your provincial coverage begins.",
      },
      {
        type: "contacts",
        items: [
          {
            name: "eHealth Saskatchewan: Health Card Services",
            detail: "Applications, renewals, and address updates",
            phone: "1-800-667-7551",
            url: "ehealthsask.ca",
          },
        ],
      },
    ],
  },
  {
    id: "care-team",
    number: "03",
    title: "Who's who in your care team",
    intro:
      "Saskatchewan's healthcare system involves several kinds of providers. Knowing the difference helps you go to the right place the first time.",
    blocks: [
      {
        type: "subheading",
        text: "Family doctor or nurse practitioner",
      },
      {
        type: "p",
        text: "Your main point of contact for ongoing care: checkups, general concerns, prescriptions, and referrals to specialists when needed. Nurse practitioners (NPs) can assess, diagnose, treat, and prescribe, much like a family doctor. You typically need an appointment. If you don't have one yet, the Saskatchewan Health Authority maintains a list of providers accepting new patients by region, and you can join a wait list while using walk-in or urgent care in the meantime.",
      },
      {
        type: "subheading",
        text: "Pharmacist",
      },
      {
        type: "p",
        text: "Available at any pharmacy, no appointment needed. Pharmacists can answer questions about medications and interactions, administer many vaccines, and in some cases assess and prescribe for minor ailments. They're often the fastest healthcare professional to reach.",
      },
      {
        type: "subheading",
        text: "Public health nurse",
      },
      {
        type: "p",
        text: "Focuses on prevention and community health: childhood immunizations, prenatal and infant health, and public health programs. Usually reached through a community health office rather than a hospital.",
      },
      {
        type: "subheading",
        text: "Specialist",
      },
      {
        type: "p",
        text: "A doctor focused on one area of medicine (such as cardiology or dermatology). In Saskatchewan, seeing a specialist usually requires a referral from your family doctor or nurse practitioner.",
      },
      {
        type: "subheading",
        text: "Walk-in clinic",
      },
      {
        type: "p",
        text: "No appointment needed, but expect to wait your turn. Good for non-emergency issues when you don't have a regular provider or can't get in to see them soon enough: a cold, a minor infection, a prescription renewal.",
      },
      {
        type: "subheading",
        text: "Urgent care centre",
      },
      {
        type: "p",
        text: "For problems that are serious but not life-threatening, such as an injury that needs attention today, and don't require a full emergency department. Not every community has one; where available, it's often faster than an ED for these situations.",
      },
      {
        type: "subheading",
        text: "Emergency department (ED)",
      },
      {
        type: "p",
        text: "For life-threatening or very serious conditions: chest pain, difficulty breathing, severe bleeding, signs of stroke, major injuries. You'll be seen in order of medical urgency, not arrival time, so a busy waiting room doesn't mean something is wrong with the system. It means others are being treated first because their needs are more urgent.",
      },
    ],
  },
  {
    id: "when-to-call",
    number: "04",
    title: "HealthLine 811, 911, or 988?",
    intro:
      "Saskatchewan has three key numbers for health and safety. Knowing which one to use saves time in a moment that matters.",
    blocks: [
      {
        type: "table",
        headers: ["Number", "When to use it", "What happens"],
        rows: [
          [
            "911",
            "Life-threatening emergency: chest pain, trouble breathing, severe bleeding, signs of stroke, someone at risk of harming themselves or others",
            "Connects you immediately to fire, police, or ambulance, 24/7",
          ],
          [
            "811",
            "You're not sure how serious something is, need health advice, or have a question about symptoms, medication, or where to go for care",
            "Free, confidential advice from a registered nurse, psychiatric nurse, or social worker, 24/7. Interpretation is available in over 100 languages",
          ],
          [
            "988",
            "You're thinking about suicide, in crisis, or worried about someone who might be",
            "Free call or text, 24/7, bilingual (French and English) crisis support",
          ],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "When in doubt, call 811 first",
        text: "If you're unsure whether something is an emergency, HealthLine 811 can help you decide whether to see a doctor, go to a walk-in clinic, visit the emergency department, or manage it at home.",
      },
      {
        type: "contacts",
        items: [
          {
            name: "HealthLine 811: technical issues reaching 811",
            detail: "Alternate line if you can't connect by dialing 811",
            phone: "1-877-800-0002",
          },
          {
            name: "HealthLine 811: Deaf and hard of hearing",
            detail: "SaskTel Relay Operator Service",
            phone: "1-800-855-0511",
          },
        ],
      },
    ],
  },
  {
    id: "appointments",
    number: "05",
    title: "Booking and preparing for an appointment",
    blocks: [
      {
        type: "p",
        text: "Most clinics are booked by phone, and some also offer online booking. Walk-in clinics don't take appointments; you're seen in the order you arrive, based on availability that day.",
      },
      {
        type: "subheading",
        text: "What to bring",
      },
      {
        type: "list",
        items: [
          "Your Saskatchewan Health Card (or the number, if the physical card hasn't arrived yet)",
          "Photo identification",
          "A list of any medications you currently take",
          "A written list of your questions or concerns, since it's easy to forget them once you're in the room",
          "A support person, if you'd like one with you",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ask for interpretation when you book",
        text: "You have the right to ask for care in the language you're most comfortable in. When you book, mention that you'd like interpretation support. Phone interpretation is available at Saskatchewan Health Authority facilities, and French-speaking newcomers can also reach the Health Accompagnateur Service (see the French-language care section).",
      },
      {
        type: "subheading",
        text: "Questions worth asking during your visit",
      },
      {
        type: "list",
        items: [
          "What is this condition or concern, in plain language?",
          "What are the next steps, and who will follow up with me?",
          "Do I need a referral, a test, or a prescription?",
          "When and how will I get my results?",
          "What should I do if things don't improve, or get worse?",
        ],
      },
    ],
  },
  {
    id: "referrals",
    number: "06",
    title: "Referrals, tests, and prescriptions",
    blocks: [
      {
        type: "subheading",
        text: "Referrals",
      },
      {
        type: "p",
        text: "A referral is when your family doctor or nurse practitioner sends you to see a specialist. Most specialists in Saskatchewan require one. How long it takes to be seen depends on how urgent your situation is and how available that specialist is; it can range from days to months. If your symptoms change or worsen while you wait, contact your provider or HealthLine 811.",
      },
      {
        type: "subheading",
        text: "Lab tests and imaging",
      },
      {
        type: "p",
        text: "Blood work, X-rays, ultrasounds, and similar tests are ordered by your provider and usually done at a lab or hospital. Results are generally sent back to the provider who ordered them. Ask when and how you'll find out your results, since it isn't always automatic.",
      },
      {
        type: "subheading",
        text: "Prescriptions",
      },
      {
        type: "p",
        text: "Prescriptions are filled at a pharmacy. Ask your pharmacist about generic alternatives, which often cost less than brand-name drugs. If cost is a concern, Saskatchewan's Special Support Program provides income-tested assistance with prescription drug costs. Ask a pharmacist how to apply, or contact the Drug Plan Branch directly.",
      },
      {
        type: "contacts",
        items: [
          {
            name: "Special Support Program (prescription drug cost assistance)",
            detail: "Income-tested help with eligible drug costs",
            phone: "1-800-667-7581",
          },
        ],
      },
    ],
  },
  {
    id: "other-services",
    number: "07",
    title: "Mental health, pharmacy, and other services",
    blocks: [
      {
        type: "subheading",
        text: "Mental health and addictions support",
      },
      {
        type: "p",
        text: "HealthLine 811 offers mental health and addictions advice and can connect you to local services. For a crisis or thoughts of suicide, call or text 988, free and available 24/7 in French and English. Community mental health clinics also provide ongoing support. Ask your provider or 811 to find one near you.",
      },
      {
        type: "subheading",
        text: "Pharmacy services",
      },
      {
        type: "p",
        text: "Beyond filling prescriptions, pharmacies commonly offer vaccinations, medication reviews, and assessment for minor ailments. It's often the quickest place to get a health question answered without an appointment.",
      },
      {
        type: "subheading",
        text: "Dental care",
      },
      {
        type: "p",
        text: "Routine dental care is generally not covered by the health card. Ask a settlement worker or 211 Saskatchewan about low-cost or community dental clinics and any programs your family may qualify for.",
      },
      {
        type: "subheading",
        text: "Reproductive, maternal, and child health",
      },
      {
        type: "p",
        text: "Family doctors, nurse practitioners, and public health nurses provide prenatal care, family planning, and child health services, including routine immunizations. Public health offices run many of these programs directly.",
      },
      {
        type: "subheading",
        text: "Vaccination",
      },
      {
        type: "p",
        text: "Routine and travel vaccines are available through public health offices and many pharmacies. Ask about which vaccines are recommended for your family.",
      },
    ],
  },
  {
    id: "rights",
    number: "08",
    title: "Your rights as a patient",
    blocks: [
      {
        type: "list",
        items: [
          "Respectful care, free from discrimination based on language, culture, income, or immigration status.",
          "Informed consent: a clear explanation of a treatment, in your language, before you agree to it, and the right to decline or ask for more time or information.",
          "Interpretation and language support when you need it.",
          "Privacy and confidentiality of your health information.",
          "The right to ask questions, seek a second opinion, and access your own health records.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "You are never required to agree on the spot",
        text: "It's always acceptable to ask a provider to explain something again, more simply, or in your preferred language, or to take time before deciding on a treatment.",
      },
    ],
  },
  {
    id: "french",
    number: "09",
    title: "Getting care in French",
    intro:
      "French-speaking newcomers in Saskatchewan have specific supports available, in addition to the general interpretation services described above.",
    blocks: [
      {
        type: "p",
        text: "The Saskatchewan Health Authority aims to provide care in the language patients prefer where possible, including phone interpretation at its facilities. Mention your language preference when you register for an appointment.",
      },
      {
        type: "p",
        text: "French-speaking newcomers can also reach the Health Accompagnateur Service, which provides interpretation support specifically for hospital appointments in Regina and Saskatoon.",
      },
      {
        type: "p",
        text: "The Assemblée communautaire fransaskoise (ACF) supports Francophone newcomers with settlement services in Regina and Saskatoon, alongside healthcare navigation.",
      },
      {
        type: "contacts",
        items: [
          {
            name: "Health Accompagnateur Service",
            detail: "Interpretation support for hospital appointments in Regina and Saskatoon",
            phone: "1-844-437-0373",
          },
          {
            name: "Assemblée communautaire fransaskoise (ACF)",
            detail: "Francophone settlement services, Regina and Saskatoon",
          },
        ],
      },
    ],
  },
  {
    id: "beyond",
    number: "10",
    title: "Beyond healthcare: settlement, transportation, housing, and food",
    intro:
      "Health doesn't happen in isolation. These organizations help with the everyday supports that make it possible to actually get to your appointments and take care of yourself.",
    blocks: [
      {
        type: "p",
        text: "Regina Open Door Society (RODS) is a settlement agency offering orientation for newcomers, support for newly arrived refugees, school-based settlement support for families, and general help finding your footing, including connections to transportation, housing, and food resources.",
      },
      {
        type: "p",
        text: "211 Saskatchewan is a free, confidential service that connects you to social, community, and non-clinical health resources across the province, including transportation assistance, food programs, and housing supports, in multiple languages.",
      },
      {
        type: "contacts",
        items: [
          {
            name: "Regina Open Door Society (RODS)",
            detail: "2314 11th Avenue, Regina, SK",
            phone: "306-352-3500",
            url: "rods.sk.ca",
          },
          {
            name: "211 Saskatchewan",
            detail: "Free referral service for community and social supports",
            phone: "211",
            url: "sk.211.ca",
          },
        ],
      },
    ],
  },
  {
    id: "glossary",
    number: "11",
    title: "Glossary of common terms",
    intro: "Key healthcare terms in English and French, explained simply.",
    blocks: [
      {
        type: "glossary",
        items: [
          {
            term: "Health card / Carte-santé",
            definition:
              "The card that proves you're covered under Saskatchewan's public healthcare system.",
          },
          {
            term: "Referral / Aiguillage / référence",
            definition:
              "When your regular provider sends you to see a specialist.",
          },
          {
            term: "Family doctor / Médecin de famille",
            definition: "Your main, ongoing healthcare provider.",
          },
          {
            term: "Nurse practitioner / Infirmière praticienne",
            definition:
              "A nurse with advanced training who can assess, diagnose, treat, and prescribe.",
          },
          {
            term: "Walk-in clinic / Clinique sans rendez-vous",
            definition: "A clinic for non-emergency care with no appointment needed.",
          },
          {
            term: "Emergency department / Service des urgences",
            definition: "Hospital care for life-threatening or very serious conditions.",
          },
          {
            term: "Prescription / Ordonnance",
            definition: "A provider's written authorization for medication.",
          },
          {
            term: "Specialist / Spécialiste",
            definition: "A doctor focused on one area of medicine.",
          },
          {
            term: "Interpretation services / Services d'interprétation",
            definition: "Support to communicate with your provider in your preferred language.",
          },
          {
            term: "Informed consent / Consentement éclairé",
            definition:
              "Agreeing to a treatment only after understanding what it involves, in your own language.",
          },
          {
            term: "Public health nurse / Infirmière en santé publique",
            definition: "A nurse focused on prevention, immunization, and community health.",
          },
          {
            term: "Coverage / Couverture",
            definition: "What your health card or insurance plan pays for.",
          },
        ],
      },
    ],
  },
  {
    id: "resources",
    number: "12",
    title: "Trusted resources and contacts",
    intro:
      "Details like phone numbers and hours can change. Please confirm before relying on anything below, and let us know if something needs updating.",
    blocks: [
      {
        type: "subheading",
        text: "Emergency & health advice",
      },
      {
        type: "contacts",
        items: [
          { name: "Emergency services", detail: "Life-threatening emergencies", phone: "911" },
          {
            name: "HealthLine 811",
            detail: "24/7 free health and mental health advice, 100+ languages",
            phone: "811",
            url: "saskhealthauthority.ca",
          },
          {
            name: "988 Suicide Crisis Helpline",
            detail: "24/7, free, call or text, bilingual",
            phone: "988",
          },
        ],
      },
      {
        type: "subheading",
        text: "Health card & coverage",
      },
      {
        type: "contacts",
        items: [
          {
            name: "eHealth Saskatchewan",
            detail: "Health card applications and renewals",
            phone: "1-800-667-7551",
            url: "ehealthsask.ca",
          },
          {
            name: "Special Support Program",
            detail: "Prescription drug cost assistance",
            phone: "1-800-667-7581",
          },
        ],
      },
      {
        type: "subheading",
        text: "French-language care",
      },
      {
        type: "contacts",
        items: [
          {
            name: "Health Accompagnateur Service",
            detail: "Hospital interpretation, Regina and Saskatoon",
            phone: "1-844-437-0373",
          },
          {
            name: "Assemblée communautaire fransaskoise (ACF)",
            detail: "Francophone settlement services",
          },
        ],
      },
      {
        type: "subheading",
        text: "Settlement & community support",
      },
      {
        type: "contacts",
        items: [
          {
            name: "Regina Open Door Society (RODS)",
            detail: "Settlement services, Regina",
            phone: "306-352-3500",
            url: "rods.sk.ca",
          },
          {
            name: "211 Saskatchewan",
            detail: "Free referral line for community and social supports",
            phone: "211",
            url: "sk.211.ca",
          },
          {
            name: "Health Beyond Hurdles / Santé sans obstacles",
            detail: "Questions about this guide or the Newcomer Health Navigation Project",
            url: "healthbeyondhurdles.org/contact",
          },
        ],
      },
    ],
  },
];
