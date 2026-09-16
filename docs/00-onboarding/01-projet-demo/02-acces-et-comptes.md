---
title: 2. Accès et comptes
description: Demander les accès nécessaires dès le début, car leur obtention prend du temps.
---

# 2. Accès et comptes

Ces demandes sont à envoyer **en premier** : elles dépendent de tiers et conditionnent la suite
du parcours.

## Accès à demander

| Accès | À demander à | Délai | Nécessaire pour |
|---|---|---|---|
| Organisation GitHub | Équipe plateforme | ~2 h | [Étape 4](./04-configuration-projet.md) |
| VPN | Support IT | jusqu'à 48 h | Base de recette (hors parcours) |
| Accès registre `ghcr.io` | Équipe plateforme | ~2 h | [Étape 5](./05-premier-lancement.md) |
| Canal de discussion projet | N'importe quel membre | immédiat | Poser des questions |

:::tip Envoyer les demandes puis continuer

Seul l'accès GitHub bloque la suite du guide. Une fois les demandes envoyées, poursuivre avec
l'[installation des outils](./03-installation-outils.mdx) pendant l'attente.

:::

## Clé SSH pour GitHub

Le dépôt se clone en SSH. Générer une clé si le poste n'en a pas encore :

```bash
ssh-keygen -t ed25519 -C "prenom.nom@exemple.fr"
```

Afficher la clé publique, puis l'ajouter dans GitHub sous *Settings → SSH and GPG keys* :

```bash
cat ~/.ssh/id_ed25519.pub
```

Vérifier que l'authentification fonctionne :

```bash
ssh -T git@github.com
```

La réponse attendue contient `successfully authenticated`.

:::danger La clé privée ne se partage jamais

Seul le fichier `.pub` est copié dans GitHub. Le fichier sans extension (`id_ed25519`) reste sur
le poste et n'est jamais envoyé, ni commité, ni collé dans un message.

:::

## À la fin de cette étape

- [ ] Les demandes d'accès sont envoyées.
- [ ] L'appartenance à l'organisation GitHub est confirmée.
- [ ] `ssh -T git@github.com` répond `successfully authenticated`.

Étape suivante : [Installation des outils](./03-installation-outils.mdx).
