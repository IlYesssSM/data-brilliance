# Ilyes Lakhdar — Portfolio Data Analyst freelance

Site vitrine de mon activité de Data Analyst freelance à Grenoble : dashboards Power BI, automatisation du reporting et préparation des données.

**Profil LinkedIn :** [ilyes-lakhdar](https://www.linkedin.com/in/ilyes-lakhdar-71638b26a/)

## Contenu du site

| Section | Contenu |
|---|---|
| Accueil | Spécialisation, disponibilité, message personnel |
| Expertise | Décisionnel, data engineering, automatisation & IA |
| Parcours | Expériences et projets (Ville de Grenoble, BUT Science des Données…) |
| Offres | A · Dashboard Power BI — B · Automatisation du reporting — C · Préparation des données |
| Contact | Prise de contact via LinkedIn |

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
│   └── index.tsx      # Page unique du portfolio (sections + contenus)
├── lib/site.ts        # URL publique du site (utilisée pour l'image de partage)
├── assets/            # Visuel de l'en-tête
└── styles.css         # Thème (couleurs, typographies, effets)
public/
└── og-image.jpg       # Image d'aperçu pour LinkedIn et les réseaux sociaux
```

Les contenus (compétences, offres, projets) sont définis sous forme de tableaux en haut de `src/routes/index.tsx` : il suffit de les modifier pour mettre à jour le site.

## Configuration

Renseigner l'URL publique du site dans `src/lib/site.ts` (`SITE_URL`) pour que l'image d'aperçu s'affiche quand le lien est partagé sur LinkedIn.
