# Past decisions

Append only. One row per decision. A row is never edited or deleted, a reversal is a new row.

A row exists when a problem was raised and a decision closed it. Nothing else gets a row.
Problem and decision are one line each. An error code, a trace id or a ticket number goes in Ref, never the error itself.

| Date | Problem | Decision | Ref |
| ---- | ------- | -------- | --- |
| 2026-11-26 | Sur un dépôt privé, Vercel exige un siège payant pour déployer le commit d'un consultant | Ce dépôt est public, et son projet Vercel déploie `main` en production sans protection sur le lien de production | vercel-sans-siege.md |
| 2026-11-26 | Un consultant n'est pas owner, et son premier changement doit finir en ligne sans attendre l'agence | Dans ce dépôt seulement, Claude fusionne lui-même la pull request sur le « c'est bon » du consultant, exception écrite dans AGENTS.md | brief |
| 2026-11-26 | Chaque consultant change la même page, et la victoire du précédent reste sur `main` | `src/app/mission.ts` porte le statut de la mission, que Claude remet à `"open"` dans son worktree avant de montrer la page | inbox 002 |
| 2026-11-26 | Dans le fichier de la page, TypeScript réduit une constante annotée à sa valeur et refuse de la comparer à l'autre | Le statut vit dans son propre module, et la page l'importe avec son type entier | TS2367 |
| 2026-11-26 | Le domaine que Vercel donne au projet, page-test-sooty.vercel.app, ne dit rien au consultant | Le lien de production est page-test-waveprom.vercel.app, ajouté au projet | - |
