---
id: intro
title: Introduction
sidebar_position: 1
---

# Documentation technique — Docs as Code

Bienvenue sur ce site de documentation, dont l'objectif est de **tracer les informations et les
technologies découvertes au fil des journées de travail**, selon l'approche **Docs as Code**.

## Pourquoi Docs as Code ?

La documentation technique est traitée comme du code source :

- **Versionnée** avec Git (historique, blâme, branches).
- **Rédigée en Markdown**, un format simple et durable.
- **Relue** via des Pull Requests, comme n'importe quel changement de code.
- **Publiée automatiquement** par une CI/CD vers un site statique (ce site, généré avec
  [Docusaurus](https://docusaurus.io/)).

> Docs-as-Code pour la documentation technique, Wiki (Notion, Confluence...) pour la documentation
> organisationnelle. — [Guide de Stéphane Robert](https://blog.stephane-robert.info/docs/documenter/)

## Par où commencer ?

La section [Prise en main](/docs/onboarding/) regroupe les parcours d'onboarding : des guides pas
à pas qui mènent d'une machine vierge à un environnement fonctionnel. C'est le point d'entrée
pour découvrir un environnement ; les cinq familles ci-dessous servent ensuite de référence au
quotidien.

## Structure en 5 familles

Ce site reprend la structuration en 5 familles proposée par le guide de Stéphane Robert sur la
documentation technique :

| Famille | Objectif | Exemples |
|---|---|---|
| [Cartographie](/docs/cartographie/) | Inventorier ce qui existe | Services, outils, technologies |
| [Architecture](/docs/architecture/) | Expliquer comment c'est construit | Schémas, ADR, C4 |
| [Procédures](/docs/procedures/) | Décrire comment agir | Runbooks, checklists |
| [Référentiel](/docs/referentiel/) | Centraliser les conventions | Contacts, normes, glossaire |
| [Historique](/docs/historique/) | Garder la trace des décisions | Décisions, incidents, postmortems |

## Et le Journal ?

Le [Journal](/blog) (section blog) sert de carnet de bord chronologique : chaque découverte, note
ou apprentissage du jour peut y être consigné rapidement, avant d'être **consolidé** — si besoin —
dans l'une des 5 familles ci-dessus (par exemple : une note de journal sur un nouvel outil devient
une fiche dans *Cartographie*, une erreur résolue devient une entrée dans *Procédures* ou
*Historique*).

## Comment contribuer

1. Créer une branche.
2. Ajouter ou modifier un fichier Markdown dans `docs/` (ou un billet dans `blog/`).
3. Ouvrir une Pull Request pour relecture.
4. Fusionner : le site est republié automatiquement.

```bash
npm install
npm start   # serveur de développement local (http://localhost:3000)
```
