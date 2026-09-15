---
id: historique-index
title: Historique
sidebar_position: 1
slug: /historique/
---

# Historique

Objectif : **garder la trace des décisions et des incidents**, pour comprendre a posteriori
*pourquoi* les choses ont été faites ainsi, et éviter de répéter les mêmes erreurs.

Deux formats principaux :

- **ADR** (*Architecture Decision Record*) : capture une décision d'architecture ou technique, son
  contexte et ses conséquences, au moment où elle est prise.
- **Postmortem** : analyse rédigée après un incident, factuelle et sans recherche de coupable
  (*blameless*), qui documente la chronologie, la cause racine et les actions correctives.

## Contenu de cette section

- [Modèle d'ADR](./adr-0001-exemple) — à dupliquer et numéroter pour chaque nouvelle décision.
- [Modèle de postmortem](./postmortem) — à dupliquer après un incident.

## Bonnes pratiques

- Une ADR n'est **jamais supprimée** : si la décision change, on crée une nouvelle ADR qui
  remplace l'ancienne (statut `remplacée par ADR-00XX`).
- Un postmortem reste factuel, centré sur le système, pas sur les personnes.
