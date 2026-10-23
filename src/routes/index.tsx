import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  Database,
  Gauge,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import dataSystemsVisual from "@/assets/data-systems-visual.jpg";
import { ContactForm, MediaFrame, SectionHeading, SiteFooter, SiteHeader } from "@/components/site";
import { contactEmail, linkedInUrl, offers, projects, referents, toolGroups, type Project } from "@/data/portfolio";
import { OG_IMAGE } from "@/lib/site";

const proofPoints = [
  { value: "45 → 1", label: "fichiers Excel unifiés en une base pour la Ville de Grenoble" },
  { value: "2", label: "outils Power BI livrés à de vrais clients (collectivité, club pro)" },
  { value: "IA", label: "Claude Code et Lovable pour livrer un outil en quelques jours" },
];

const atAGlance = [
  {
    icon: Gauge,
    title: "Spécialités",
    items: ["Tableaux de bord Power BI", "Préparation et structuration de données", "Automatisation du reporting", "Applications IA sur mesure"],
  },
  {
    icon: ShieldCheck,
    title: "Points forts",
    items: ["Expérience terrain en collectivité, start-up et club pro", "Outils documentés et transmis", "Langage clair, sans jargon", "Rapidité d’exécution grâce à l’IA"],
  },
  {
    icon: Zap,
    title: "Ce que vous obtenez",
    items: ["Moins de copier-coller chaque mois", "Des chiffres fiables et à jour", "Une lecture de l’activité en un écran", "Un outil que vos équipes utilisent seules"],
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Décisionnel",
    description: "Des indicateurs fiables, lisibles et directement utiles à la décision.",
    skills: ["Power BI", "DAX", "KPI", "Cartographie"],
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Data engineering",
    description: "Une donnée propre et structurée, de la source jusqu’au modèle d’analyse.",
    skills: ["SQL", "Python", "Power Query", "ETL"],
    icon: Database,
  },
  {
    number: "03",
    title: "Automatisation & IA",
    description: "Les tâches répétitives disparaissent, le temps revient à l’analyse.",
    skills: ["Claude Code", "Lovable", "Python", "VBA"],
    icon: Bot,
  },
];

