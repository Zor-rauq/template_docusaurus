# template_docusaurus

Sample [Docusaurus](https://docusaurus.io/) pour la traçabilité des informations et des
technologies découvertes au fil des journées de travail, selon l'approche **Docs as Code**.

La structure de documentation reprend les **5 familles** décrites dans le
[guide de Stéphane Robert sur la documentation technique](https://blog.stephane-robert.info/docs/documenter/) :

- **Cartographie** — inventaire des technologies, outils, services découverts.
- **Architecture** — schémas et choix techniques (diagrammes [Mermaid](https://mermaid.js.org/)).
- **Procédures** — runbooks et checklists.
- **Référentiel** — conventions, glossaire.
- **Historique** — ADR (Architecture Decision Records) et postmortems.

Un **Journal** (section blog) complète l'ensemble comme carnet de bord chronologique pour les
notes rapides du quotidien.

Projet en **TypeScript**, catégories de sidebar déclarées en **YAML** (`_category_.yml`).

## Démarrage

Prérequis : [Node.js](https://nodejs.org/) ≥ 20.

```bash
npm install
npm start
```

Le site est alors disponible sur <http://localhost:3000>.

## Build & vérification des types

```bash
npm run typecheck   # vérification TypeScript (tsc)
npm run build        # génère la version statique du site dans build/
```

## Structure

```
docs/
├── intro.md                 # page d'accueil de la documentation
├── 01-cartographie/
├── 02-architecture/
├── 03-procedures/
├── 04-referentiel/
└── 05-historique/
blog/                         # Journal (notes chronologiques)
```

Chaque famille contient une page d'index expliquant son rôle, ainsi qu'un ou plusieurs modèles
(`fiche-technologie`, `runbook`, `checklist`, `adr`, `postmortem`...) à dupliquer.

## Déploiement (GitHub Pages)

Le site est publié automatiquement sur GitHub Pages via GitHub Actions
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) à chaque push sur `main` :
build + typecheck, puis publication de `build/` sur Pages.

Un workflow [ci.yml](.github/workflows/ci.yml) valide en plus le build sur chaque Pull Request,
dans l'esprit **Docs as Code** (revue avant fusion).

**Configuration one-shot côté GitHub** (à faire une seule fois, avant le premier push) :

1. Repo → **Settings → Pages → Build and deployment → Source** : sélectionner **GitHub Actions**.
2. Pousser sur `main` : le site est alors publié sur
   `https://Zor-rauq.github.io/template_docusaurus/`.

Si le repo ou l'organisation changent, mettre à jour `url`, `baseUrl`, `organizationName` et
`projectName` dans [docusaurus.config.ts](docusaurus.config.ts).
