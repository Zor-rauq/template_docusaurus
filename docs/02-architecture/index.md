---
id: architecture-index
title: Architecture
sidebar_position: 1
slug: /architecture/
---

# Architecture

Objectif : **expliquer comment un système est construit**. Cette famille regroupe les schémas,
diagrammes et choix techniques qui documentent l'organisation d'un projet ou d'un service.

Une approche courante et recommandée est le [modèle C4](https://c4model.com/) (Contexte,
Conteneurs, Composants, Code), qui permet de zoomer progressivement du système global jusqu'au
détail d'implémentation.

## Contenu de cette section

- [Modèle de schéma d'architecture](./schema-architecture) — à dupliquer pour documenter
  l'architecture d'un projet ou d'un composant.

## Bonnes pratiques

- Préférer des diagrammes **as code** (ex. [Mermaid](https://mermaid.js.org/), intégré nativement
  dans Docusaurus) pour que les schémas restent versionnés et diffables comme du texte.
- Documenter aussi les **limites connues** et les **choix non retenus**, pas seulement la solution
  finale (cf. [Historique](/docs/historique/) pour les décisions formelles / ADR).
