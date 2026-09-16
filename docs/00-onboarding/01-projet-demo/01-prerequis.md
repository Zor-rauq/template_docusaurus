---
title: 1. Prérequis
description: Vérifier que le poste est conforme avant de commencer l'installation.
---

# 1. Prérequis

Avant toute installation, vérifier que le poste remplit ces conditions. Une seule ligne non
respectée peut faire échouer l'[étape 5](./05-premier-lancement.md).

## Poste de travail

| Élément | Minimum | Recommandé |
|---|---|---|
| Système | Windows 11, macOS 13, Ubuntu 22.04 | — |
| Mémoire | 8 Go | 16 Go |
| Disque libre | 15 Go | 30 Go |
| Droits | administrateur / `sudo` | — |

:::warning Droits administrateur

L'installation de Docker exige les droits administrateur. Sans eux, faire la demande
**maintenant** : c'est le blocage le plus fréquent en cours de parcours.

:::

## Réseau

- Accès sortant HTTPS vers `github.com`, `registry.npmjs.org` et `ghcr.io`.
- Le VPN d'entreprise est nécessaire pour la base de données de recette, **pas** pour
  l'environnement local.

:::note Poste derrière un proxy

Sur un réseau d'entreprise filtrant, `npm` et Docker doivent être configurés séparément pour le
proxy. Voir [Dépannage](./07-depannage.md).

:::

## Connaissances attendues

Ce guide suppose à l'aise avec :

- la ligne de commande (naviguer, lancer une commande, lire une erreur) ;
- Git (cloner, brancher, commiter, ouvrir une Pull Request).

Les conventions de nommage des branches et des commits sont dans le
[Référentiel](/docs/referentiel/conventions).

## À la fin de cette étape

- [ ] Le poste respecte la configuration minimale.
- [ ] Les droits administrateur sont disponibles (ou demandés).
- [ ] L'accès réseau aux domaines listés fonctionne.

Étape suivante : [Accès et comptes](./02-acces-et-comptes.md).
