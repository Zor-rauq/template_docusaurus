---
title: 4. Configuration du projet
description: Cloner le dépôt et préparer la configuration locale.
---

# 4. Configuration du projet

## Cloner le dépôt

```bash
git clone git@github.com:exemple-org/projet-demo.git
cd projet-demo
```

:::note L'accès GitHub est requis ici

Si le clonage échoue avec `Permission denied (publickey)`, c'est que la clé SSH ou l'accès à
l'organisation de l'[étape 2](./02-acces-et-comptes.md) n'est pas encore effectif.

:::

## Installer les dépendances

Basculer sur la version de Node.js fixée par le dépôt, puis installer :

```bash
nvm use
npm ci
```

:::tip `npm ci` plutôt que `npm install`

`npm ci` installe exactement les versions du `package-lock.json`, sans le modifier. C'est la
commande à utiliser pour reproduire l'environnement à l'identique.

:::

## Créer le fichier d'environnement

Le projet lit sa configuration dans un fichier `.env`, absent du dépôt. Le créer à partir du
modèle fourni :

```bash
cp .env.example .env
```

Les valeurs par défaut conviennent pour le développement local :

```bash title=".env"
DATABASE_URL=postgresql://demo:demo@localhost:5432/demo
API_PORT=3000
LOG_LEVEL=debug
```

Une seule valeur doit être renseignée manuellement : le jeton d'accès au registre d'images,
obtenu à l'[étape 2](./02-acces-et-comptes.md).

```bash title=".env"
GHCR_TOKEN=coller-ici-le-jeton
```

:::danger Les secrets ne sont jamais commités

Le fichier `.env` est listé dans `.gitignore` : il ne doit jamais apparaître dans un commit.
Avant chaque `git add`, vérifier avec `git status` ce qui est réellement mis en index.

:::

## Activer les hooks Git

Les hooks vérifient le format des commits et lancent le linter avant chaque commit :

```bash
npm run prepare
```

Le format attendu pour les messages de commit est décrit dans le
[Référentiel](/docs/referentiel/conventions).

## À la fin de cette étape

- [ ] Le dépôt est cloné et `nvm use` sélectionne Node.js 20.
- [ ] `npm ci` s'est terminé sans erreur.
- [ ] Le fichier `.env` existe et contient le jeton du registre.
- [ ] `git status` ne montre **pas** `.env` comme fichier à commiter.

Étape suivante : [Premier lancement](./05-premier-lancement.md).
