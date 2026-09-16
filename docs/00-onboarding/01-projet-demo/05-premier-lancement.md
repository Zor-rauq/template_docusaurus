---
title: 5. Premier lancement
description: Démarrer les services et obtenir une API fonctionnelle en local.
---

# 5. Premier lancement

## Démarrer les services

La base de données et les services annexes tournent dans Docker :

```bash
docker compose up -d
```

Le premier démarrage télécharge les images et prend plusieurs minutes. Vérifier ensuite que les
conteneurs sont bien actifs :

```bash
docker compose ps
```

Les deux services attendus, à l'état `running` :

| Service | Port | Rôle |
|---|---|---|
| `postgres` | 5432 | Base de données |
| `mailpit` | 8025 | Interface de capture des e-mails |

## Préparer la base de données

Appliquer le schéma, puis charger le jeu de données de démonstration :

```bash
npm run db:migrate
npm run db:seed
```

Le jeu de données crée un compte de test : `demo@exemple.fr` / `demo`.

## Lancer l'API

```bash
npm run dev
```

La console affiche, après quelques secondes :

```text
[api] listening on http://localhost:3000
[api] environment: development
```

L'API répond alors sur `http://localhost:3000`, et l'interface de capture des e-mails sur
`http://localhost:8025`.

## Premier appel

Dans un second terminal :

```bash
curl http://localhost:3000/health
```

Réponse attendue :

```json
{"status": "ok", "database": "connected"}
```

:::warning Port déjà utilisé

L'erreur `EADDRINUSE` signifie qu'un autre programme occupe le port 3000. Changer `API_PORT` dans
le fichier `.env`, ou libérer le port — voir [Dépannage](./07-depannage.md).

:::

## Arrêter l'environnement

En fin de journée, arrêter l'API avec `Ctrl+C`, puis les conteneurs :

```bash
docker compose stop
```

`docker compose down` détruirait aussi les volumes de données, ce qui obligerait à rejouer les
migrations au prochain démarrage.

## À la fin de cette étape

- [ ] `docker compose ps` montre les services à l'état `running`.
- [ ] Les migrations et le jeu de données sont appliqués.
- [ ] `curl http://localhost:3000/health` renvoie `"status": "ok"`.

Étape suivante : [Validation](./06-validation.md).
