// Contenus du portfolio : projets, outils, prestations et référents.
// Pour ajouter une image, déposer le fichier dans public/projets/ et renseigner `src`.
// Un média sans `src` s'affiche comme un emplacement vide [ ... ] à compléter.

export const linkedInUrl = "https://www.linkedin.com/in/ilyes-lakhdar-71638b26a/";
export const contactEmail = "ilyes.lakhdar.p@gmail.com";

export type Media = {
  /** Chemin dans public/ ; absent = emplacement à compléter */
  src?: string;
  /** Vidéo de démonstration (mp4 dans public/ ou lien YouTube/LinkedIn) */
  video?: string;
  alt: string;
  caption: string;
  /** Logo ou visuel à afficher en entier sur fond blanc */
  contain?: boolean;
};

export type Project = {
  slug: string;
  category: "Expérience professionnelle" | "Projet client" | "Projet IA" | "Projet académique";
  title: string;
  organization: string;
  period?: string;
  role: string;
  summary: string;
  tags: string[];
  /** Chiffres clés affichés en tête de la page projet */
  figures: { value: string; label: string }[];
  context: string;
  actions: string[];
  results: string[];
  /** Ce que le projet démontre pour un client ou un recruteur */
  proof: string;
  cover: Media;
  gallery: Media[];
  logo?: Media;
  /** Liens externes (application en ligne, dépôt public…) */
  links?: { label: string; url: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "observatoire-stationnement-grenoble",
    category: "Expérience professionnelle",
    title: "Observatoire du stationnement payant",
    organization: "Ville de Grenoble · Pôle SI Espaces Extérieurs",
    period: "Mai — Août 2025",
    role: "Data Analyst (stage de fin d’études)",
    summary:
      "45 fichiers d’enquête hétérogènes (2002 → 2024) transformés en une base unique, des tableaux de bord Power BI et des cartes QGIS pour suivre le stationnement dans le temps et dans l’espace.",
    tags: ["Power BI", "Python", "VBA", "SQL", "QGIS", "ETL"],
    figures: [
      { value: "45", label: "fichiers Excel unifiés" },
      { value: "22 ans", label: "d’enquêtes (2002 → 2024)" },
      { value: "70", label: "secteurs analysés" },
      { value: "2 532", label: "relevés dans la base finale" },
    ],
    context:
      "Depuis 2002, la Ville mène chaque semestre une enquête sur l’occupation et le respect du stationnement payant. Les résultats dormaient dans 45 fichiers Excel aux 4 mises en forme différentes, impossibles à exploiter ensemble.",
    actions: [
      "Macro VBA de formatage et de nettoyage appliquée aux 45 fichiers (colonnes, lignes superflues, ajout source / date / semestre).",
      "Script Python de fusion et de structuration selon un modèle relationnel (tables RELEVÉ et SOURCE).",
      "Contrôle d’intégrité par requêtes SQL sous LibreOffice Base.",
      "Trois tableaux de bord Power BI (zones, secteurs, croisement) : taux d’occupation, de respect et de verbalisation, filtrables par année et semestre.",
      "Conversion au format long en Python et cartographies thématiques sous QGIS.",
      "Rédaction d’un guide utilisateur pour rendre l’outil autonome.",
    ],
    results: [
      "Une chaîne ETL reproductible : chaque nouvelle enquête s’intègre sans retraitement manuel.",
      "22 ans d’historique lisibles en un écran, par zone, secteur, année et semestre.",
      "Des cartes qui rendent les écarts entre quartiers immédiatement visibles.",
    ],
    proof:
      "Je sais reprendre des fichiers Excel désordonnés accumulés depuis des années, les fiabiliser et en tirer un outil de pilotage que l’équipe utilise seule.",
    cover: {
      src: "/projets/grenoble-dashboard-secteurs.webp",
      alt: "Tableau de bord Power BI des secteurs de stationnement payant de la Ville de Grenoble",
      caption: "Tableau de bord Power BI : indicateurs par secteur, évolution 2002 → 2024.",
    },
    gallery: [
      {
        src: "/projets/grenoble-pipeline-etl.webp",
        alt: "Schéma de la chaîne Extract, Transform, Load du projet",
        caption: "Chaîne ETL : macro VBA ×45, fusion Python, contrôle SQL, puis Power BI et QGIS.",
      },
      {
        src: "/projets/grenoble-dashboard-zones.webp",
        alt: "Tableau de bord Power BI par zone tarifaire",
        caption: "Vue par zone tarifaire (verte, violette, orange).",
      },
      {
        src: "/projets/grenoble-dashboard-secteurs-zones.webp",
        alt: "Tableau de bord Power BI croisant zones et secteurs",
        caption: "Croisement zones × secteurs et relation entre les trois taux.",
      },
      {
        src: "/projets/grenoble-carte-occupation-2024.webp",
        alt: "Carte QGIS du taux d’occupation par secteur en 2024",
        caption: "Carte QGIS : taux d’occupation par secteur en 2024.",
      },
      {
        src: "/projets/grenoble-carte-respect-2024.webp",
        alt: "Carte QGIS du taux de respect par secteur en 2024",
        caption: "Carte QGIS : taux de respect par secteur en 2024.",
      },
      {
        alt: "Vidéo de démonstration du tableau de bord",
        caption: "Vidéo de démonstration du tableau de bord",
      },
    ],
    logo: { src: "/projets/logo-ville-grenoble.png", alt: "Logo Ville de Grenoble", caption: "Ville de Grenoble" },
    featured: true,
  },
  {
    slug: "outil-decisionnel-gf38",
    category: "Projet client",
    title: "Outil décisionnel de suivi des performances",
    organization: "Grenoble Foot 38 · IUT2 Grenoble",
    period: "2024 — 2025",
    role: "Data Analyst · équipe de 3",
    summary:
      "Des rapports Power BI pour le staff du GF38 : charge d’entraînement, performances GPS, forme et poids des joueurs, comparés aux objectifs fixés par le préparateur physique.",
    tags: ["Power BI", "DAX", "Power Query", "Excel", "Gestion de projet"],
    figures: [
      { value: "5", label: "sources Excel modélisées" },
      { value: "66", label: "variables GPS exploitées" },
      { value: "3", label: "rapports Power BI livrés" },
      { value: "1 an", label: "de projet avec un vrai client" },
    ],
    context:
      "L’entraîneur adjoint en charge de la performance du GF38 consolidait à la main des données GPS, de ressenti (RPE / wellness) et de poids. Objectif : comparer entraînements et matchs et produire un rapport clair pour le coach.",
    actions: [
      "Analyse du fichier source (GPS, RPE, poids, cibles, objectifs) et du dictionnaire de variables fourni par le club.",
      "Modèle de données Power BI : extraction des sessions d’entraînement en dimension, calendrier, relations joueurs / dates.",
      "Mesures DAX : ratios de charge, moyenne mobile sur 21 jours, comparaison à même « day code », écarts aux cibles.",
      "Rapports interactifs avec signets, mise en forme conditionnelle et zone de commentaires pour le coach.",
      "Pilotage PRINCE2 + Agile : spécifications, maquettes, matrice des risques, cahier de recettes, Trello.",
      "Documentation d’installation et d’utilisation remise au club.",
    ],
    results: [
      "Moins de manipulations manuelles et moins d’erreurs de saisie.",
      "Rapports produits en quelques clics au lieu d’une consolidation à la main.",
      "Un staff qui lit la charge de chaque joueur d’un coup d’œil grâce aux codes couleur.",
    ],
    proof:
      "Je sais recueillir un besoin métier, le traduire en indicateurs et livrer un outil documenté à un client non technicien.",
    cover: {
      src: "/projets/gf38-apercu-entrainement.webp",
      alt: "Rapport Power BI d’aperçu d’une session d’entraînement du GF38, noms des joueurs floutés",
      caption: "Aperçu d’une session d’entraînement (noms des joueurs floutés).",
    },
    gallery: [
      {
        src: "/projets/gf38-metaboliques.webp",
        alt: "Rapport coach sur les indicateurs métaboliques et énergétiques, noms floutés",
        caption: "Rapport au coach : indicateurs GPS et commentaires (noms floutés).",
      },
      {
        src: "/projets/gf38-architecture.webp",
        alt: "Schéma de l’architecture des fichiers du projet",
        caption: "Architecture : un fichier Excel source, deux rapports Power BI.",
      },
      {
        alt: "Vidéo de démonstration des rapports Power BI",
        caption: "Vidéo de démonstration des rapports Power BI",
      },
    ],
    logo: { src: "/projets/logo-gf38.png", alt: "Logo Grenoble Foot 38", caption: "Grenoble Foot 38" },
  },
  {
    slug: "application-ia-champions-league",
    category: "Projet IA",
    title: "UCL Hub — application Ligue des champions",
    organization: "Projet personnel",
    role: "Conception et développement assistés par IA",
    summary:
      "Une application web qui affiche en direct les données de la Ligue des champions (matchs, classement, buteurs et passeurs) à partir d’une API, construite avec Lovable en un temps record.",
    tags: ["IA · Lovable", "API", "TypeScript", "Supabase", "Cache de données"],
    figures: [
      { value: "4", label: "pages : accueil, matchs, classement, joueurs" },
      { value: "1 h / 6 h", label: "de cache selon la donnée" },
      { value: "0", label: "clé d’API exposée côté navigateur" },
    ],
    context:
      "Montrer qu’avec l’IA, on peut livrer rapidement un outil de données complet et fiable : de l’appel à une API externe jusqu’à une interface claire, en production.",
    actions: [
      "Connexion à l’API football-data.org via des fonctions serveur : la clé d’API ne quitte jamais le serveur.",
      "Cache des réponses dans une base Supabase (PostgreSQL), rafraîchi toutes les heures pour les matchs et toutes les 6 h pour le classement et les buteurs.",
      "Repli automatique sur les données en cache si l’API est indisponible ou si le quota de requêtes est atteint.",
      "Accueil avec prochain match et compte à rebours, derniers résultats, top buteurs et top 5 du classement.",
      "Matchs regroupés par phase et par journée, filtrables par équipe ou par recherche ; classement triable avec zones de qualification ; top 10 buteurs et passeurs.",
      "Développement piloté par prompts avec Lovable (TanStack Start, React, TypeScript, Tailwind), puis vérification du code et des données.",
    ],
    results: [
      "Une application en ligne, toujours à jour, sans saisie manuelle.",
      "Une architecture qui respecte les limites de l’API et reste disponible même en cas de panne de la source.",
    ],
    proof:
      "Je sais m’appuyer sur l’IA pour livrer vite un outil de données connecté à une source externe, robuste et prêt à l’emploi, pas seulement une maquette.",
    links: [{ label: "Voir l’application en ligne", url: "https://ucl-hub.lovable.app" }],
    cover: {
      alt: "Capture de l’application UCL Hub",
      caption: "Capture de l’application UCL Hub",
    },
    gallery: [
      {
        alt: "Vidéo de démonstration de l’application UCL Hub",
        caption: "Vidéo de démonstration (post LinkedIn)",
      },
    ],
  },
  {
    slug: "base-donnees-diamfab",
    category: "Expérience professionnelle",
    title: "Base de données de suivi de production",
    organization: "DIAMFAB · start-up issue de l’Institut Néel (CNRS)",
    period: "Avril — Juin 2024",
    role: "Analyste base de données (stage, 10 semaines)",
    summary:
      "Structuration d’une base Access de suivi des procédés d’épitaxie de diamant synthétique : formulaires de saisie, requêtes SQL d’insertion et automatisations VBA.",
    tags: ["Access", "SQL", "VBA", "Modélisation"],
    figures: [
      { value: "15", label: "tables dans la base" },
      { value: "8", label: "formulaires de saisie" },
      { value: "10", label: "semaines en start-up deeptech" },
    ],
    context:
      "DIAMFAB produit des wafers de diamant pour l’électronique de puissance. Les données de R&D (substrats, couches, caractérisations) étaient saisies à la main dans une base Access provisoire et incomplète.",
    actions: [
      "Prise en main de la base existante : 15 tables, 8 formulaires, relations substrats / couches.",
      "Formulaire d’ajout de couches avec recherche automatique du nombre de couches déjà présentes sur un substrat.",
      "Requêtes SQL d’insertion alimentées par les champs des formulaires.",
      "Macros et code VBA pour enchaîner les insertions sans ressaisie.",
    ],
    results: [
      "Saisie des couches plus rapide et moins sujette aux erreurs.",
      "Une base mieux structurée pour croiser paramètres de fabrication et caractérisations.",
    ],
    proof:
      "Je sais m’intégrer vite dans un environnement technique exigeant et fiabiliser la saisie de données métier.",
    cover: {
      src: "/projets/logo-diamfab.webp",
      alt: "Logo DIAMFAB",
      caption: "DIAMFAB (captures confidentielles)",
      contain: true,
    },
    gallery: [],
    logo: { src: "/projets/logo-diamfab.webp", alt: "Logo DIAMFAB", caption: "DIAMFAB" },
  },
  {
    slug: "collecte-automatisee-coupe-du-monde-rugby",
    category: "Projet académique",
    title: "Collecte automatisée de données web",
    organization: "BUT Science des Données · Université Grenoble Alpes",
    period: "2023",
    role: "Développement Python",
    summary:
      "Un programme Python qui interroge l’API officielle de la Coupe du monde de rugby 2023, récupère joueurs, poules et matchs, puis génère automatiquement des fiches et des tableaux HTML.",
    tags: ["Python", "API", "Web scraping", "Automatisation"],
    figures: [
      { value: "~2 min", label: "pour régénérer toutes les données" },
      { value: "4", label: "poules et la phase finale couvertes" },
    ],
    context:
      "Objectif pédagogique : automatiser entièrement la collecte et la mise en forme de données publiées sur le web.",
    actions: [
      "Appels à l’API de la compétition (équipes, effectifs, calendrier, statistiques joueurs).",
      "Export CSV par poule, matchs et phase finale.",
      "Génération automatique de pages HTML (fiches joueurs, tableaux par pays).",
      "Menu interactif en ligne de commande pour piloter l’ensemble.",
    ],
    results: ["Une collecte complète relancée en une commande, sans copier-coller."],
    proof: "Je sais automatiser la récupération de données externes et leur mise en forme.",
    cover: {
      alt: "Capture du programme de collecte automatisée",
      caption: "Capture du menu ou des pages générées",
    },
    gallery: [],
  },
  {
    slug: "application-r-shiny-gf38",
    category: "Projet académique",
    title: "Application d’analyse statistique R Shiny",
    organization: "BUT Science des Données · données GF38",
    period: "2024",
    role: "Développement R",
    summary:
      "Une application web R Shiny pour comparer le GF38 aux clubs de Ligue 1 et Ligue 2 : statistiques descriptives, analyse bivariée, ACP et classification automatique.",
    tags: ["R", "Shiny", "ACP", "Clustering"],
    figures: [],
    context:
      "Rendre des analyses statistiques avancées accessibles à un public non statisticien via une interface interactive.",
    actions: [
      "Import des données Excel du club et des championnats.",
      "Onglets d’analyse univariée et bivariée (boxplots, histogrammes, croisements).",
      "Analyse en composantes principales et classification hiérarchique (dendrogramme).",
    ],
    results: ["Des analyses statistiques explorables sans écrire une ligne de code."],
    proof: "Je sais transformer une analyse statistique en outil interactif.",
    cover: {
      alt: "Capture de l’application R Shiny",
      caption: "Capture de l’application Shiny",
    },
    gallery: [],
    logo: { src: "/projets/logo-gf38.png", alt: "Logo Grenoble Foot 38", caption: "Grenoble Foot 38" },
  },
  {
    slug: "benchmark-big-data-spark",
    category: "Projet académique",
    title: "Benchmark Big Data : Python vs Spark",
    organization: "BUT Science des Données · Université Grenoble Alpes",
    period: "2025",
    role: "Projet en binôme",
    summary:
      "Comparaison des temps de traitement entre Python natif et Apache Spark sur des corpus de 10 Mo à 1 Go : Spark traite 1 Go en 9 s contre 132 s.",
    tags: ["PySpark", "Python", "Big Data", "Performance"],
    figures: [
      { value: "×15", label: "plus rapide avec Spark sur 1 Go" },
      { value: "1 Go", label: "de texte traité" },
    ],
    context: "Mesurer à partir de quel volume un traitement distribué devient rentable.",
    actions: [
      "Constitution de corpus de 10 Mo à 1 Go (Projet Gutenberg).",
      "WordCount avec filtrage des mots vides en Python natif puis en Spark (RDD, map / reduceByKey).",
      "Mesure et visualisation des temps d’exécution.",
    ],
    results: ["Spark garde une progression quasi linéaire là où Python natif explose au-delà de 500 Mo."],
    proof: "Je sais choisir l’outil adapté au volume de données, sans surdimensionner.",
    cover: {
      src: "/projets/spark-benchmark.webp",
      alt: "Graphique comparant les temps d’exécution de Python natif et de Spark",
      caption: "Temps d’exécution selon la taille du fichier.",
    },
    gallery: [],
  },
  {
    slug: "prevision-series-temporelles",
    category: "Projet académique",
    title: "Prévision de séries temporelles",
    organization: "BUT Science des Données · Université Grenoble Alpes",
    period: "2023",
    role: "Projet en binôme",
    summary:
      "Prévision du trafic passagers de l’aéroport de San Francisco avec R : saisonnalité, série corrigée, modèles paramétriques et lissages de Holt-Winters comparés par MSE.",
    tags: ["R", "Statistiques", "Prévision", "Holt-Winters"],
    figures: [{ value: "6", label: "modèles de prévision comparés" }],
    context: "Anticiper une activité saisonnière à partir de 16 ans d’historique mensuel.",
    actions: [
      "Décomposition de la série et coefficients saisonniers.",
      "Série lissée par moyenne mobile et série corrigée des variations saisonnières.",
      "Modèles additif / multiplicatif, lissage exponentiel, Holt et Holt-Winters.",
      "Étude des résidus et choix du modèle par l’erreur quadratique moyenne.",
    ],
    results: ["Un modèle de prévision justifié statistiquement, utilisable pour planifier l’activité."],
    proof: "Je sais produire une prévision fiable et expliquer pourquoi elle l’est.",
    cover: {
      src: "/projets/series-holt-winters.webp",
      alt: "Prévision par lissage de Holt-Winters",
      caption: "Prévision par lissage de Holt-Winters.",
    },
    gallery: [
      {
        src: "/projets/series-cvs.webp",
        alt: "Série lissée et série corrigée des variations saisonnières",
        caption: "Série lissée et série corrigée des variations saisonnières.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export type Tool = {
  name: string;
  monogram: string;
  usage: string;
  color: string;
};

export const toolGroups: { title: string; tools: Tool[] }[] = [
  {
    title: "Analyse & reporting",
    tools: [
      { name: "Power BI", monogram: "BI", usage: "DAX, Power Query, modèles de données", color: "#F2C811" },
      { name: "Excel", monogram: "XL", usage: "Power Query, tableaux croisés, VBA", color: "#21A366" },
      { name: "QGIS", monogram: "QG", usage: "Cartographie thématique", color: "#93B023" },
      { name: "Tableau", monogram: "TB", usage: "Data visualisation", color: "#E97627" },
    ],
  },
  {
    title: "Données & programmation",
    tools: [
      { name: "Python", monogram: "PY", usage: "pandas, API, scraping, automatisation", color: "#3776AB" },
      { name: "SQL", monogram: "SQL", usage: "MySQL, Access, LibreOffice Base", color: "#4479A1" },
      { name: "R", monogram: "R", usage: "Statistiques, prévision, Shiny", color: "#276DC3" },
      { name: "PySpark", monogram: "SP", usage: "Traitement de gros volumes", color: "#E25A1C" },
      { name: "VBA", monogram: "VB", usage: "Macros de nettoyage et d’insertion", color: "#867DB1" },
      { name: "Access", monogram: "AC", usage: "Bases de données métier", color: "#A4373A" },
    ],
  },
  {
    title: "IA & développement rapide",
    tools: [
      { name: "Claude Code", monogram: "CC", usage: "Développement et automatisation assistés par IA", color: "#D97757" },
      { name: "Lovable", monogram: "LV", usage: "Applications web en quelques jours", color: "#FF5C8A" },
      { name: "Supabase", monogram: "SB", usage: "Base PostgreSQL et cache pour applications", color: "#3ECF8E" },
    ],
  },
];

export type Offer = {
  letter: string;
  name: string;
  price: string;
  title: string;
  description: string;
  features: string[];
  audience: string;
  accentClass: string;
};

export const offers: Offer[] = [
  {
    letter: "A",
    name: "Préparation de données",
    price: "À partir de 400 €",
    title: "Des données propres, prêtes à être analysées.",
    description:
      "Vos fichiers sont dispersés, en doublon ou incohérents ? Je les nettoie, les fusionne et les structure pour fiabiliser toutes vos analyses.",
    features: [
      "Nettoyage et fusion de fichiers",
      "Suppression des doublons",
      "Standardisation et identifiants",
      "Structuration relationnelle",
      "Requêtes SQL et base prête pour Power BI",
    ],
    audience: "Structures avec plusieurs fichiers, sources ou formats qui ne communiquent pas entre eux.",
    accentClass: "bg-offer-blue/15 text-offer-blue",
  },
  {
    letter: "B",
    name: "Dashboard",
    price: "À partir de 850 €",
    title: "Vos fichiers Excel deviennent un tableau de bord.",
    description:
      "Un dashboard Power BI interactif, pensé pour vos décisions et transmissible à vos équipes, avec une courte formation à la prise en main.",
    features: [
      "Recueil du besoin et choix des KPI",
      "Power Query et modèle de données",
      "Mesures DAX",
      "Dashboard interactif",
      "Guide d’utilisation et formation",
    ],
    audience: "PME, commerces, associations, cabinets, clubs sportifs et collectivités.",
    accentClass: "bg-offer-green/15 text-offer-green",
  },
  {
    letter: "C",
    name: "Automatisation",
    price: "À partir de 1 100 €",
    title: "Supprimez vos tâches répétitives grâce à l’IA.",
    description:
      "Reporting qui s’actualise seul, scripts de consolidation, petite application IA sur mesure : vous récupérez le temps passé à copier-coller.",
    features: [
      "Audit des tâches répétitives",
      "Scripts Python et macros VBA",
      "Reporting automatisé",
      "Application IA sur mesure",
      "Process documenté et transmis",
    ],
    audience: "Équipes qui consolident encore leurs chiffres à la main chaque semaine ou chaque mois.",
    accentClass: "bg-offer-yellow/15 text-offer-yellow",
  },
];

// Sans `email`, les coordonnées sont communiquées sur demande via le formulaire de contact.
export const referents: { name: string; role: string; organization: string; relation: string; email?: string }[] = [
  {
    name: "Laura Houry",
    role: "Responsable du pôle SI Espaces Extérieurs",
    organization: "Ville de Grenoble",
    relation: "Tutrice de stage · Observatoire du stationnement",
  },
  {
    name: "Jessica Bousquet",
    role: "Responsable R&D Matériaux",
    organization: "DIAMFAB",
    relation: "Tutrice de stage · Base de données de production",
  },
  {
    name: "David Faure",
    role: "Directeur de projet",
    organization: "IUT2 Grenoble · Science des Données",
    relation: "Encadrant · Outil décisionnel GF38",
    email: "david.faure@iut2.univ-grenoble-alpes.fr",
  },
];
