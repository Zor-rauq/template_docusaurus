---
title: 7. Dépannage
description: Erreurs fréquentes rencontrées pendant la prise en main et leurs solutions.
---

# 7. Dépannage

## Table de diagnostic rapide

| Symptôme | Cause probable | Solution |
|---|---|---|
| `Permission denied (publickey)` | Clé SSH absente ou accès à l'organisation non accordé | [Accès et comptes](./02-acces-et-comptes.md) |
| `EADDRINUSE` au démarrage | Port 3000 déjà occupé | [Port occupé](#port-déjà-occupé) |
| `permission denied` sur `/var/run/docker.sock` | Utilisateur hors du groupe `docker` (Linux) | [Droits Docker](#droits-docker-sous-linux) |
| `ETIMEDOUT` pendant `npm ci` | Proxy d'entreprise non configuré | [Proxy](#poste-derrière-un-proxy) |
| `database "demo" does not exist` | Migrations non appliquées | Rejouer `npm run db:migrate` |
| Erreur de compilation `node-gyp` | Mauvaise version de Node.js | `nvm use` dans le dossier du projet |

## Port déjà occupé

Identifier le programme qui occupe le port :

```bash
# Linux / macOS
lsof -i :3000
```

```powershell
# Windows
netstat -ano | findstr :3000
```

Deux options : arrêter le programme concerné, ou changer `API_PORT` dans le fichier `.env`.

## Droits Docker sous Linux

Le message `permission denied while trying to connect to the Docker daemon socket` signifie que
l'utilisateur n'appartient pas au groupe `docker` :

```bash
sudo usermod -aG docker "$USER"
```

L'appartenance au groupe ne prend effet qu'après **réouverture de la session**.

## Poste derrière un proxy

npm et Docker ne lisent pas la même configuration de proxy.

Pour npm :

```bash
npm config set proxy http://proxy.exemple.fr:8080
npm config set https-proxy http://proxy.exemple.fr:8080
```

Pour Docker Desktop, renseigner le proxy dans *Settings → Resources → Proxies*.

:::warning Jamais de mot de passe dans l'URL du proxy

Une URL de proxy contenant des identifiants finit dans `~/.npmrc`, fichier lisible en clair et
parfois commité par erreur. Utiliser un proxy sans authentification, ou une variable
d'environnement gérée par l'IT.

:::

## Repartir de zéro

En dernier recours, réinitialiser complètement l'environnement local :

```bash
docker compose down -v
rm -rf node_modules
npm ci
docker compose up -d
npm run db:migrate && npm run db:seed
```

:::danger `down -v` détruit les données locales

L'option `-v` supprime les volumes Docker, donc le contenu de la base locale. C'est sans risque
pour un environnement de développement, jamais ailleurs.

:::

## Faire remonter un problème absent de cette page

1. Vérifier que le problème est reproductible depuis un environnement neuf.
2. Poser la question sur le canal du projet, avec la commande lancée et l'erreur complète.
3. Une fois la solution trouvée, l'ajouter à cette page : c'est ce qui évite au suivant de
   perdre le même temps.