const steps = [
  { title: "Échange gratuit", text: "30 minutes pour comprendre vos fichiers, vos usages et ce qui vous fait perdre du temps." },
  { title: "Devis clair", text: "Un périmètre, un prix ferme et un délai. Pas de surprise en cours de route." },
  { title: "Livraison accompagnée", text: "L’outil, sa documentation et une prise en main avec vos équipes." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilyes Lakhdar — Data Analyst freelance · IA & automatisation" },
      {
        name: "description",
        content:
          "Data Analyst freelance à Grenoble : préparation de données, dashboards Power BI, automatisation du reporting et applications IA pour PME et organismes.",
      },
      { property: "og:title", content: "Ilyes Lakhdar — Data Analyst freelance · IA & automatisation" },
      {
        property: "og:description",
        content: "Dashboards Power BI, automatisation du reporting et applications IA pour transformer vos chiffres en décisions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Ilyes Lakhdar — Data Analyst freelance : Power BI, automatisation du reporting et applications IA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.slice(0, 2);
  const others = projects.slice(2);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SiteHeader />

      <main>
        <section id="accueil" className="relative isolate overflow-hidden border-b border-border pt-16">
          <img
            src={dataSystemsVisual}
            alt=""
            width={1600}
            height={1000}
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-65"
          />
          <div className="hero-shade absolute inset-0 -z-10" />
          <div className="hero-grid absolute inset-0 -z-10 opacity-50" />

          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
            <div className="flex items-center justify-between border-b border-border/70 pb-5 text-xs text-muted-foreground">
              <span className="flex items-center gap-2 uppercase tracking-widest">
                <span className="size-2 animate-pulse rounded-full bg-success" /> Disponible pour de nouvelles missions
              </span>
              <span className="hidden sm:inline">Grenoble · France · à distance</span>
            </div>

            <div className="max-w-4xl py-14 sm:py-20">
              <div className="mb-5 flex items-center gap-3 text-sm text-primary">
                <span className="h-px w-9 bg-primary" />
                Data Analyst freelance · IA & automatisation
              </div>
              <h1 className="font-display text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-8xl">
                Vos données,
                <br />
                <span className="text-primary">enfin utiles.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                J’exploite l’IA pour supprimer vos tâches répétitives et développer vos outils de données
                (tableaux de bord, reporting automatisé, applications IA) en quelques jours, pas en quelques mois.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#prestations"
                  className="inline-flex h-11 items-center gap-2 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong"
                >
                  Voir les prestations <ArrowDown className="size-4" aria-hidden="true" />
                </a>
                <a
                  href="#projets"
                  className="inline-flex h-11 items-center gap-2 border border-border bg-surface/60 px-5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  Voir mes projets <ArrowDown className="size-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center gap-2 border border-border bg-surface/60 px-5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  <Mail className="size-4" aria-hidden="true" /> Me contacter
                </a>
              </div>
            </div>

            <dl className="grid gap-px border border-border/70 bg-border/70 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.value} className="bg-background/80 p-5 backdrop-blur">
                  <dt className="font-display text-3xl font-semibold text-primary">{point.value}</dt>
                  <dd className="mt-2 text-sm leading-6 text-muted-foreground">{point.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby="en-bref" className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <h2 id="en-bref" className="font-mono text-xs uppercase text-primary">Mon profil en 30 secondes</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {atAGlance.map((block) => {
                const Icon = block.icon;
                return (
                  <div key={block.title} className="border border-border bg-surface p-6">
                    <div className="flex items-center gap-3">
                      <Icon className="size-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
                      <h3 className="font-display text-xl font-semibold">{block.title}</h3>
                    </div>
                    <ul className="mt-5 space-y-2.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-foreground/85">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Formation : BUT Science des Données, IUT2 Grenoble, parcours Visualisation et conception d’outils décisionnels (VCOD).
            </p>
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

            <div className="project-card-featured mt-4 grid gap-6 border border-primary/40 p-7 sm:p-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10">
              <Sparkles className="size-8 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3 className="font-display text-2xl font-semibold">L’IA comme accélérateur, pas comme gadget.</h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                  J’utilise Claude Code et Lovable pour écrire scripts, requêtes et applications beaucoup plus vite,
                  puis je vérifie chaque chiffre avec une méthode de data analyst. Résultat : un prototype en quelques jours,
                  un outil fiable à la livraison. Ce portfolio a lui-même été construit ainsi.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projets" className="scroll-mt-16 border-b border-border py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              number="02"
              eyebrow="Expériences & projets"
              title="Des résultats concrets, sur des données réelles."
              text="Chaque carte ouvre une fiche de lecture rapide : contexte, ce que j’ai fait, résultats et outils."
            />

            <div className="mt-14 space-y-4">
              {featured.map((project) => <FeaturedProject key={project.slug} project={project} />)}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>

            <div className="mt-8 flex justify-end">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-strong"
              >
                Parcours complet sur LinkedIn <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="outils" className="scroll-mt-16 border-b border-border bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              number="03"
              eyebrow="Outils maîtrisés"
              title="Les bons outils, au service de votre besoin."
              text="Chaque outil ci-dessous a été utilisé sur au moins un projet présenté plus haut."
            />

            <div className="mt-14 space-y-10">
              {toolGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-mono text-xs uppercase text-muted-foreground">{group.title}</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {group.tools.map((tool) => (
                      <div key={tool.name} className="flex items-center gap-4 border border-border bg-background p-4 transition-colors hover:border-primary/60">
                        <span
                          className="grid size-11 shrink-0 place-items-center rounded font-mono text-xs font-bold text-white"
                          style={{ backgroundColor: tool.color }}
                          aria-hidden="true"
                        >
                          {tool.monogram}
                        </span>
                        <div>
                          <p className="text-sm font-semibold">{tool.name}</p>
                          <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{tool.usage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="prestations" className="scroll-mt-16 border-b border-border py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              number="04"
              eyebrow="Prestations"
              title="Trois prestations. Un objectif : vous faire gagner du temps."
              text="Chaque mission commence par vos usages et vos contraintes. La solution reste claire, maintenable et adaptée à votre niveau d’autonomie."
            />

            <div className="mt-14 grid gap-4 lg:grid-cols-3">
              {offers.map((offer) => (
                <article key={offer.letter} className="group flex flex-col border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/60 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className={`grid size-9 place-items-center rounded-full font-mono text-sm font-bold ${offer.accentClass}`}>
                      {offer.letter}
                    </span>
                    <span className="font-display text-lg font-semibold">{offer.price}</span>
                  </div>
                  <p className="mt-8 font-mono text-xs uppercase text-muted-foreground">Prestation {offer.letter} · {offer.name}</p>
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
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-strong"
                    >
                      Demander un devis <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              Tarifs indicatifs pour un périmètre simple. Le prix final est fixé dans le devis, après un premier échange gratuit.
            </p>

            <ol className="mt-12 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title} className="border-t border-primary/60 pt-5">
                  <span className="font-mono text-xs text-primary">Étape {index + 1}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="referents" className="scroll-mt-16 border-b border-border bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              number="05"
              eyebrow="Référents"
              title="Ils ont encadré mon travail."
              text="Ces personnes peuvent témoigner de ma manière de travailler et des résultats obtenus."
            />

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {referents.map((referent) => (
                <article key={referent.name} className="flex flex-col border border-border bg-background p-6 sm:p-7">
                  <span className="grid size-12 place-items-center rounded-full bg-primary/15 font-display text-lg font-semibold text-primary" aria-hidden="true">
                    {referent.name.split(" ").map((part) => part[0]).join("")}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold">{referent.name}</h3>
                  <p className="mt-1 text-sm text-foreground/85">{referent.role}</p>
                  <p className="text-sm text-muted-foreground">{referent.organization}</p>
                  <p className="mt-4 font-mono text-xs uppercase text-primary">{referent.relation}</p>
                  {referent.email ? (
                    <a
                      href={`mailto:${referent.email}`}
                      className="mt-auto inline-flex items-center gap-2 break-all pt-6 text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      <Mail className="size-4 shrink-0" aria-hidden="true" /> {referent.email}
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="mt-auto inline-flex items-center gap-2 pt-6 text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      <Mail className="size-4 shrink-0" aria-hidden="true" /> Coordonnées sur demande
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32">
          <div className="cta-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[2fr_3fr] lg:px-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase text-muted-foreground">
                <span className="size-2 rounded-full bg-success" /> Disponible pour échanger
              </span>
              <h2 className="mt-7 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Un reporting vous prend trop de temps ?
                <span className="block text-primary">Parlons-en simplement.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
                Présentez-moi votre fonctionnement actuel. Je vous réponds avec une première piste concrète et adaptée à votre contexte.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 transition-colors hover:text-primary">
                  <Mail className="size-4 text-primary" aria-hidden="true" /> {contactEmail}
                </a>
                <a href={linkedInUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition-colors hover:text-primary">
                  <Linkedin className="size-4 text-primary" aria-hidden="true" /> Échanger sur LinkedIn
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Link
      to="/projets/$slug"
      params={{ slug: project.slug }}
      className="project-card project-card-featured group relative grid overflow-hidden border border-border lg:grid-cols-[5fr_6fr]"
    >
      <div className="relative flex flex-col p-6 sm:p-8">
        <p className="font-mono text-xs text-primary">{project.category}{project.period ? ` · ${project.period}` : ""}</p>
        <p className="mt-6 text-xs font-semibold uppercase text-muted-foreground">{project.organization}</p>
        <h3 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{project.title}</h3>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.summary}</p>
        <dl className="mt-6 grid grid-cols-2 gap-4">
          {project.figures.slice(0, 4).map((figure) => (
            <div key={figure.label}>
              <dt className="font-display text-2xl font-semibold text-primary">{figure.value}</dt>
              <dd className="text-xs text-muted-foreground">{figure.label}</dd>
            </div>
          ))}
        </dl>
        <Tags tags={project.tags} />
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Lire la fiche projet <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
      <div className="relative border-t border-border p-3 lg:border-l lg:border-t-0">
        <MediaFrame media={project.cover} aspect="aspect-[16/10] lg:aspect-auto lg:h-full" fit="object-contain" />
      </div>
    </Link>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projets/$slug"
      params={{ slug: project.slug }}
      className="project-card group relative flex flex-col overflow-hidden border border-border transition-colors hover:border-primary/60"
    >
      <div className="border-b border-border">
        <MediaFrame media={project.cover} aspect="aspect-[16/9]" />
      </div>
      <div className="relative flex flex-1 flex-col p-6">
        <p className="font-mono text-xs text-primary">{project.category}{project.period ? ` · ${project.period}` : ""}</p>
        <p className="mt-4 text-xs font-semibold uppercase text-muted-foreground">{project.organization}</p>
        <h3 className="mt-2 font-display text-xl font-semibold">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.summary}</p>
        <Tags tags={project.tags} />
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
          Lire la fiche <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => <span key={tag} className="border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-foreground/75">{tag}</span>)}
    </div>
  );
}
