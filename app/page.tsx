import type { Metadata } from "next";

const title = "Fesoria | Alerte Utilități și aplicații mobile";
const description = "Fesoria dezvoltă aplicații mobile. Primul proiect este Alerte Utilități.";

export const metadata: Metadata = {
  title, description,
  openGraph: { title, description, locale: "ro_RO", type: "website" },
  twitter: { card: "summary", title, description },
};

const services = [
  ["Despre aplicație", "Alerte Utilități pornește de la o nevoie simplă: să afli când apare o întrerupere a unui serviciu de utilități."],
  ["Pentru mobil", "Aplicația este în pregătire pentru iOS și Android."],
  ["Disponibilitate", "Vom publica aici linkurile către magazine când aplicația va fi disponibilă."],
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#10111a] text-[#f7f6ff]">
      <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-7 sm:px-10">
        <a href="#" className="text-xl font-bold tracking-[.16em]">FESORIA</a>
        <nav aria-label="Navigare principală" className="flex gap-5 text-sm text-[#cecade] sm:gap-8">
          <a href="#services" className="hover:text-white">Aplicație</a>
          <a href="#process" className="hover:text-white">Despre</a>

        </nav>
      </header>
      <main className="mx-auto max-w-7xl px-6 sm:px-10">
        <section className="grid items-center gap-14 border-b border-white/15 pb-20 pt-16 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[.2em] text-[#c1adff]">Studio de aplicații mobile</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.06em] sm:text-7xl lg:text-8xl">Alerte Utilități</h1>
            <p className="mb-8 mt-6 max-w-lg text-lg leading-relaxed text-[#cecade]">Prima aplicație Fesoria, gândită pentru a te ajuta să urmărești întreruperile serviciilor de utilități.</p>
            <a href="#services" className="inline-block rounded-full bg-[#d8c9ff] px-6 py-3 font-semibold text-[#171125] hover:bg-white">Despre aplicație</a>
          </div>
          <div className="relative isolate grid min-h-[380px] place-items-center overflow-hidden rounded-[2rem] bg-[#24203d] p-8">
            <div aria-hidden="true" className="absolute -right-20 -top-24 -z-10 h-96 w-96 rounded-full bg-[#875eff]/50 blur-3xl" />
            <figure className="w-full max-w-[215px]">
              <div className="rounded-[2rem] border border-white/30 bg-[#111019] p-3 shadow-2xl">
                <div className="rounded-[1.45rem] bg-[#e7ddff] px-4 pb-5 pt-3 text-[#221733]">
                  <div className="mx-auto mb-5 h-2 w-14 rounded-full bg-[#221733]" />
                  <p className="text-sm">Alerte Utilități</p>
                  <p className="mb-4 text-2xl font-semibold">Servicii</p>
                  <div className="space-y-2 text-sm">
                    {["Apă", "Energie electrică", "Gaze"].map((habit) => (
                      <div key={habit} className="rounded-xl bg-white/85 px-3 py-2.5">{habit}</div>
                    ))}
                  </div>
                </div>
              </div>
              <figcaption className="mt-4 text-center text-sm text-[#eee6ff]">Ilustrație de concept</figcaption>
            </figure>
          </div>
        </section>
        <section id="services" className="py-20">
          <h2 className="mb-9 text-4xl font-semibold tracking-tight sm:text-5xl">Primul proiect Fesoria</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-white/15 bg-[#191a28] p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-[#cecade]">{description}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="process" className="grid gap-6 border-y border-white/15 py-16 md:grid-cols-2">
          <h2 className="text-4xl font-semibold tracking-tight">Despre Fesoria</h2>
          <p className="max-w-xl text-lg leading-relaxed text-[#cecade]">Fesoria dezvoltă aplicații mobile pentru nevoi de zi cu zi. Începem cu Alerte Utilități și vom prezenta aici proiectele viitoare.</p>
        </section>
      </main>
      <footer className="mx-auto max-w-7xl border-t border-white/15 px-6 py-7 text-sm text-[#cecade] sm:px-10">FESORIA · Aplicații mobile</footer>
    </div>
  );
}
