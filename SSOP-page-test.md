# SSOP - la page de test et sa mission

## Formes

| Donnée | Origine | Destination | Frontière | Forme | État illégal interdit |
| ------ | ------- | ----------- | --------- | ----- | --------------------- |
| Statut de la mission | `src/app/mission.ts`, que Claude écrit pendant le tutoriel | `src/app/page.tsx` | l'import typé `MissionStatus` | `"open"` ou `"accomplished"` | une page qui montre à la fois la mission et la victoire, ou ni l'une ni l'autre |
| Port du serveur local | `PORT`, que pose `bin/serveur.sh` du système | `next dev` | Next.js lit `PORT` | un entier | un serveur sur un port que `bin/serveur.sh` n'a pas choisi |
| Fusion de la pull request | le « c'est bon » du consultant | `main`, puis la production | `AGENTS.md` de ce dépôt | une exception écrite, bornée à ce dépôt | la fusion par Claude étendue à un dépôt d'un client |

## Ordre

| Produit | Besoins | Paramètres | Retour | Fichier |
| ------- | ------- | ---------- | ------ | ------- |
| le statut de la mission | - | - | `missionStatus` | src/app/mission.ts |
| le cadre de la page | - | `children` | `html` et `body`, en français, hors des moteurs de recherche | src/app/layout.tsx, src/app/globals.css |
| l'écran | le statut de la mission | - | le titre, la mission ou la victoire, le bouton | src/app/page.tsx |
| les consignes du dépôt | l'écran, le statut de la mission | - | la mission, la remise à zéro, la fusion, le lien en ligne | AGENTS.md |
| la documentation | tout ce qui précède | - | ce que fait le dépôt et comment il se déploie | README.md |

Arêtes : le statut de la mission vers l'écran ; l'écran et le statut vers les consignes ; tout vers la documentation.
Donnée de frontière : `PORT`, la demande du consultant, son « c'est bon ».

Tri :

1. le statut de la mission, le cadre de la page
2. l'écran
3. les consignes du dépôt
4. la documentation

## Vérifications

| Module | Changement qu'il confine | Ce qu'un appelant doit savoir |
| ------ | ------------------------ | ----------------------------- |
| src/app/mission.ts | si la mission du consultant est réussie | `missionStatus` vaut `"open"` ou `"accomplished"`, et rien d'autre ne le dit |
| src/app/page.tsx | ce que montre l'écran : le titre, la mission ou la victoire, le bouton et sa couleur | rien : la page se lit seule |
| src/app/layout.tsx | la langue, le titre de l'onglet, l'exclusion des moteurs de recherche | rien |
| AGENTS.md | ce que Claude fait de différent dans ce dépôt | l'exception de fusion ne vaut qu'ici |

## Propriété

| Fait | Propriétaire | Lecteurs | Écrivain |
| ---- | ------------ | -------- | -------- |
| La mission est réussie ou non | `src/app/mission.ts` | `src/app/page.tsx` | Claude : `"open"` avant de montrer la page, `"accomplished"` avec le changement du consultant |
| La couleur du bouton | `src/app/page.tsx` | le consultant, dans Chrome | Claude, sur la demande du consultant |
| Ce qui est en ligne | la branche `main`, déployée par Vercel | tout le monde, au lien de production | la fusion d'une pull request |

## Amendements
