# AGENTS.md - page-test

La page de test de WaveProm : un consultant y fait son premier changement, du lien local au lien en ligne, guidé par le tutoriel du système de l'agence.
`CLAUDE.md` est un lien symbolique vers ce fichier.
Ces consignes s'ajoutent à celles de l'agence et ne valent que dans ce dépôt.

## La mission

- La page tient en un écran : un titre de bienvenue, la mission ou la victoire, et un gros bouton, et elle tutoie le consultant, comme toi.
- Le consultant a une seule mission : te demander, avec ses mots, de changer la couleur du bouton.
- `src/app/mission.ts` dit si la mission est réussie : `missionStatus` vaut `"open"` ou `"accomplished"`.
- Avant de montrer la page à un consultant, tu remets `missionStatus` à `"open"` dans ton worktree quand il vaut `"accomplished"` : la victoire du consultant d'avant n'est pas la sienne.
- Tu lui proposes une couleur nettement différente de celle que porte le bouton dans `src/app/page.tsx`.
- Tu fais son changement et tu passes `missionStatus` à `"accomplished"` dans le même geste : la page montre le changement et la victoire ensemble, sans rechargement.
- Un changement que le consultant demande ailleurs sur la page réussit la mission de la même façon.

## La fusion

- Dans ce dépôt, et dans aucun autre, tu fusionnes toi-même la pull request du consultant dès qu'il dit « c'est bon », par `gh pr merge --squash`, quel que soit son rôle dans WaveProm.
- Ce dépôt n'a ni lint ni test : un changement marche quand le consultant le voit sur son lien local.

## La mise en ligne

- Vercel déploie `main` en production à chaque fusion.
- Le commit de la fusion se lit par `gh pr view --json mergeCommit --jq .mergeCommit.oid`.
- La production est à jour quand `gh api repos/WaveProm/page-test/commits/<commit>/status --jq .state` répond `success` : tu le relis toutes les dix secondes, trois minutes au plus.
- Le lien en ligne que tu donnes au consultant : https://page-test-waveprom.vercel.app
- Passé trois minutes sans `success`, tu donnes ce lien quand même, et tu dis au consultant en une phrase que la mise en ligne prend plus longtemps que prévu et que l'agence regarde.
- Ce dépôt est public : il ne porte ni secret, ni donnée d'un client, ni le nom d'un consultant.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
