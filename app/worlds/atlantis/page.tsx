import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Play, Send } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Atlantis — World 01 | FESORIA",
  description:
    "Enter Atlantis, the first FESORIA festival world: a submerged civilization returning for one impossible night.",
  openGraph: {
    title: "Atlantis — World 01 | FESORIA",
    description: "A lost civilization. One impossible night.",
    images: ["/worlds/atlantis.webp"],
  },
};

const citizens = [
  ["Sunken Royal", "The ceremonial quarter", "/citizens/sunken-royal-v2.webp"],
  ["Biopunk Racer", "The flooded underground", "/citizens/biopunk-racer-v2.webp"],
  ["Coral Nomad", "The living amphitheatre", "/citizens/coral-nomad-v2.webp"],
  ["Trench Mechanic", "The abyssal pressure works", "/citizens/trench-mechanic-v2.webp"],
] as const;

export default function AtlantisPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Navbar />

      <section className="world-detail-hero">
        <div
          className="world-detail-image"
          style={{ backgroundImage: "url('/worlds/atlantis.webp')" }}
        />
        <div className="world-detail-shade" />
        <div className="relative z-10 mx-auto w-full max-w-[92rem] px-6 pb-16 pt-40 sm:px-10 lg:px-14 lg:pb-24">
          <a href="/#worlds" className="mb-10 inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white">
            <ArrowLeft size={17} /> Return to the archive
          </a>
          <p className="eyebrow">World 01 · ATL-001</p>
          <h1 className="text-[clamp(5rem,17vw,14rem)] font-medium leading-[.72] tracking-[-.075em]">
            Atlantis
          </h1>
          <div className="mt-10 grid max-w-5xl gap-8 md:grid-cols-[1.15fr_.85fr] md:items-end">
            <p className="text-xl leading-8 text-white/74 sm:text-2xl">
              A civilization lost beneath the surface returns for one
              impossible night.
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className="world-fact"><span>Era</span>Beyond recorded time</div>
              <div className="world-fact"><span>Signal</span>Online</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal className="mx-auto grid max-w-[92rem] gap-14 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div>
            <p className="eyebrow">Recovered mythology</p>
            <h2 className="section-title">The city did not disappear. It went quiet.</h2>
          </div>
          <div className="space-y-7 text-lg leading-8 text-white/58 lg:pt-2">
            <p>
              Beneath a ceiling of moving water, ancient stone towers pulse
              with bioluminescent energy. Ritual avenues become stages. Coral
              gardens become dance floors.
            </p>
            <p>
              Atlantis is not a reconstruction of the past. It is the moment a
              forgotten civilization reconnects with the surface through
              sound.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-[#071014] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal className="mx-auto max-w-[92rem]">
          <p className="eyebrow">Citizens of Atlantis</p>
          <h2 className="section-title">Four districts. Four ways to arrive.</h2>
          <div className="citizen-rail mt-16">
            {citizens.map(([name, district, image], index) => (
              <article key={name} className="citizen-card">
                <img src={image} alt={`${name}, an Atlantis festival citizen`} />
                <div className="citizen-shade" />
                <div className="citizen-copy">
                  <span>Citizen {String(index + 1).padStart(2, "0")}</span>
                  <h3>{name}</h3>
                  <p>{district}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <div>
            <p className="eyebrow">Recovered transmission 001</p>
            <h2 className="section-title">The first signal came from below.</h2>
            <p className="section-copy mt-7">
              Eight seconds of recovered footage opened the portal. The sound
              is still waiting on the other side.
            </p>
            <a
              href="https://t.me/fesoriaxyz"
              target="_blank"
              rel="noreferrer"
              className="button-primary mt-8 inline-flex items-center gap-2"
            >
              Join the Atlantis signal <Send size={17} />
            </a>
          </div>
          <div className="transmission-frame">
            <video controls playsInline preload="metadata" poster="/posters/atlantis-world-01.webp">
              <source src="/videos/atlantis-world-01-fixed.mp4" type="video/mp4" />
            </video>
            <div className="transmission-mark"><Play size={15} fill="currentColor" /> World 01</div>
          </div>
        </Reveal>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-32">
        <Reveal className="mx-auto max-w-[92rem] border-y border-white/15 py-20 text-center lg:py-28">
          <p className="eyebrow">The archive remains open</p>
          <h2 className="mx-auto max-w-5xl text-[clamp(3.4rem,9vw,8rem)] font-medium leading-[.84] tracking-[-.07em]">
            Atlantis was only the beginning.
          </h2>
          <a href="/#worlds" className="text-link mt-9 inline-flex items-center gap-2">
            Explore every world <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
