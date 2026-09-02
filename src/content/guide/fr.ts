import type { GuideMeta, GuideSection } from "./types";

export const guideMeta: GuideMeta = {
  lastUpdated: "Août 2026",
  version: "Version préliminaire 1.0",
};

export const guideSections: GuideSection[] = [
  {
    id: "welcome",
    number: "00",
    title: "Comment utiliser ce guide",
    intro:
      "Une introduction en langage clair au système de santé de la Saskatchewan, destinée aux nouveaux arrivants installés dans la province depuis moins de cinq ans.",
    blocks: [
      {
        type: "p",
        text: "Ce guide s'adresse aux immigrants, réfugiés, étudiants internationaux, résidents temporaires et permanents, ainsi qu'aux familles nouvellement arrivées qui résident actuellement en Saskatchewan et souhaitent un point de départ clair pour comprendre le fonctionnement des soins de santé ici. Il est offert également en français et en anglais, car votre capacité à comprendre l'information sur votre santé ne devrait jamais dépendre de la langue officielle que vous parlez.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Ceci est de l'information générale, pas un avis médical",
        text: "Rien dans ce guide ne diagnostique une condition, ne recommande un traitement ni n'interprète des résultats de test. Pour toute question touchant spécifiquement votre santé, communiquez avec un professionnel de la santé autorisé, appelez HealthLine 811, ou rendez-vous à l'urgence. En cas d'urgence potentiellement mortelle, composez toujours le 911.",
      },
      {
        type: "callout",
        tone: "info",
        title: "À propos de cette version",
        text: "Cette édition a été préparée pour accompagner la demande de financement de Health Beyond Hurdles / Santé Sans Obstacles, comme exemple de travail de la première ressource que le Projet de navigation en santé pour nouveaux arrivants publierait. Avant une diffusion officielle, elle serait révisée par des professionnels de la santé et des travailleurs en établissement, vérifiée auprès de sources à jour, et datée à chaque mise à jour, exactement comme le décrivent nos engagements d'assurance qualité ci-dessous.",
      },
      {
        type: "p",
        text: "Utilisez la table des matières pour aller directement à ce dont vous avez besoin, ou lisez le guide du début à la fin. Chaque section se suffit à elle-même : il n'y a pas de mauvais endroit pour commencer.",
      },
    ],
  },
  {
    id: "system",
    number: "01",
    title: "Comment fonctionne le système de santé de la Saskatchewan",
    blocks: [
      {
        type: "p",
        text: "La Saskatchewan a un système de santé public. Si vous détenez une carte-santé valide de la Saskatchewan, les visites médicalement nécessaires chez un médecin ou une infirmière praticienne, ainsi que les soins hospitaliers médicalement nécessaires, sont couverts sans frais au point de service. Le système est financé par les impôts, et non par des frais payés à chaque visite.",
      },
      {
        type: "p",
        text: "Votre carte-santé est ce qui prouve que vous êtes couvert. On vous la demandera, ou son numéro, presque partout où vous recevrez des soins : chez un médecin, dans une clinique sans rendez-vous, à l'hôpital ou dans un laboratoire.",
      },
      {
        type: "subheading",
        text: "Ce qui est généralement inclus",
      },
      {
        type: "list",
        items: [
          "Les visites chez un médecin de famille ou une infirmière praticienne",
          "Les visites chez un médecin spécialiste (habituellement avec une référence)",
          "Les séjours hospitaliers et les soins d'urgence",
          "La plupart des chirurgies médicalement nécessaires",
          "De nombreux tests de laboratoire et examens d'imagerie diagnostique prescrits par votre fournisseur de soins",
        ],
      },
      {
        type: "subheading",
        text: "Ce qui n'est généralement pas inclus automatiquement",
      },
      {
        type: "p",
        text: "Les médicaments pris à la maison, les soins dentaires courants, les soins de la vue et le transport en ambulance ne sont généralement pas couverts automatiquement comme le sont les visites chez le médecin et les soins hospitaliers, et peuvent entraîner des frais. Des programmes de couverture et d'aide existent pour plusieurs de ces situations (voir la section Références, tests et ordonnances), mais les détails dépendent de votre situation : renseignez-vous auprès de votre pharmacien, de votre fournisseur de soins ou de HealthLine 811, ou informez-vous sur une couverture complémentaire par un employeur, une école ou un régime privé.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Gardez tout à jour",
        text: "Mettez à jour votre adresse auprès d'eHealth Saskatchewan à chaque déménagement, et gardez votre carte-santé (ou une photo de celle-ci) avec vous chaque fois que vous pourriez avoir besoin de soins.",
      },
    ],
  },
  {
    id: "health-card",
    number: "02",
    title: "Obtenir votre carte-santé de la Saskatchewan",
    blocks: [
      {
        type: "p",
        text: "La carte-santé de la Saskatchewan est administrée par eHealth Saskatchewan. La demande est gratuite, et il vaut mieux la faire le plus tôt possible après votre arrivée.",
      },
      {
        type: "subheading",
        text: "Comment faire la demande",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Obtenez le formulaire de demande en ligne sur ehealthsask.ca, ou demandez une copie papier à un bureau gouvernemental ou à un organisme d'établissement local.",
          "Rassemblez des photocopies de documents prouvant : votre droit légal de vous trouver au Canada (comme vos documents d'immigration, d'études ou de travail), votre résidence en Saskatchewan, et votre identité.",
          "Soumettez le formulaire rempli avec vos documents par la poste, par courriel ou par télécopieur, selon les indications du formulaire.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Le traitement prend du temps",
        text: "Les demandes prennent souvent plusieurs semaines à traiter, et les règles sur le moment exact où la couverture commence peuvent dépendre de votre statut d'immigration et de votre situation. Faites votre demande dès que possible, et confirmez les délais actuels directement auprès d'eHealth Saskatchewan plutôt que de vous fier à ce que vous lisez ailleurs, y compris dans ce guide.",
      },
      {
        type: "p",
        text: "En attendant votre carte, informez-vous sur une assurance santé privée temporaire pour combler l'écart. Si vous êtes demandeur d'asile ou réfugié, vous pourriez être admissible à une couverture par le Programme fédéral de santé intérimaire (PFSI), qui peut inclure les soins hospitaliers, les visites chez un fournisseur de soins et certains frais de médicaments, de soins de la vue et de soins dentaires, jusqu'à ce que votre couverture provinciale commence.",
      },
      {
        type: "contacts",
        items: [
          {
            name: "eHealth Saskatchewan : Services de la carte-santé",
            detail: "Demandes, renouvellements et mises à jour d'adresse",
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
    title: "Qui fait quoi dans votre équipe de soins",
    intro:
      "Le système de santé de la Saskatchewan fait appel à plusieurs types de fournisseurs de soins. Connaître leurs différences vous aide à vous adresser au bon endroit dès la première fois.",
    blocks: [
      {
        type: "subheading",
        text: "Médecin de famille ou infirmière praticienne",
      },
      {
        type: "p",
        text: "Votre principal point de contact pour les soins continus : examens de routine, préoccupations générales, ordonnances et références vers des spécialistes au besoin. Les infirmières praticiennes peuvent évaluer, diagnostiquer, traiter et prescrire, un peu comme un médecin de famille. Un rendez-vous est habituellement nécessaire. Si vous n'en avez pas encore, l'Autorité sanitaire de la Saskatchewan tient une liste des fournisseurs de soins qui acceptent de nouveaux patients par région, et vous pouvez vous inscrire sur une liste d'attente tout en utilisant une clinique sans rendez-vous ou de soins urgents entretemps.",
      },
      {
        type: "subheading",
        text: "Pharmacien",
      },
      {
        type: "p",
        text: "Disponible dans n'importe quelle pharmacie, sans rendez-vous. Les pharmaciens peuvent répondre à des questions sur les médicaments et leurs interactions, administrer plusieurs vaccins et, dans certains cas, évaluer et prescrire pour des problèmes mineurs. C'est souvent le professionnel de la santé le plus rapide à joindre.",
      },
      {
        type: "subheading",
        text: "Infirmière en santé publique",
      },
      {
        type: "p",
        text: "Axée sur la prévention et la santé communautaire : vaccination des enfants, santé prénatale et infantile, programmes de santé publique. Habituellement jointe par un bureau de santé communautaire plutôt qu'à l'hôpital.",
      },
      {
        type: "subheading",
        text: "Spécialiste",
      },
      {
        type: "p",
        text: "Un médecin concentré sur un domaine précis de la médecine (comme la cardiologie ou la dermatologie). En Saskatchewan, consulter un spécialiste nécessite habituellement une référence de votre médecin de famille ou de votre infirmière praticienne.",
      },
      {
        type: "subheading",
        text: "Clinique sans rendez-vous",
      },
      {
        type: "p",
        text: "Aucun rendez-vous nécessaire, mais attendez-vous à patienter. Utile pour des problèmes non urgents lorsque vous n'avez pas de fournisseur de soins régulier ou que vous ne pouvez pas le voir assez rapidement : un rhume, une infection mineure, le renouvellement d'une ordonnance.",
      },
      {
        type: "subheading",
        text: "Centre de soins urgents",
      },
      {
        type: "p",
        text: "Pour des problèmes sérieux, mais pas potentiellement mortels, comme une blessure qui nécessite des soins le jour même, sans nécessiter une salle d'urgence complète. Toutes les communautés n'en ont pas; là où il en existe un, c'est souvent plus rapide qu'une urgence pour ce type de situation.",
      },
      {
        type: "subheading",
        text: "Service des urgences",
      },
      {
        type: "p",
        text: "Pour les conditions potentiellement mortelles ou très graves : douleur à la poitrine, difficulté à respirer, saignement important, signes d'AVC, blessures majeures. Vous serez vu selon l'urgence médicale, et non selon l'ordre d'arrivée : une salle d'attente occupée ne signifie pas que le système fonctionne mal, mais que d'autres personnes sont traitées en premier parce que leurs besoins sont plus urgents.",
      },
    ],
  },
  {
    id: "when-to-call",
    number: "04",
    title: "HealthLine 811, le 911 ou le 988?",
    intro:
      "La Saskatchewan a trois numéros clés pour la santé et la sécurité. Savoir lequel utiliser fait gagner un temps précieux au moment où ça compte.",
    blocks: [
      {
        type: "table",
        headers: ["Numéro", "Quand l'utiliser", "Ce qui se passe"],
        rows: [
          [
            "911",
            "Urgence potentiellement mortelle : douleur à la poitrine, difficulté à respirer, saignement important, signes d'AVC, personne à risque de se blesser ou de blesser autrui",
            "Vous connecte immédiatement aux pompiers, à la police ou à une ambulance, 24 h/24, 7 j/7",
          ],
          [
            "811",
            "Vous n'êtes pas certain de la gravité d'une situation, avez besoin de conseils de santé, ou avez une question sur des symptômes, un médicament ou où aller pour des soins",
            "Conseils gratuits et confidentiels d'une infirmière autorisée, d'une infirmière psychiatrique ou d'une travailleuse sociale, 24 h/24. Interprétation disponible en plus de 100 langues",
          ],
          [
            "988",
            "Vous pensez au suicide, vivez une crise, ou vous inquiétez pour quelqu'un qui pourrait en vivre une",
            "Appel ou texto gratuit, 24 h/24, soutien de crise bilingue (français et anglais)",
          ],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "En cas de doute, appelez d'abord le 811",
        text: "Si vous ne savez pas si une situation constitue une urgence, HealthLine 811 peut vous aider à décider s'il faut consulter un médecin, vous rendre dans une clinique sans rendez-vous, aller à l'urgence, ou gérer la situation à la maison.",
      },
      {
        type: "contacts",
        items: [
          {
            name: "HealthLine 811 : difficultés techniques pour joindre le 811",
            detail: "Ligne de remplacement si vous ne pouvez pas composer le 811",
            phone: "1-877-800-0002",
          },
          {
            name: "HealthLine 811 : personnes sourdes ou malentendantes",
            detail: "Service de relais de l'opérateur SaskTel",
            phone: "1-800-855-0511",
          },
        ],
      },
    ],
  },
  {
    id: "appointments",
    number: "05",
    title: "Prendre et préparer un rendez-vous",
    blocks: [
      {
        type: "p",
        text: "La plupart des cliniques prennent des rendez-vous par téléphone, et certaines offrent aussi la prise de rendez-vous en ligne. Les cliniques sans rendez-vous n'en prennent pas : vous êtes vu selon l'ordre d'arrivée, en fonction des disponibilités de la journée.",
      },
      {
        type: "subheading",
        text: "Quoi apporter",
      },
      {
        type: "list",
        items: [
          "Votre carte-santé de la Saskatchewan (ou le numéro, si la carte physique n'est pas encore arrivée)",
          "Une pièce d'identité avec photo",
          "Une liste des médicaments que vous prenez actuellement",
          "Une liste écrite de vos questions ou préoccupations, faciles à oublier une fois sur place",
          "Une personne de soutien, si vous le souhaitez",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Demandez l'interprétation au moment de la prise de rendez-vous",
        text: "Vous avez le droit de demander des soins dans la langue avec laquelle vous êtes le plus à l'aise. Au moment de prendre rendez-vous, mentionnez que vous aimeriez un soutien à l'interprétation : l'interprétation téléphonique est offerte dans les établissements de l'Autorité sanitaire de la Saskatchewan, et les nouveaux arrivants francophones peuvent aussi joindre le Service d'accompagnateur en santé (voir la section Recevoir des soins en français).",
      },
      {
        type: "subheading",
        text: "Questions à poser pendant votre visite",
      },
      {
        type: "list",
        items: [
          "De quoi s'agit-il exactement, en termes simples?",
          "Quelles sont les prochaines étapes, et qui assurera le suivi avec moi?",
          "Ai-je besoin d'une référence, d'un test ou d'une ordonnance?",
          "Quand et comment vais-je recevoir mes résultats?",
          "Que dois-je faire si la situation ne s'améliore pas, ou s'aggrave?",
        ],
      },
    ],
  },
  {
    id: "referrals",
    number: "06",
    title: "Références, tests et ordonnances",
    blocks: [
      {
        type: "subheading",
        text: "Références",
      },
      {
        type: "p",
        text: "Une référence, c'est quand votre médecin de famille ou votre infirmière praticienne vous dirige vers un spécialiste. La plupart des spécialistes en Saskatchewan en exigent une. Le délai avant d'être vu dépend de l'urgence de votre situation et de la disponibilité du spécialiste : cela peut prendre de quelques jours à plusieurs mois. Si vos symptômes changent ou s'aggravent pendant l'attente, communiquez avec votre fournisseur de soins ou HealthLine 811.",
      },
      {
        type: "subheading",
        text: "Tests de laboratoire et imagerie",
      },
      {
        type: "p",
        text: "Les prises de sang, radiographies, échographies et tests semblables sont prescrits par votre fournisseur de soins et effectués habituellement dans un laboratoire ou un hôpital. Les résultats sont généralement renvoyés au fournisseur qui les a demandés : demandez quand et comment vous recevrez vos résultats, car ce n'est pas toujours automatique.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Consultez vos résultats plus tôt avec MySaskHealthRecord",
        text: "eHealth Saskatchewan offre un service en ligne gratuit appelé MySaskHealthRecord, qui vous permet de consulter vous-même vos résultats de laboratoire, vos rapports d'imagerie médicale, votre historique de vaccination et vos visites cliniques, souvent avant qu'on ne vous appelle à ce sujet. L'inscription exige une carte-santé de la Saskatchewan et une pièce d'identité avec photo valide. Consultez ehealthsask.ca pour les conditions d'admissibilité actuelles et la marche à suivre.",
      },
      {
        type: "contacts",
        items: [
          {
            name: "MySaskHealthRecord",
            detail: "Consultez en ligne vos résultats de laboratoire, rapports d'imagerie et vaccins",
            url: "ehealthsask.ca/residents/mysaskhealthrecord",
          },
        ],
      },
      {
        type: "subheading",
        text: "Ordonnances",
      },
      {
        type: "p",
        text: "Les ordonnances sont remplies en pharmacie. Demandez à votre pharmacien s'il existe des versions génériques, souvent moins coûteuses que les médicaments de marque. Si le coût est une préoccupation, le Programme de soutien spécial (Special Support Program) de la Saskatchewan offre une aide, calculée selon le revenu, pour les coûts des médicaments admissibles : demandez à un pharmacien comment faire la demande, ou communiquez directement avec la Direction du régime de médicaments.",
      },
      {
        type: "contacts",
        items: [
          {
            name: "Programme de soutien spécial (aide au coût des médicaments)",
            detail: "Aide calculée selon le revenu pour les médicaments admissibles",
            phone: "1-800-667-7581",
          },
        ],
      },
    ],
  },
  {
    id: "other-services",
    number: "07",
    title: "Santé mentale, pharmacie et autres services",
    blocks: [
      {
        type: "subheading",
        text: "Soutien en santé mentale et en dépendances",
      },
      {
        type: "p",
        text: "HealthLine 811 offre des conseils en santé mentale et en dépendances et peut vous diriger vers des services locaux. En cas de crise ou de pensées suicidaires, composez ou textez le 988, gratuit et disponible 24 h/24 en français et en anglais. Les cliniques communautaires de santé mentale offrent aussi un soutien continu : demandez à votre fournisseur de soins ou au 811 de vous en trouver une près de chez vous.",
      },
      {
        type: "subheading",
        text: "Services en pharmacie",
      },
      {
        type: "p",
        text: "En plus de remplir les ordonnances, les pharmacies offrent souvent la vaccination, la révision de médicaments et l'évaluation de problèmes mineurs. C'est souvent l'endroit le plus rapide pour obtenir une réponse à une question de santé sans rendez-vous.",
      },
      {
        type: "subheading",
        text: "Soins dentaires",
      },
      {
        type: "p",
        text: "Les soins dentaires courants ne sont généralement pas couverts par la carte-santé. Demandez à un travailleur en établissement ou au 211 Saskatchewan de vous renseigner sur les cliniques dentaires à faible coût ou communautaires, et sur les programmes auxquels votre famille pourrait être admissible.",
      },
      {
        type: "subheading",
        text: "Santé reproductive, maternelle et infantile",
      },
      {
        type: "p",
        text: "Les médecins de famille, les infirmières praticiennes et les infirmières en santé publique offrent des soins prénataux, la planification familiale et des services de santé infantile, y compris la vaccination de routine. Les bureaux de santé publique gèrent directement plusieurs de ces programmes.",
      },
      {
        type: "subheading",
        text: "Vaccination",
      },
      {
        type: "p",
        text: "Les vaccins de routine et de voyage sont offerts dans les bureaux de santé publique et de nombreuses pharmacies. Renseignez-vous sur les vaccins recommandés pour votre famille.",
      },
    ],
  },
  {
    id: "rights",
    number: "08",
    title: "Vos droits en tant que patient",
    blocks: [
      {
        type: "list",
        items: [
          "Des soins respectueux, exempts de discrimination fondée sur la langue, la culture, le revenu ou le statut d'immigration.",
          "Le consentement éclairé : une explication claire d'un traitement, dans votre langue, avant d'y consentir, ainsi que le droit de refuser ou de demander plus de temps ou d'information.",
          "L'interprétation et le soutien linguistique lorsque vous en avez besoin.",
          "La confidentialité et la protection de vos renseignements de santé.",
          "Le droit de poser des questions, de demander un deuxième avis et d'accéder à votre propre dossier de santé.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Vous n'êtes jamais obligé de consentir sur-le-champ",
        text: "Il est toujours acceptable de demander à un fournisseur de soins de réexpliquer quelque chose, plus simplement ou dans la langue de votre choix, ou de prendre le temps de réfléchir avant de décider d'un traitement.",
      },
    ],
  },
  {
    id: "french",
    number: "09",
    title: "Recevoir des soins en français",
    intro:
      "Les nouveaux arrivants francophones en Saskatchewan ont accès à des soutiens particuliers, en plus des services d'interprétation généraux décrits plus haut.",
    blocks: [
      {
        type: "p",
        text: "L'Autorité sanitaire de la Saskatchewan vise à offrir des soins dans la langue préférée des patients lorsque c'est possible, y compris l'interprétation téléphonique dans ses établissements. Mentionnez votre préférence linguistique lors de votre inscription à un rendez-vous.",
      },
      {
        type: "p",
        text: "Le Réseau Santé en français de la Saskatchewan (RSFS) tient un répertoire des professionnels de la santé de la province qui parlent français. Vous pouvez y chercher un fournisseur de soins à qui parler directement, sans interprète entre vous deux.",
      },
      {
        type: "p",
        text: "Le RSFS coordonne aussi un service d'accompagnement en santé : une personne qui vous accompagne à un rendez-vous à l'hôpital et vous aide à communiquer avec un fournisseur de soins anglophone.",
      },
      {
        type: "p",
        text: "Pour le soutien à l'établissement en français, le SAIF-SK (Services d'accueil et d'inclusion francophone) accueille et accompagne les nouveaux arrivants francophones partout en Saskatchewan, de l'arrivée jusqu'aux étapes concrètes de l'installation.",
      },
      {
        type: "contacts",
        items: [
          {
            name: "Réseau Santé en français de la Saskatchewan (RSFS)",
            detail: "Répertoire des professionnels de la santé francophones en Saskatchewan",
            url: "rsfs.ca/Ma-sante/Repertoire-des-professionnels",
          },
          {
            name: "Service d'accompagnement en santé",
            detail: "Une personne qui vous accompagne et interprète lors des rendez-vous à l'hôpital, Regina et Saskatoon",
            phone: "1-844-437-0373",
          },
          {
            name: "SAIF-SK, Services d'accueil et d'inclusion francophone",
            detail: "Services d'accueil et d'établissement en français, partout en Saskatchewan",
            url: "saif-sk.ca",
          },
        ],
      },
    ],
  },
  {
    id: "beyond",
    number: "10",
    title: "Au-delà de la santé : établissement, transport, logement et alimentation",
    intro:
      "La santé ne se vit pas en vase clos. Ces organismes offrent le soutien quotidien qui permet, concrètement, de se rendre à ses rendez-vous et de prendre soin de soi.",
    blocks: [
      {
        type: "p",
        text: "La Regina Open Door Society (RODS) est un organisme d'établissement qui offre de l'orientation aux nouveaux arrivants, du soutien aux réfugiés récemment arrivés, un accompagnement en milieu scolaire pour les familles, et une aide générale pour prendre pied, y compris des liens vers des ressources de transport, de logement et d'alimentation.",
      },
      {
        type: "p",
        text: "Le 211 Saskatchewan est un service gratuit et confidentiel qui vous met en contact avec des ressources sociales, communautaires et de santé non clinique partout dans la province, y compris de l'aide au transport, des programmes alimentaires et du soutien au logement, en plusieurs langues.",
      },
      {
        type: "p",
        text: "Si c'est le déplacement qui pose problème, l'Autorité sanitaire de la Saskatchewan met aussi en circulation des autobus de mieux-être communautaire à Regina, Saskatoon et Prince Albert : des cliniques mobiles avec une infirmière praticienne, une infirmière auxiliaire autorisée et un intervenant en santé mentale, pour les personnes qui ont de la difficulté à se rendre dans une clinique ordinaire. Consultez le site de l'Autorité sanitaire pour l'horaire et les arrêts en vigueur.",
      },
      {
        type: "contacts",
        items: [
          {
            name: "Regina Open Door Society (RODS)",
            detail: "2314, 11e Avenue, Regina, SK",
            phone: "306-352-3500",
            url: "rods.sk.ca",
          },
          {
            name: "SAIF-SK, Services d'accueil et d'inclusion francophone",
            detail: "Services d'accueil et d'inclusion en français, partout en Saskatchewan",
            url: "saif-sk.ca",
          },
          {
            name: "Autobus de mieux-être communautaire (Autorité sanitaire de la Saskatchewan)",
            detail: "Soins de première ligne et soutien en santé mentale mobiles à Regina, Saskatoon et Prince Albert",
            url: "saskhealthauthority.ca/your-health/conditions-diseases-services/health-bus",
          },
          {
            name: "211 Saskatchewan",
            detail: "Service de référence gratuit pour le soutien communautaire et social",
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
    title: "Glossaire des termes courants",
    intro: "Les principaux termes de santé, en français et en anglais, expliqués simplement.",
    blocks: [
      {
        type: "glossary",
        items: [
          {
            term: "Carte-santé / Health card",
            definition:
              "La carte qui prouve que vous êtes couvert par le système public de santé de la Saskatchewan.",
          },
          {
            term: "Référence / Referral",
            definition: "Quand votre fournisseur de soins habituel vous dirige vers un spécialiste.",
          },
          {
            term: "Médecin de famille / Family doctor",
            definition: "Votre principal fournisseur de soins de santé continus.",
          },
          {
            term: "Infirmière praticienne / Nurse practitioner",
            definition:
              "Une infirmière ayant une formation avancée, pouvant évaluer, diagnostiquer, traiter et prescrire.",
          },
          {
            term: "Clinique sans rendez-vous / Walk-in clinic",
            definition: "Une clinique pour des soins non urgents, sans rendez-vous nécessaire.",
          },
          {
            term: "Service des urgences / Emergency department",
            definition: "Soins hospitaliers pour des conditions potentiellement mortelles ou très graves.",
          },
          {
            term: "Ordonnance / Prescription",
            definition: "L'autorisation écrite d'un fournisseur de soins pour un médicament.",
          },
          {
            term: "Spécialiste / Specialist",
            definition: "Un médecin concentré sur un domaine précis de la médecine.",
          },
          {
            term: "Services d'interprétation / Interpretation services",
            definition: "Un soutien pour communiquer avec votre fournisseur de soins dans la langue de votre choix.",
          },
          {
            term: "Consentement éclairé / Informed consent",
            definition:
              "Accepter un traitement seulement après en avoir compris la portée, dans votre propre langue.",
          },
          {
            term: "Infirmière en santé publique / Public health nurse",
            definition: "Une infirmière axée sur la prévention, la vaccination et la santé communautaire.",
          },
          {
            term: "Couverture / Coverage",
            definition: "Ce que votre carte-santé ou votre régime d'assurance prend en charge.",
          },
        ],
      },
    ],
  },
  {
    id: "resources",
    number: "12",
    title: "Ressources et contacts de confiance",
    intro:
      "Les détails comme les numéros de téléphone et les heures d'ouverture peuvent changer : veuillez confirmer avant de vous fier à ce qui suit, et faites-nous savoir si quelque chose doit être mis à jour.",
    blocks: [
      {
        type: "subheading",
        text: "Urgence et conseils de santé",
      },
      {
        type: "contacts",
        items: [
          { name: "Services d'urgence", detail: "Urgences potentiellement mortelles", phone: "911" },
          {
            name: "HealthLine 811",
            detail: "Conseils de santé gratuits 24 h/24, plus de 100 langues",
            phone: "811",
            url: "saskhealthauthority.ca",
          },
          {
            name: "988 : Ligne de crise du suicide",
            detail: "24 h/24, gratuit, par appel ou texto, bilingue",
            phone: "988",
          },
          {
            name: "Autobus de mieux-être communautaire",
            detail: "Clinique mobile à Regina, Saskatoon et Prince Albert pour les personnes ayant de la difficulté à accéder aux soins habituels",
            url: "saskhealthauthority.ca/your-health/conditions-diseases-services/health-bus",
          },
        ],
      },
      {
        type: "subheading",
        text: "Carte-santé et couverture",
      },
      {
        type: "contacts",
        items: [
          {
            name: "eHealth Saskatchewan",
            detail: "Demandes et renouvellements de carte-santé",
            phone: "1-800-667-7551",
            url: "ehealthsask.ca",
          },
          {
            name: "Programme de soutien spécial",
            detail: "Aide au coût des médicaments d'ordonnance",
            phone: "1-800-667-7581",
          },
        ],
      },
      {
        type: "subheading",
        text: "Soins en français",
      },
      {
        type: "contacts",
        items: [
          {
            name: "Réseau Santé en français de la Saskatchewan (RSFS)",
            detail: "Répertoire des professionnels de la santé francophones",
            url: "rsfs.ca/Ma-sante/Repertoire-des-professionnels",
          },
          {
            name: "Service d'accompagnement en santé",
            detail: "Interprétation et accompagnement aux rendez-vous à l'hôpital, Regina et Saskatoon",
            phone: "1-844-437-0373",
          },
          {
            name: "SAIF-SK, Services d'accueil et d'inclusion francophone",
            detail: "Services d'établissement en français dans toute la province",
            url: "saif-sk.ca",
          },
        ],
      },
      {
        type: "subheading",
        text: "Se faire accompagner",
      },
      {
        type: "p",
        text: "Vous n'êtes pas obligé d'affronter seul un rendez-vous difficile. Ces services peuvent organiser une personne pour interpréter ou vous accompagner.",
      },
      {
        type: "contacts",
        items: [
          {
            name: "Services d'interprétation de l'Autorité sanitaire de la Saskatchewan",
            detail: "Interprétation téléphonique dans les hôpitaux, en plus de 100 langues. Demandez-la à votre inscription",
            url: "saskhealthauthority.ca/your-health/conditions-diseases-services/interpretation-and-translation-services",
          },
          {
            name: "Accompagnement en santé en français (RSFS)",
            detail: "Un accompagnateur présent avec vous à votre rendez-vous à l'hôpital",
            phone: "1-844-437-0373",
          },
          {
            name: "Accompagnement par un travailleur en établissement",
            detail: "Demandez à votre organisme d'établissement, comme RODS ou le SAIF-SK, si un travailleur peut vous accompagner",
          },
        ],
      },
      {
        type: "subheading",
        text: "Établissement et soutien communautaire",
      },
      {
        type: "contacts",
        items: [
          {
            name: "Regina Open Door Society (RODS)",
            detail: "Services d'établissement, Regina",
            phone: "306-352-3500",
            url: "rods.sk.ca",
          },
          {
            name: "211 Saskatchewan",
            detail: "Ligne de référence gratuite pour le soutien communautaire et social",
            phone: "211",
            url: "sk.211.ca",
          },
          {
            name: "Health Beyond Hurdles / Santé Sans Obstacles",
            detail: "Questions sur ce guide ou sur le Projet de navigation en santé pour nouveaux arrivants",
            url: "healthbeyondhurdles.org/contact",
          },
        ],
      },
    ],
  },
];
