import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Mail } from "lucide-react";

import { MediaFrame, SiteFooter, SiteHeader } from "@/components/site";
import { getProject, projects } from "@/data/portfolio";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/projets/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    if (!project) return { meta: [{ title: "Projet introuvable — Ilyes Lakhdar" }] };
    const title = `${project.title} — Ilyes Lakhdar, Data Analyst`;
    const image = project.cover.src ? `${SITE_URL}${project.cover.src}` : OG_IMAGE;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: image },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const media = [project.cover, ...project.gallery];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />

      <main className="pt-16">
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
            <Link to="/" hash="projets" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary">
              <ArrowLeft className="size-4" aria-hidden="true" /> Tous les projets
            </Link>

            <div className="mt-10 flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase text-primary">{project.category}</p>
                <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">{project.title}</h1>
              </div>
              {project.logo && (
                <div className="hidden w-24 shrink-0 sm:block">
                  <MediaFrame media={project.logo} aspect="aspect-square" fit="object-contain" className="rounded bg-white p-2" />
                </div>
              )}
            </div>

            <dl className={`mt-8 grid gap-px border border-border bg-border ${project.period ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
              <Fact label="Structure" value={project.organization} />
              <Fact label="Rôle" value={project.role} />
              {project.period && <Fact label="Période" value={project.period} />}
            </dl>

            <p className="mt-8 text-lg leading-8 text-foreground/90">{project.summary}</p>

            {project.figures.length > 0 && (
              <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {project.figures.map((figure) => (
                  <div key={figure.label} className="border-l-2 border-primary pl-4">
                    <dt className="font-display text-3xl font-semibold text-primary">{figure.value}</dt>
                    <dd className="mt-1 text-xs leading-5 text-muted-foreground">{figure.label}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-2">
            <div>
              <h2 className="font-mono text-xs uppercase text-primary">Le contexte</h2>
              <p className="mt-4 text-sm leading-7 text-foreground/85">{project.context}</p>

              <h2 className="mt-10 font-mono text-xs uppercase text-primary">Résultats</h2>
              <ul className="mt-4 space-y-3">
                {project.results.map((result) => (
                  <li key={result} className="flex gap-3 text-sm leading-6 text-foreground/85">
                    <Check className="mt-1 size-4 shrink-0 text-success" aria-hidden="true" /> {result}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase text-primary">Ce que j’ai fait</h2>
              <ol className="mt-4 space-y-3">
                {project.actions.map((action, i) => (
                  <li key={action} className="flex gap-3 text-sm leading-6 text-foreground/85">
                    <span className="font-mono text-xs leading-6 text-muted-foreground">{String(i + 1).padStart(2, "0")}</span> {action}
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-border bg-background px-2.5 py-1 text-xs text-foreground/80">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
            <h2 className="font-mono text-xs uppercase text-primary">En images</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {media.map((item, i) => (
                <figure key={`${item.caption}-${i}`} className={i === 0 ? "sm:col-span-2" : ""}>
                  <div className="overflow-hidden border border-border">
                    <MediaFrame media={item} aspect={i === 0 ? "aspect-[16/9]" : "aspect-[16/10]"} fit="object-contain" />
                  </div>
                  {(item.src || item.video) && <figcaption className="mt-2 text-xs text-muted-foreground">{item.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface">
          <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
            <div className="project-card-featured border border-primary/40 p-6 sm:p-8">
              <h2 className="font-mono text-xs uppercase text-primary">Ce que ce projet prouve</h2>
              <p className="mt-3 font-display text-2xl font-semibold leading-snug">{project.proof}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/"
                  hash="contact"
                  className="inline-flex h-11 items-center gap-2 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong"
                >
                  <Mail className="size-4" aria-hidden="true" /> Me contacter
                </Link>
                <Link
                  to="/"
                  hash="prestations"
                  className="inline-flex h-11 items-center gap-2 border border-border px-5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  Voir les prestations
                </Link>
              </div>
            </div>

            {next && next.slug !== project.slug && (
              <Link
                to="/projets/$slug"
                params={{ slug: next.slug }}
                className="group mt-8 flex items-center justify-between border-t border-border pt-6"
              >
                <div>
                  <p className="text-xs text-muted-foreground">Projet suivant</p>
                  <p className="mt-1 font-display text-xl font-semibold transition-colors group-hover:text-primary">{next.title}</p>
                </div>
                <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background p-4">
      <dt className="font-mono text-[11px] uppercase text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-sm font-medium">{value}</dd>
    </div>
  );
}
