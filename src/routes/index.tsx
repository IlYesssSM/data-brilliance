import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Bot,
  Braces,
  Check,
  Database,
  FileSpreadsheet,
  Linkedin,
  MapPinned,
  Sparkles,
  Workflow,
} from "lucide-react";

import dataSystemsVisual from "@/assets/data-systems-visual.jpg";

const linkedInUrl = "https://www.linkedin.com/in/ilyes-lakhdar-71638b26a/";

const skillGroups = [
  {
    number: "01",
    title: "Décisionnel",
    description: "Des indicateurs fiables, lisibles et directement utiles à la décision.",
    skills: ["Power BI", "DAX", "KPI", "Data visualisation"],
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Data engineering",
    description: "Une donnée propre et structurée, de la source jusqu’au modèle d’analyse.",
    skills: ["SQL", "Power Query", "Excel", "Modélisation"],
    icon: Database,
  },
  {
    number: "03",
    title: "Automatisation & IA",
    description: "Moins de tâches répétitives, plus de temps consacré à l’analyse.",
    skills: ["Python", "VBA", "Applications IA", "Workflows"],
    icon: Bot,
  },
];

const offers = [
  {
    letter: "A",
    eyebrow: "Dashboard Power BI",
    title: "Transformez vos fichiers Excel en tableau de bord.",
    description:
      "De vos fichiers bruts à une lecture claire de l’activité, avec un dashboard interactif et transmissible à vos équipes.",
    features: [
      "Analyse et nettoyage des fichiers",
      "Power Query et modèle de données",
      "KPI et mesures DAX",
      "Dashboard interactif",
      "Formation rapide à l’utilisation",
    ],
    audience: "PME, commerces, associations, cabinets, restaurants, industrie et salles de sport.",
    accent: "offer-green",
  },
  {
    letter: "B",
    eyebrow: "Automatisation du reporting",
    title: "Réduisez le temps passé à préparer vos reportings.",
    description:
      "Les données sont centralisées et le reporting s’actualise automatiquement, ou avec un minimum d’intervention.",
    features: ["Excel et Power Query", "Python", "VBA si pertinent", "Power BI", "Process documenté"],
    audience: "Équipes qui consolident encore leurs chiffres manuellement chaque semaine ou chaque mois.",
    accent: "offer-yellow",
  },
  {
    letter: "C",
    eyebrow: "Préparation des données",
    title: "Vos données sont désorganisées ? Préparons-les pour l’analyse.",
    description:
      "Une base saine et cohérente pour fiabiliser vos analyses et préparer efficacement votre futur dashboard.",
    features: [
      "Nettoyage et fusion de fichiers",
      "Suppression des doublons",
      "Standardisation et identifiants",
      "Structuration relationnelle",
      "Requêtes SQL et préparation Power BI",
    ],
    audience: "Structures avec plusieurs fichiers, sources ou formats qui ne communiquent pas entre eux.",
    accent: "offer-blue",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilyes Lakhdar — Data Analyst freelance" },
      {
        name: "description",
        content:
          "Portfolio d’Ilyes Lakhdar, Data Analyst freelance à Grenoble : dashboards Power BI, automatisation du reporting et applications IA.",
      },
      { property: "og:title", content: "Ilyes Lakhdar — Data Analyst freelance" },
      {
        property: "og:description",
        content: "Power BI, automatisation du reporting et préparation des données pour transformer vos chiffres en décisions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#accueil" className="group flex items-center gap-3" aria-label="Retour en haut">
            <span className="grid size-8 place-items-center border border-primary/70 bg-primary/10 font-display text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              IL
            </span>
            <span className="hidden text-sm font-semibold sm:inline">Ilyes Lakhdar</span>
          </a>

          <nav className="hidden items-center gap-7 text-xs font-medium text-muted-foreground md:flex" aria-label="Navigation principale">
            <a href="#expertise" className="transition-colors hover:text-foreground">Expertise</a>
            <a href="#parcours" className="transition-colors hover:text-foreground">Parcours</a>
            <a href="#offres" className="transition-colors hover:text-foreground">Offres</a>
          </nav>

          <a
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-2 border border-primary/70 bg-primary/10 px-3 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Linkedin className="size-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Me contacter</span>
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </header>

      <main>
        <section id="accueil" className="relative isolate min-h-[92svh] overflow-hidden border-b border-border pt-16">
          <img
            src={dataSystemsVisual}
            alt="Visualisation abstraite d’un système de données et de tableaux de bord"
            width={1600}
            height={1000}
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-65"
          />
          <div className="hero-shade absolute inset-0 -z-10" />
          <div className="hero-grid absolute inset-0 -z-10 opacity-50" />

          <div className="mx-auto flex min-h-[calc(92svh-4rem)] max-w-7xl flex-col justify-between px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
            <div className="flex items-center justify-between border-b border-border/70 pb-5 text-xs text-muted-foreground">
              <span className="flex items-center gap-2 uppercase tracking-widest">
                <span className="size-2 animate-pulse rounded-full bg-success" /> Disponible pour de nouvelles missions
              </span>
              <span className="hidden sm:inline">Grenoble · France</span>
            </div>

            <div className="max-w-4xl py-14 sm:py-20">
              <div className="mb-5 flex items-center gap-3 text-sm text-primary">
                <span className="h-px w-9 bg-primary" />
                Data Analyst freelance
              </div>
              <h1 className="font-display text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-8xl">
                Vos données,
                <br />
                <span className="text-primary">enfin utiles.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Je transforme vos fichiers dispersés en systèmes de pilotage fiables grâce à Power BI,
                l’automatisation du reporting et des applications IA pensées pour vos usages.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#offres"
                  className="inline-flex h-11 items-center gap-2 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong"
                >
                  Découvrir mes offres <ArrowDown className="size-4" aria-hidden="true" />
                </a>
                <a
                  href="#parcours"
                  className="inline-flex h-11 items-center gap-2 border border-border bg-surface/60 px-5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  Voir mon parcours <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="grid gap-5 border-t border-border/70 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-xl font-display text-xl leading-8 text-foreground/90 sm:text-2xl">
                “J’aime partir d’un problème concret et construire une solution que l’on comprend en un regard.”
              </p>
              <div className="text-left sm:text-right">
                <div className="font-signature text-3xl text-primary">Ilyes</div>
                <div className="text-xs text-muted-foreground">Data Analyst · BUT Science des Données</div>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="border-b border-border bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              number="01"
              eyebrow="Expertise"
              title="De la donnée brute à la décision."
              text="Une approche complète pour structurer, automatiser et mettre en valeur vos données sans ajouter de complexité inutile."
            />

            <div className="mt-14 grid border-l border-t border-border md:grid-cols-3">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article key={group.title} className="group border-b border-r border-border bg-background/30 p-7 transition-colors hover:bg-panel sm:p-8">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs text-muted-foreground">{group.number}</span>
                      <Icon className="size-6 text-primary transition-transform group-hover:-translate-y-1" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="mt-14 font-display text-2xl font-semibold">{group.title}</h3>
                    <p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">{group.description}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="border border-border bg-surface px-2.5 py-1.5 text-xs text-foreground/80">{skill}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="parcours" className="border-b border-border py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              number="02"
              eyebrow="Expérience & projets"
              title="Un parcours ancré dans le réel."
              text="Des projets conçus au contact de données complexes, avec un objectif constant : rendre l’information exploitable."
            />

            <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
              <ProjectCard
                className="lg:col-span-8 lg:row-span-2"
                index="01"
                period="Mai — Août 2025"
                title="Observatoire du stationnement payant"
                subtitle="Ville de Grenoble · Data Analyst"
                description="Structuration et transformation de fichiers complexes, puis conception de dashboards Power BI interactifs pour suivre les usages dans le temps et dans l’espace."
                tags={["Power BI", "Power Query", "Cartographie", "Data visualisation"]}
                icon={<MapPinned className="size-7" strokeWidth={1.5} aria-hidden="true" />}
                featured
              />
              <ProjectCard
                className="lg:col-span-4"
                index="02"
                title="Applications IA"
                subtitle="Spécialisation freelance"
                description="Création d’outils ciblés pour accélérer l’accès à l’information et automatiser les tâches répétitives."
                tags={["Python", "IA", "Automatisation"]}
                icon={<Sparkles className="size-6" strokeWidth={1.5} aria-hidden="true" />}
              />
              <ProjectCard
                className="lg:col-span-4"
                index="03"
                title="Science des données"
                subtitle="BUT · IUT2 Grenoble"
                description="Formation en statistiques, analyse exploratoire, bases relationnelles et valorisation des données."
                tags={["Statistiques", "SQL", "Python", "QGIS"]}
                icon={<Braces className="size-6" strokeWidth={1.5} aria-hidden="true" />}
              />
            </div>

            <div className="mt-8 flex justify-end">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-strong"
              >
                Explorer mon parcours complet sur LinkedIn <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="offres" className="border-b border-border bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              number="03"
              eyebrow="Prestations"
              title="Trois offres. Un objectif : vous faire gagner du temps."
              text="Chaque mission commence par vos usages et vos contraintes. La solution reste claire, maintenable et adaptée à votre niveau d’autonomie."
            />

            <div className="mt-14 grid gap-4 lg:grid-cols-3">
              {offers.map((offer) => (
                <article key={offer.letter} className="group flex flex-col border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/60 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className={`grid size-9 place-items-center rounded-full bg-${offer.accent}/15 font-mono text-sm font-bold text-${offer.accent}`}>
                      {offer.letter}
                    </span>
                    <Workflow className="size-5 text-muted-foreground transition-colors group-hover:text-primary" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <p className="mt-8 font-mono text-xs uppercase text-muted-foreground">Offre {offer.letter} · {offer.eyebrow}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-8">{offer.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{offer.description}</p>
                  <ul className="mt-7 space-y-3 border-t border-border pt-6">
                    {offer.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-foreground/85">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <p className="text-xs font-semibold uppercase text-muted-foreground">Idéal pour</p>
                    <p className="mt-2 text-sm leading-6 text-foreground/80">{offer.audience}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="cta-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
            <span className="inline-flex items-center gap-2 text-xs uppercase text-muted-foreground">
              <span className="size-2 rounded-full bg-success" /> Disponible pour échanger
            </span>
            <h2 className="mt-7 font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Un reporting vous prend trop de temps ?
              <span className="block text-primary">Parlons-en simplement.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground">
              Présentez-moi votre fonctionnement actuel. Je vous répondrai avec une première piste concrète et adaptée à votre contexte.
            </p>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex h-12 items-center gap-3 bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong"
            >
              <Linkedin className="size-4" aria-hidden="true" /> Échanger sur LinkedIn <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 Ilyes Lakhdar · Data Analyst freelance</p>
          <div className="flex items-center gap-5">
            <span>Grenoble, France</span>
            <a href={linkedInUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ number, eyebrow, title, text }: { number: string; eyebrow: string; title: string; text: string }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <div className="flex items-start gap-3 font-mono text-xs uppercase text-primary">
        <span>{number}</span><span className="mt-1.5 h-px w-8 bg-primary" /><span>{eyebrow}</span>
      </div>
      <div>
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">{title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function ProjectCard({ className, index, period, title, subtitle, description, tags, icon, featured = false }: {
  className?: string;
  index: string;
  period?: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <article className={`project-card group relative flex min-h-72 flex-col overflow-hidden border border-border p-6 sm:p-8 ${featured ? "project-card-featured" : ""} ${className ?? ""}`}>
      <div className="absolute right-0 top-0 size-40 translate-x-10 -translate-y-10 rounded-full bg-primary/10 blur-3xl transition-transform group-hover:scale-125" aria-hidden="true" />
      <div className="relative flex items-start justify-between">
        <span className="font-mono text-xs text-muted-foreground">{index}</span>
        <span className="text-primary">{icon}</span>
      </div>
      <div className="relative mt-auto pt-16">
        {period && <p className="mb-3 font-mono text-xs text-primary">{period}</p>}
        <p className="text-xs font-semibold uppercase text-muted-foreground">{subtitle}</p>
        <h3 className={`mt-2 font-display font-semibold ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{title}</h3>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => <span key={tag} className="border border-border/80 bg-background/50 px-2.5 py-1.5 text-xs text-foreground/75">{tag}</span>)}
        </div>
      </div>
    </article>
  );
}