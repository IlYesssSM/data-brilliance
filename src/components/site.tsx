import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, ImageIcon, Linkedin, Loader2, Mail, PlayCircle, Send } from "lucide-react";

import { contactEmail, linkedInUrl, type Media } from "@/data/portfolio";

const navItems = [
  { href: "/#expertise", label: "Expertise" },
  { href: "/#projets", label: "Projets" },
  { href: "/#outils", label: "Outils" },
  { href: "/#prestations", label: "Prestations" },
  { href: "/#referents", label: "Référents" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link to="/" hash="accueil" className="group flex items-center gap-3" aria-label="Retour à l’accueil">
          <span className="grid size-8 place-items-center border border-primary/70 bg-primary/10 font-display text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            IL
          </span>
          <span className="hidden text-sm font-semibold sm:inline">Ilyes Lakhdar</span>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-medium text-muted-foreground lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
          <a href="/#contact" className="border-b border-primary/70 pb-0.5 text-foreground transition-colors hover:text-primary">
            Me contacter
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            className="inline-flex h-9 items-center gap-2 border border-border px-3 text-xs font-semibold transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            <Mail className="size-3.5" aria-hidden="true" /> Contact
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-2 border border-primary/70 bg-primary/10 px-3 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Linkedin className="size-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">LinkedIn</span>
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>© 2026 Ilyes Lakhdar · Data Analyst freelance · IA & automatisation</p>
        <div className="flex flex-wrap items-center gap-5">
          <span>Grenoble, France</span>
          <a href={`mailto:${contactEmail}`} className="transition-colors hover:text-primary">{contactEmail}</a>
          <a href={linkedInUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export function SectionHeading({ number, eyebrow, title, text }: { number: string; eyebrow: string; title: string; text: string }) {
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

const isVideoFile = (url: string) => /\.(mp4|webm)$/i.test(url);

/** Image, vidéo, ou emplacement vide [ … ] quand le média n’est pas encore fourni. */
export function MediaFrame({ media, className = "", aspect = "aspect-video", fit = "object-cover" }: {
  media: Media;
  className?: string;
  aspect?: string;
  fit?: "object-cover" | "object-contain";
}) {
  if (media.video) {
    return isVideoFile(media.video) ? (
      <video src={media.video} controls preload="metadata" className={`${aspect} w-full bg-black ${className}`} aria-label={media.alt} />
    ) : (
      <iframe src={media.video} title={media.alt} allowFullScreen className={`${aspect} w-full border-0 ${className}`} />
    );
  }
  if (media.src) {
    return <img src={media.src} alt={media.alt} loading="lazy" className={`${aspect} w-full ${fit} ${fit === "object-cover" ? "bg-white object-top" : "object-center"} ${className}`} />;
  }
  const isVideo = /vidéo/i.test(media.caption);
  const Icon = isVideo ? PlayCircle : ImageIcon;
  return (
    <div className={`media-placeholder ${aspect} grid w-full place-items-center border border-dashed border-border p-4 text-center ${className}`}>
      <div>
        <Icon className="mx-auto size-6 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
        <p className="mt-2 font-mono text-xs text-muted-foreground">[ {media.caption} ]</p>
      </div>
    </div>
  );
}

const subjects = [
  "Prestation A · Préparation de données",
  "Prestation B · Dashboard",
  "Prestation C · Automatisation",
  "Opportunité de recrutement",
  "Autre demande",
];

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      // FormSubmit transmet le message par e-mail, sans serveur ni clé d’API.
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `Portfolio · ${String(data["sujet"] ?? "Nouveau message")}`,
          _template: "table",
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "mt-2 w-full border border-input bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-background p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-xs font-semibold uppercase text-muted-foreground">
          Nom *
          <input name="nom" required autoComplete="name" className={fieldClass} placeholder="Votre nom" />
        </label>
        <label className="text-xs font-semibold uppercase text-muted-foreground">
          E-mail *
          <input name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="vous@entreprise.fr" />
        </label>
        <label className="text-xs font-semibold uppercase text-muted-foreground">
          Entreprise / structure
          <input name="entreprise" autoComplete="organization" className={fieldClass} placeholder="Facultatif" />
        </label>
        <label className="text-xs font-semibold uppercase text-muted-foreground">
          Objet *
          <select name="sujet" required defaultValue="" className={fieldClass}>
            <option value="" disabled>Choisir…</option>
            {subjects.map((subject) => <option key={subject}>{subject}</option>)}
          </select>
        </label>
      </div>
      <label className="mt-5 block text-xs font-semibold uppercase text-muted-foreground">
        Message *
        <textarea
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="Décrivez votre besoin : vos fichiers actuels, ce qui vous prend du temps, ce que vous aimeriez suivre…"
        />
      </label>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center gap-2 bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong disabled:opacity-60"
        >
          {status === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
          Envoyer le message
        </button>
        <p className="text-xs leading-5 text-muted-foreground" aria-live="polite">
          {status === "sent" && <span className="text-success">Merci, votre message est bien parti. Je vous réponds sous 48 h.</span>}
          {status === "error" && (
            <span className="text-destructive">
              L’envoi a échoué. Écrivez-moi directement à{" "}
              <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a>.
            </span>
          )}
          {(status === "idle" || status === "sending") && "Réponse sous 48 h · premier échange gratuit et sans engagement."}
        </p>
      </div>
    </form>
  );
}
