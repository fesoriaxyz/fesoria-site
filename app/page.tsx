import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorldCard from "@/components/WorldCard";

const worlds = [
  {
    title: "Atlantis",
    era: "Lost beneath the surface",
    description:
      "A submerged civilization awakens for one impossible night of light, sound and ancient energy.",
    accent: "cyan",
  },
  {
    title: "Tokyo 2147",
    era: "The city never sleeps",
    description:
      "Holographic towers, neon rain and a festival transmitted across a billion augmented skies.",
    accent: "violet",
  },
  {
    title: "Dracula",
    era: "Midnight in Transylvania",
    description:
      "A gothic ritual of bass, fire and moonlight inside a castle forgotten by time.",
    accent: "red",
  },
  {
    title: "Mars",
    era: "The first off-world mainstage",
    description:
      "Humanity celebrates beneath a crimson sky, with Earth rising behind the stage.",
    accent: "orange",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Navbar />
      <Hero />

      <section id="worlds" className="relative px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow">Recovered universes</p>
            <h2 className="section-title">
              Festivals from worlds that never existed.
            </h2>
            <p className="section-copy">
              Every FESORIA universe has its own history, atmosphere and
              mythology. The footage feels discovered, not created.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {worlds.map((world, index) => (
              <WorldCard key={world.title} {...world} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative px-5 py-24 sm:px-8 lg:px-12">
        <div className="ambient-orb ambient-orb-left" />
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl md:grid-cols-[1.05fr_0.95fr] md:p-12">
          <div>
            <p className="eyebrow">The signal</p>
            <h2 className="section-title">Every world has a festival.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-white/65 sm:text-lg">
            <p>
              FESORIA is a cinematic AI media universe built around imaginary
              festivals, alternate histories and impossible places.
            </p>
            <p>
              Each release is a fragment from somewhere else: Atlantis,
              Transylvania, Mars, future Tokyo and worlds still waiting to be
              found.
            </p>
          </div>
        </div>
      </section>

      <section id="videos" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="eyebrow">Transmission archive</p>
            <h2 className="section-title">Latest signals</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {["ATL-001", "TKY-2147", "DRC-013", "MRS-001", "EGY-404", "VKG-009"].map(
              (code, index) => (
                <article
                  key={code}
                  className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0d12]"
                >
                  <div className={`signal-card signal-${index + 1}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs tracking-[0.28em] text-white/45">
                      {code}
                    </p>
                    <h3 className="mt-2 text-xl font-medium">Incoming footage</h3>
                    <p className="mt-2 text-sm text-white/55">
                      Transmission pending.
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
