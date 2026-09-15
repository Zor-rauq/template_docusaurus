---
title: "Modèle : postmortem"
sidebar_position: 3
---

# 🔎 Postmortem — [Titre de l'incident]

> Modèle à dupliquer après un incident. Analyse factuelle, *blameless* (centrée sur le système,
> pas sur les personnes).

- **Date de l'incident** : AAAA-MM-JJ
- **Durée** : ...
- **Sévérité** : `mineure` | `majeure` | `critique`
- **Rédigé par** : ...

## Résumé

En 2-3 phrases : ce qui s'est passé et l'impact observé.

## Impact

Qui/quoi a été affecté, et pendant combien de temps.

## Chronologie

| Heure | Événement |
|---|---|
| HH:MM | Détection / déclenchement |
| HH:MM | Action entreprise |
| HH:MM | Résolution |

## Cause racine

Explication technique de la cause profonde (pas seulement le symptôme immédiat).

## Actions correctives

- [ ] Action à mener pour éviter la récurrence.
- [ ] Action de suivi / amélioration de la détection.

## Leçons apprises

Ce que cet incident a permis de comprendre ou d'améliorer.
