# Avant le lancement

Tout ce qui reste à faire avant que le site soit vraiment en ligne, en deux parties :
la **partie 1** est ce que Noura doit configurer elle-même (comptes, achats, décisions,
validations externes), la **partie 2** est ce qui reste à coder.

Coche les cases au fur et à mesure. Les éléments marqués **BLOQUANT** doivent être
réglés avant d'annoncer le site publiquement.

> Les limites des offres gratuites mentionnées ici changent souvent. Vérifie toujours
> la page de tarification du fournisseur avant de t'engager.

---

## État actuel

Ce qui est déjà fait et fonctionne :

- Site complet en français et en anglais, avec URL traduites (`/fr/a-propos`, `/en/about`).
- Mode clair et mode sombre, responsive de 320 px à grand écran.
- Le guide complet en ligne (`/guide`) avec table des matières navigable.
- Le guide en PDF téléchargeable, dans les deux langues, avec la couverture bilingue.
- Logo, favicon, et image de partage (aperçu quand quelqu'un partage le lien) qui suit la langue de la page.
- Pages légales : politique de confidentialité et conditions d'utilisation, dans les deux langues.
- Sitemap, robots.txt, métadonnées par page.
- Les formulaires de contact et d'infolettre s'affichent et valident les données,
  mais **n'envoient encore rien nulle part**. C'est le premier point à régler.

---

# Partie 1 : ce que Noura configure

## 1. Nom de domaine

- [ ] **BLOQUANT** Confirmer le domaine final. Le courriel est `info@healthbeyondhurdles.com`,
      donc le site devrait être `healthbeyondhurdles.com`. Pour l'instant j'ai mis le `.com`
      dans le code, à confirmer.
- [ ] Acheter ou renouveler le domaine et activer le renouvellement automatique
      (un domaine expiré = site hors ligne du jour au lendemain).
- [ ] Décider si on achète aussi le `.org` et le `.ca` pour les rediriger vers le `.com`
      (protège le nom, évite qu'un autre le prenne).
- [ ] Me donner le domaine final confirmé, je l'inscris dans le code.

## 2. Boîte courriel info@healthbeyondhurdles.com

- [ ] **BLOQUANT** Créer la vraie boîte de réception. Options courantes :
      Google Workspace (programme pour organismes sans but lucratif, admissibilité à vérifier
      via TechSoup Canada), Microsoft 365 pour OBNL, ou Zoho Mail qui a une offre gratuite
      pour un domaine.
- [ ] **BLOQUANT** Envoyer un courriel test depuis une adresse externe et confirmer la réception.
- [ ] Décider qui lit cette boîte et à quelle fréquence. Le site promet une réponse,
      il faut quelqu'un derrière.
- [ ] Configurer SPF, DKIM et DMARC dans le DNS du domaine. Sans ça, les courriels
      envoyés par le site tombent dans les indésirables. Le fournisseur donne les
      enregistrements à copier.
- [ ] Décider si on veut d'autres adresses (`benevoles@`, `partenaires@`) ou juste
      des alias qui pointent tous vers `info@`.

## 3. Envoi des courriels du formulaire de contact

- [ ] **BLOQUANT** Créer un compte chez un service d'envoi transactionnel.
      Recommandation : **Resend**, simple et avec une offre gratuite suffisante pour
      le volume attendu. Alternatives : Postmark, SendGrid, Brevo.
- [ ] Vérifier le domaine dans le service (il demande d'ajouter des enregistrements DNS).
- [ ] Me transmettre la clé API **de façon privée**, jamais dans un message public,
      jamais dans GitHub. Je la mettrai dans les variables d'environnement de Vercel.

## 4. Infolettre (bouton « S'abonner »)

- [ ] **BLOQUANT** Choisir l'outil : Mailchimp, Brevo, MailerLite ou Buttondown.
      Tous ont une offre gratuite pour une petite liste. Critère important : qu'il
      gère le double opt-in et le désabonnement automatiquement.
- [ ] Créer la liste et activer le **double opt-in** (la personne confirme par courriel).
- [ ] Rédiger le courriel de bienvenue, en français **et** en anglais.
- [ ] Vérifier que le lien de désabonnement fonctionne vraiment.
- [ ] Me transmettre la clé API et l'identifiant de la liste, en privé.

## 5. Conformité à la loi canadienne anti-pourriel (LCAP / CASL)

C'est une vraie obligation légale au Canada, avec des amendes. À régler avant le premier envoi.

- [ ] **BLOQUANT** Décider quelle **adresse postale** de l'organisme sera affichée.
      La loi exige le nom et l'adresse de l'expéditeur dans chaque envoi commercial ou promotionnel.
      Si tu n'as pas de bureau, une boîte postale au nom de l'organisme fonctionne.
- [ ] Confirmer que le consentement est explicite : case à cocher, jamais pré-cochée.
      Je code la case, mais le texte de consentement doit être celui que tu approuves.
- [ ] Prévoir de traiter les désabonnements en moins de 10 jours ouvrables (l'outil le fait
      automatiquement si tu utilises un des services ci-dessus).

## 6. Dons

C'est le morceau le plus long, parce qu'il dépend du statut juridique.

- [ ] **Décision de fond** : à quel stade est l'organisme ?
      - Incorporation comme OBNL en Saskatchewan (Corporations Branch, ISC). C'est l'étape 1.
      - Enregistrement comme organisme de bienfaisance auprès de l'ARC. C'est ce qui permet
        d'émettre des **reçus officiels pour impôt**. C'est long, souvent de 6 à 18 mois,
        et ce n'est pas automatique.
- [ ] **Important** : tant que l'organisme n'est pas enregistré comme organisme de
      bienfaisance auprès de l'ARC, il ne peut **pas** émettre de reçus d'impôt. Il faut
      le dire clairement sur la page de dons. C'est une question de crédibilité autant
      que de légalité.
- [ ] Ouvrir un compte bancaire au nom de l'organisme (la plupart des plateformes
      l'exigent avant de verser l'argent).
- [ ] Choisir la plateforme :
      - **Zeffy** : canadien, 0 % de frais pour l'organisme (financé par un pourboire
        optionnel du donateur). Souvent le meilleur choix pour un petit OBNL qui démarre.
      - **Stripe** : tarifs réduits pour OBNL, très flexible, mais il faut coder l'intégration.
      - **CanadaHelps** : gère les reçus automatiquement, mais demande le statut
        d'organisme de bienfaisance enregistré.
      - **Donorbox** ou **PayPal Giving Fund** : autres options connues.
- [ ] Décider le contenu de la page : montants suggérés, don unique ou mensuel,
      don en l'honneur de quelqu'un, dons d'entreprise.
- [ ] Écrire la politique de remboursement et décider qui envoie les reçus ou confirmations.
- [ ] Me donner l'accès ou le lien de la plateforme choisie pour que je l'intègre.

## 7. Hébergement et mise en ligne

- [ ] Créer ou confirmer le compte Vercel et le lier au dépôt GitHub.
- [ ] Choisir la branche de production (aujourd'hui c'est `main`, donc chaque PR fusionnée
      part en ligne).
- [ ] Brancher le domaine sur Vercel (Vercel donne les enregistrements DNS à ajouter
      chez le registraire).
- [ ] Vérifier les conditions du plan gratuit de Vercel. L'offre Hobby est réservée à
      un usage non commercial ; un site qui collecte des dons peut demander un plan payant.
      À valider directement auprès d'eux plutôt que de supposer.

## 8. Révision juridique

- [ ] **BLOQUANT** Faire relire la politique de confidentialité et les conditions
      d'utilisation par un avocat ou une clinique juridique. J'ai écrit des textes
      honnêtes, clairs et complets, mais je ne suis pas juriste et ce ne sont pas
      des documents validés. En Saskatchewan : PLEA Saskatchewan, Pro Bono Law
      Saskatchewan, ou une clinique juridique communautaire.
- [ ] Confirmer le nom légal exact une fois l'incorporation faite, pour l'inscrire
      dans les deux pages légales et dans le pied de page.
- [ ] Confirmer l'adresse à publier dans la politique de confidentialité.
- [ ] Une fois l'organisme incorporé, me le dire : plusieurs textes du site disent
      « organisme proposé » et devront être mis à jour.

## 9. Révision du contenu du guide

- [ ] **BLOQUANT** Faire relire le guide par au moins un professionnel de la santé.
      Le guide se présente lui-même comme une version préliminaire en attente de
      cette révision, ce qui est honnête, mais ça ne peut pas rester ainsi longtemps.
- [ ] Faire relire par un intervenant en établissement (Regina Open Door Society,
      SAIF-SK, ou un autre organisme d'accueil).
- [ ] Faire relire le français par une personne de la communauté fransaskoise,
      pour le ton et le vocabulaire local.
- [ ] Revérifier tous les numéros de téléphone et tous les liens juste avant le lancement.
      Les programmes provinciaux changent.
- [ ] Décider à quelle fréquence le guide sera revu (par exemple tous les 6 mois)
      et qui en est responsable.

## 10. Réseaux sociaux

- [ ] Créer les comptes au nom de l'organisme (Facebook, Instagram, LinkedIn).
- [ ] Me donner les liens, je les ajoute au pied de page avec les icônes.

## 11. Éléments réels qui manquent encore

Le site ne contient volontairement aucune donnée inventée. Ces éléments sont donc absents
tant qu'ils ne sont pas réels :

- [ ] Noms des partenaires confirmés (aujourd'hui on présente des **catégories** de partenaires,
      pas des noms).
- [ ] Numéro de téléphone, si on veut en afficher un.
- [ ] Adresse ou point de service à Regina.
- [ ] Photos de l'équipe ou du projet, si on en veut.
- [ ] Statistiques réelles, une fois le projet pilote lancé (nombre de personnes accompagnées,
      langues demandées, etc.).

## 12. Statistiques de visite

- [ ] Décider si on veut savoir combien de personnes visitent le site.
      Si oui, choisir un outil respectueux de la vie privée (Plausible, Fathom, ou
      Vercel Analytics) plutôt que Google Analytics. Si on en installe un, la politique
      de confidentialité devra être modifiée en conséquence, elle dit actuellement
      qu'il n'y a aucun outil d'analyse tiers.

---

# Partie 2 : ce que je code

## Priorité 1, bloquant pour le lancement

- [ ] **Brancher le formulaire de contact.** Envoi réel vers `info@healthbeyondhurdles.com`
      via Resend, avec un accusé de réception automatique à la personne, rédigé dans
      sa langue. Gestion des erreurs si l'envoi échoue.
- [ ] **Brancher le bouton « S'abonner ».** Connexion à l'outil d'infolettre choisi,
      avec double opt-in. Gérer les cas : adresse déjà inscrite, adresse invalide,
      service indisponible. Message de confirmation clair dans les deux langues.
- [ ] **Anti-spam sur les deux formulaires.** Champ piège invisible (honeypot),
      limite du nombre d'envois par adresse IP, et si le spam persiste,
      Cloudflare Turnstile (moins intrusif qu'un CAPTCHA).
- [ ] **Consentement LCAP.** Case à cocher explicite sur l'infolettre, texte de consentement,
      et lien vers la politique de confidentialité sous chaque formulaire.
- [ ] **Adresse postale de l'organisme** dans le pied de page et la politique de
      confidentialité, dès que Noura la confirme.
- [ ] **Variables d'environnement.** Fichier `.env.example` documenté, configuration
      dans Vercel, et vérification qu'aucune clé ne se retrouve dans le dépôt GitHub.
- [ ] **Domaine final** dans `src/config/site.ts`, puis vérification du sitemap,
      du robots.txt et des images de partage avec la vraie adresse.

## Priorité 2, juste avant ou juste après le lancement

- [ ] **Page de dons réelle.** Remplacer la page « bientôt disponible » par l'intégration
      de la plateforme choisie : montants suggérés, don unique et mensuel, mention claire
      du statut fiscal, page de remerciement, le tout en français et en anglais.
- [ ] **Icônes de réseaux sociaux** dans le pied de page, dès que les comptes existent.
- [ ] **Page 404 et page d'erreur** personnalisées et bilingues, dans le style du site.
      Aujourd'hui ce sont les pages par défaut de Next.js.
- [ ] **Pages de confirmation** après l'envoi d'un formulaire, plutôt qu'un simple
      message en place.
- [ ] **Formulaire de bénévolat structuré.** Aujourd'hui le bouton « Devenir bénévole »
      ouvre un courriel prérempli. Un vrai formulaire avec les champs utiles
      (langues parlées, disponibilité, intérêt) serait plus efficace.
- [ ] **Formulaire de partenariat**, même logique.
- [ ] **Retirer les mentions « organisme proposé »** partout, dès que l'incorporation
      est faite. Elles sont dans le pied de page, la page À propos, les pages légales
      et le guide.

## Priorité 3, qualité et suivi

- [ ] **Audit d'accessibilité complet.** Test avec axe et Lighthouse, vérification des
      contrastes, de la navigation au clavier, et des lecteurs d'écran. La structure
      est déjà accessible, mais un audit formel manque.
- [ ] **Audit de performance.** Lighthouse sur toutes les pages, optimisation des
      images et du chargement des polices.
- [ ] **Image de partage propre à chaque page**, en particulier pour le guide,
      pour qu'un partage du guide n'affiche pas la même image que la page d'accueil.
- [ ] **Recherche dans le guide**, pour trouver un sujet sans parcourir la table des matières.
- [ ] **Dates de révision visibles** sur chaque section du guide, pour que le lecteur
      sache quand l'information a été vérifiée.
- [ ] **Version imprimable** du guide en ligne, et améliorations du PDF (signets,
      liens cliquables dans la table des matières).
- [ ] **Statistiques de visite**, si Noura le décide, avec mise à jour de la politique
      de confidentialité.
- [ ] **Tests automatisés dans le dépôt.** J'ai un script de vérification qui teste
      47 points (toutes les pages, tous les liens, les deux langues, les deux thèmes,
      6 tailles d'écran, les PDF, les formulaires). Il vit hors du dépôt pour le moment,
      il faudrait le committer et le faire tourner automatiquement à chaque changement.
- [ ] **Sauvegarde des messages reçus.** Aujourd'hui rien n'est stocké. Si on veut
      garder un historique des demandes, il faut une base de données, et ça change
      la politique de confidentialité.

---

## Ordre suggéré

1. Confirmer le domaine et créer la vraie boîte courriel. Tout le reste en dépend.
2. Ouvrir les comptes Resend et infolettre, me donner les clés.
3. Je branche les deux formulaires et l'anti-spam.
4. Faire relire le guide et les pages légales pendant que je code.
5. Mettre en ligne sur le vrai domaine.
6. Les dons après, quand le statut juridique le permet.
