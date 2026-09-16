---
title: 6. Validation
description: Vérifier que l'environnement est complet et faire une première contribution.
---

# 6. Validation

## Checklist d'autonomie

L'environnement est considéré comme opérationnel lorsque tous ces points sont vérifiés :

- [ ] `docker compose ps` montre les services à l'état `running`.
- [ ] `npm run dev` démarre l'API sans erreur.
- [ ] `curl http://localhost:3000/health` renvoie `"status": "ok"`.
- [ ] `npm test` passe intégralement.
- [ ] `npm run lint` ne remonte aucune erreur.
- [ ] Un commit de test est accepté par les hooks Git.

## Première contribution

Le meilleur test d'un environnement est une modification réelle, aussi petite soit-elle.

```bash
git switch -c docs/premiere-contribution
```

Modifier une ligne du `README.md` du projet, puis :

```bash
git add README.md
git commit -m "docs: corrige une coquille dans le README"
git push -u origin docs/premiere-contribution
```

Ouvrir enfin une Pull Request vers `main`. Si les hooks et la CI passent, la boucle complète
est validée : environnement local, conventions, et chaîne d'intégration.

:::tip Améliorer ce guide avec sa première PR

La contribution la plus utile à ce stade est de corriger ce guide lui-même : toute étape qui a
bloqué, toute commande qui a échoué, mérite d'y être ajoutée tant que le souvenir est frais.

:::

## Ce qu'il faut savoir faire ensuite

| Besoin | Où regarder |
|---|---|
| Comprendre l'architecture du service | [Architecture](/docs/architecture/) |
| Déployer ou restaurer | [Procédures](/docs/procedures/) |
| Respecter les conventions de code | [Référentiel](/docs/referentiel/conventions) |
| Comprendre un choix technique passé | [Historique](/docs/historique/) |
| Identifier un outil du projet | [Cartographie](/docs/cartographie/) |

## En cas de blocage

Les erreurs les plus courantes sont documentées dans [Dépannage](./07-depannage.md). Si le
problème n'y figure pas, poser la question sur le canal du projet — **et ajouter la réponse au
guide** une fois le blocage levé.
