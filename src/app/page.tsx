import { missionStatus } from "./mission";

const Page = () => (
  <main className="flex min-h-dvh flex-col items-center justify-center gap-12 bg-white px-6 py-16 text-center text-neutral-950">
    <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
      Bienvenue chez WaveProm
    </h1>
    {missionStatus === "accomplished" ? (
      <p className="rounded-3xl bg-emerald-100 px-8 py-5 text-2xl font-semibold text-emerald-900 sm:text-3xl">
        🎉 Mission réussie : vous venez de changer cette page.
      </p>
    ) : (
      <p className="max-w-2xl text-2xl text-neutral-600 sm:text-3xl">
        Votre mission : demandez à Claude de changer la couleur de ce bouton.
      </p>
    )}
    <button
      type="button"
      className="rounded-full bg-blue-600 px-14 py-7 text-3xl font-semibold text-white shadow-xl sm:text-4xl"
    >
      Changez ma couleur
    </button>
  </main>
);

export default Page;
