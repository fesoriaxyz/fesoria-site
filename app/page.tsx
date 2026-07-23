import { ArrowUpRight, Play } from "lucide-react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import WorldCard from "@/components/WorldCard";

const worlds = [
  {
    title: "Atlantis",
    era: "Lost beneath the surface",
    description:
      "Ancient architecture. Bioluminescent crowds. A civilization returning for one impossible night.",
    image: "/worlds/atlantis.webp",
  },
  {
    title: "Tokyo 2147",
    era: "The future has no curfew",
    description:
      "A pirate broadcast tears through the underground: magnetic bikes, stolen data and a city moving too fast to regulate.",
    image: "/worlds/tokyo-2147-pirate.webp",
  },
  {
    title: "Dracula",
    era: "Midnight in Transylvania",
    description:
      "A gothic ritual of bass, fire and moonlight inside a castle that remembers every century.",
    image: "/worlds/dracula-festival.webp",
  },
  {
    title: "Mars",
    era: "The first off-world mainstage",
    description:
      "Humanity celebrates beneath a crimson sky while Earth rises quietly behind the sound system.",
    image: "/worlds/mars-mainstage.webp",
  },
] as const;

const citizens = [
  {
    name: "Sunken Royal",
    district: "The ceremonial quarter",
    image: "/citizens/sunken-royal-v2.webp",
  },
  {
    name: "Biopunk Racer",
    district: "The flooded underground",
    image: "/citizens/biopunk-racer-v2.webp",
  },
  {
    name: "Coral Nomad",
    district: "The living amphitheatre",
    image: "/citizens/coral-nomad-v2.webp",
  },
  {
    name: "Trench Mechanic",
    district: "The abyssal pressure works",
    image: "/citizens/trench-mechanic-v2.webp",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Navbar />
      <Hero />

      <section id="worlds" className="px-3 py-24 sm:px-5 lg:py-32">
        <Reveal className="mx-auto mb-16 max-w-[92rem] px-2 sm:px-3">
          <p className="eyebrow">The universe archive</p>
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <h2 className="section-title">Not destinations. Entire realities.</h2>
            <p className="section-copy lg:mb-2">
              Each world has its own architecture, citizens, mythology and
              sound. Nothing repeats except the feeling of arrival.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-[92rem] gap-3">
          {worlds.map((world, index) => (
            <Reveal key={world.title}>
              <WorldCard {...world} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="reimagined" className="relative px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="ambient-orb ambient-orb-left" />
        <Reveal className="mx-auto max-w-[92rem]">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow">FESORIA Reimagined</p>
              <h2 className="section-title">Familiar energy. Impossible context.</h2>
            </div>
            <div className="lg:pb-2">
              <p className="section-copy">
                Cultural signals are rebuilt inside each world—from submerged
                anthems to music engineered for cities that do not exist yet.
              </p>
              <a href="#transmissions" className="text-link mt-7 inline-flex items-center gap-2">
                Enter the transmission archive <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            <article className="editorial-card editorial-atlantis">
              <div className="editorial-overlay" />
              <div className="editorial-copy">
                <span>REIMAGINED 001</span>
                <h3>Atlantis × Faded</h3>
                <p>A lost signal resurfaces beneath the mainstage.</p>
              </div>
            </article>
            <article className="editorial-card editorial-tokyo">
              <div className="editorial-scanlines" />
              <div className="editorial-overlay" />
              <div className="editorial-copy">
                <span>REIMAGINED 002</span>
                <h3>Tokyo 2147 — Pirate Broadcast</h3>
                <p>An illegal signal from a city moving beyond permission.</p>
              </div>
            </article>
          </div>
        </Reveal>
      </section>

      <section id="citizens" className="border-y border-white/10 bg-[#070707] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal className="mx-auto max-w-[92rem]">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow">Festival Citizens</p>
              <h2 className="section-title">A world is nothing without its people.</h2>
            </div>
            <p className="section-copy md:justify-self-end">
              Fashion, rituals and subcultures recovered from the crowd. Meet
              the first citizens of Atlantis.
            </p>
          </div>

          <div className="citizen-rail mt-16">
            {citizens.map((citizen, index) => (
              <article key={citizen.name} className="citizen-card">
                <img src={citizen.image} alt={`${citizen.name}, an Atlantis festival citizen`} />
                <div className="citizen-shade" />
                <div className="citizen-copy">
                  <span>Citizen {String(index + 1).padStart(2, "0")}</span>
                  <h3>{citizen.name}</h3>
                  <p>{citizen.district}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

      </section>

      <section id="transmissions" className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal className="mx-auto max-w-[92rem]">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="eyebrow">Transmission 001</p>
              <h2 className="section-title">The first signal came from below.</h2>
              <p className="section-copy">
                Eight seconds of recovered footage opened the portal. Atlantis
                was only the beginning.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-cyan-100/75">
                <span className="live-dot" /> Signal online · ATL-001
              </div>
            </div>

            <div className="transmission-frame">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/posters/atlantis-world-01.webp"
                aria-label="Watch World 01 — Atlantis"
              >
                <source src="/videos/atlantis-world-01-fixed.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
              <div className="transmission-mark">
                <Play size={15} fill="currentColor" /> World 01
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-28 max-w-[92rem] border-t border-white/10 pt-28 lg:mt-40 lg:pt-40">
          <div className="grid gap-10 lg:grid-cols-[1.28fr_0.72fr] lg:items-center">
            <div className="transmission-frame transmission-frame-tokyo lg:order-1">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/posters/tokyo-2147-pirate.webp"
                aria-label="Watch World 02 — Tokyo 2147 Pirate Broadcast"
              >
                <source src="/videos/tokyo-2147-pirate-11s.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
              <div className="transmission-mark">
                <Play size={15} fill="currentColor" /> World 02
              </div>
            </div>

            <div className="lg:order-2">
              <p className="eyebrow">Transmission 002</p>
              <h2 className="section-title">The second signal was never meant to air.</h2>
              <p className="section-copy">
                Eleven seconds of stolen street footage. One courier, one data
                run and a future moving beyond permission.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-lime-100/75">
                <span className="live-dot live-dot-tokyo" /> Signal online · TKY-2147
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <Reveal className="mx-auto max-w-[92rem] border-y border-white/15 py-20 text-center lg:py-28">
          <p className="eyebrow">The signal continues</p>
          <h2 className="mx-auto max-w-6xl text-[clamp(3.4rem,9vw,8.5rem)] font-medium leading-[0.84] tracking-[-0.07em]">
            Every world has a festival.
          </h2>
          <a
            href="https://x.com/fesoriaxyz"
            target="_blank"
            rel="noreferrer"
            className="button-primary mt-10 inline-flex items-center gap-2"
          >
            Follow the next signal <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
