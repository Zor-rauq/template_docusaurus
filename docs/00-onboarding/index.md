---
id: onboarding-index
title: Prise en main
sidebar_position: 1
slug: /onboarding/
---

# Prise en main

Objectif : **rendre opérationnel sur un environnement**, d'une machine vierge jusqu'à un
environnement fonctionnel et vérifié, sans avoir à demander d'aide.

Cette section regroupe des **parcours d'onboarding** : des guides pas à pas, ordonnés, que l'on
suit une fois du début à la fin.

## Pourquoi une section distincte des Procédures

Les cinq familles Docs as Code répondent à la question « où est l'information ? ».
Un guide de prise en main répond à une autre question : « par où je commence ? ».

| | Runbook ([Procédures](/docs/procedures/)) | Guide de prise en main |
|---|---|---|
| **Public** | quelqu'un qui connaît déjà l'environnement | quelqu'un qui le découvre |
| **Fréquence** | répété, souvent sous pression | une seule fois, au calme |
| **Forme** | étapes autonomes, ciblées | parcours linéaire et progressif |
| **Fin** | l'opération est terminée | la personne est autonome |

Les deux se complètent : un guide de prise en main **renvoie** vers les runbooks, les fiches de
[Cartographie](/docs/cartographie/) et les schémas d'[Architecture](/docs/architecture/) plutôt
que de les recopier.

## Contenu de cette section

- [Projet Démo (exemple)](./01-projet-demo/index.md) — guide complet servant de modèle.

## Anatomie d'un guide

Un guide de prise en main se découpe toujours de la même façon :

1. **Vue d'ensemble** — objectif, public, durée, résultat attendu.
2. **Prérequis** — ce qu'il faut avoir *avant* de commencer.
3. **Accès et comptes** — ce qui doit être demandé à quelqu'un (et le délai associé).
4. **Installation des outils** — ce qui s'installe sur le poste.
5. **Configuration du projet** — récupération du code et paramétrage local.
6. **Premier lancement** — la première exécution réussie.
7. **Validation** — la checklist qui prouve que tout fonctionne.
8. **Dépannage** — les erreurs fréquentes et leur solution.

## Créer un nouveau guide

Dupliquer le dossier du guide exemple et l'adapter :

```bash
cp -r docs/00-onboarding/01-projet-demo docs/00-onboarding/02-mon-environnement
```

Puis, dans le nouveau dossier :

1. Adapter `_category_.yml` (`label`, `position`, `link.id`).
2. Adapter l'`id` et le `slug` de `index.md` (ils doivent rester uniques sur le site).
3. Renuméroter ou supprimer les étapes inutiles — les préfixes numériques des fichiers
   (`01-`, `02-`...) donnent l'ordre dans la barre latérale et disparaissent des URLs.

:::tip Un guide reste vrai s'il est rejoué

La seule façon de garder un guide d'onboarding fiable est de le **rejouer** à chaque nouvelle
arrivée, et de corriger au fil de l'eau ce qui a bloqué. Chaque question posée pendant
l'onboarding est un manque dans le guide.

:::
