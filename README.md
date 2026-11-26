# page-test

La page de test de WaveProm : un écran, un titre de bienvenue, une mission et un gros bouton.
Un consultant y fait son premier changement à la fin de son installation, guidé par Claude : il demande une autre couleur pour le bouton, la voit changer sur son lien local, dit « c'est bon », et la retrouve en ligne.
Le tutoriel qui le guide vit dans le système de l'agence, le dépôt privé WaveProm/onboarding-integration-continue-waveprom ; ce dépôt ne porte que la page et ses consignes, dans [AGENTS.md](AGENTS.md).

En ligne : https://page-test-waveprom.vercel.app

## Ce que montre la page

- Le titre « Bienvenue chez WaveProm ».
- La mission, « demande à Claude de changer la couleur de ce bouton », ou la victoire, « Mission réussie », selon `missionStatus` dans `src/app/mission.ts`.
- La page tutoie le consultant, comme Claude et comme le mail de l'agence.
- Le bouton, dont la couleur est une classe Tailwind dans `src/app/page.tsx`.

## Le déploiement

Ce dépôt est public : Vercel y déploie le commit d'une personne qui n'est pas membre de l'équipe Vercel de l'agence, sans siège.
Le projet Vercel `page-test` de l'équipe de l'agence déploie `main` en production à chaque fusion, sur https://page-test-waveprom.vercel.app, sans protection sur ce lien.
Une branche poussée reçoit une preview, réservée aux membres de l'équipe Vercel.

## Développement

Next.js 16 et Tailwind 4, sans lint ni test.
`npm run dev` lit le port dans `PORT`, ce que demande `bin/serveur.sh` du système.

```
npm ci
PORT=3000 npm run dev
```
