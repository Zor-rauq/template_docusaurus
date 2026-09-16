---
id: projet-demo-index
title: Vue d'ensemble
sidebar_position: 1
slug: /onboarding/projet-demo/
description: Guide de prise en main de l'environnement de développement du Projet Démo.
---

# Prise en main — Projet Démo

:::info Contexte d'exemple

Le **Projet Démo** est un projet fictif : une API de facturation (Node.js + PostgreSQL,
orchestrée avec Docker Compose). Il sert de support pour montrer la structure d'un guide
d'onboarding — remplacer son contenu par un environnement réel.

:::

## Objectif

À la fin de ce parcours, l'environnement de développement du Projet Démo tourne en local,
les tests passent, et une première modification peut être proposée en Pull Request.

## Public

Toute personne rejoignant le projet, sans connaissance préalable de son infrastructure.
Des bases en ligne de commande et en Git sont attendues.

## Durée

**Environ 2 h**, dont ~30 min d'attente (téléchargements, création des accès).

Les accès de l'[étape 2](./02-acces-et-comptes.md) peuvent demander jusqu'à 48 h : les demander
**en premier**, puis dérouler le reste du guide pendant l'attente.

## Le parcours

| # | Étape | Durée | Résultat |
|---|---|---|---|
| 1 | [Prérequis](./01-prerequis.md) | 5 min | Poste conforme, droits suffisants |
| 2 | [Accès et comptes](./02-acces-et-comptes.md) | 15 min | Demandes envoyées |
| 3 | [Installation des outils](./03-installation-outils.mdx) | 30 min | Git, Node et Docker installés |
| 4 | [Configuration du projet](./04-configuration-projet.md) | 20 min | Dépôt cloné et configuré |
| 5 | [Premier lancement](./05-premier-lancement.md) | 20 min | API accessible en local |
| 6 | [Validation](./06-validation.md) | 15 min | Environnement vérifié |
| 7 | [Dépannage](./07-depannage.md) | — | Solutions aux blocages fréquents |

## Ce dont on a besoin dès maintenant

- Un poste avec les droits administrateur.
- Un compte GitHub rattaché à l'organisation.
- Environ 15 Go d'espace disque libre.

## Pour aller plus loin

Une fois autonome, ces documents prennent le relais :

- [Architecture](/docs/architecture/) — comment le système est construit.
- [Procédures](/docs/procedures/) — les opérations courantes (déploiement, restauration).
- [Référentiel](/docs/referentiel/) — les conventions à respecter.

Prêt ? Commencer par les [prérequis](./01-prerequis.md).
