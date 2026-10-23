# Ilyes Lakhdar — Portfolio Data Analyst freelance

Site vitrine de mon activité de Data Analyst freelance à Grenoble : dashboards Power BI, automatisation du reporting et préparation des données.

**Profil LinkedIn :** [ilyes-lakhdar](https://www.linkedin.com/in/ilyes-lakhdar-71638b26a/)

## Contenu du site

| Section | Contenu |
|---|---|
| Accueil | Positionnement (Data Analyst · IA & automatisation), chiffres clés |
| Profil en 30 secondes | Spécialités, points forts, bénéfices client |
| Expertise | Décisionnel, data engineering, automatisation & IA |
| Projets | 8 projets, chacun avec sa fiche détaillée (`/projets/<slug>`) |
| Outils | Power BI, Excel, Python, SQL, R, Claude Code, Lovable… |
| Prestations | A · Préparation de données — B · Dashboard — C · Automatisation |
| Référents | Tuteurs et encadrants joignables par e-mail |
| Contact | Formulaire (envoi par e-mail via FormSubmit) + LinkedIn |

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19, SSR) + TypeScript
- Tailwind CSS v4
- Icônes [Lucide](https://lucide.dev)
- Déploiement Cloudflare via Nitro, édition visuelle avec [Lovable](https://lovable.dev)

## Lancer le projet en local

Prérequis : Node.js 22+ ou [Bun](https://bun.sh).

```sh
git clone https://github.com/IlYesssSM/data-brilliance.git
cd data-brilliance
bun install        # ou npm install
bun run dev        # ou npm run dev
```

| Commande | Rôle |
|---|---|
| `bun run dev` | Serveur de développement |
| `bun run build` | Build de production |
| `bun run preview` | Prévisualiser le build |
| `bun run lint` | Vérification ESLint / Prettier |

## Structure

```
src/
├── routes/
│   ├── __root.tsx     # Layout HTML, métadonnées globales, pages 404 / erreur
│   ├── index.tsx      # Page d’accueil (sections)
│   └── projets/$slug.tsx  # Fiche détaillée d’un projet
├── components/site.tsx  # En-tête, pied de page, médias, formulaire de contact
├── data/portfolio.ts    # Tous les contenus du site
├── lib/site.ts        # URL publique du site (utilisée pour l'image de partage)
├── assets/            # Visuel de l'en-tête
└── styles.css         # Thème (couleurs, typographies, effets)
public/
├── og-image.jpg       # Image d'aperçu pour LinkedIn et les réseaux sociaux
└── projets/           # Captures des projets
```

Les contenus (projets, outils, prestations, référents) sont centralisés dans `src/data/portfolio.ts`. Pour ajouter une capture ou une vidéo, déposer le fichier dans `public/projets/` et renseigner `src` ou `video` sur le média concerné : tant qu’un média n’a pas de source, le site affiche un emplacement vide `[ … ]`.

## Formulaire de contact

Le formulaire envoie les messages à l’adresse définie dans `contactEmail` via [FormSubmit](https://formsubmit.co). Au tout premier envoi, FormSubmit envoie un e-mail de confirmation à cette adresse : il faut cliquer sur le lien d’activation une seule fois.

## Configuration

Renseigner l'URL publique du site dans `src/lib/site.ts` (`SITE_URL`) pour que l'image d'aperçu s'affiche quand le lien est partagé sur LinkedIn.
