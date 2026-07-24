import { ArrowUpRight, Instagram, Play, Send } from "lucide-react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import WorldCard from "@/components/WorldCard";

const episodes = [
  {
    title: "The Floating City",
    era: "Above the clouds, the core awakens",
    description:
      "A civilization suspended above the clouds, powered by an ancient energy core that has begun to pulse again.",
    image: "/worlds/floating-city-ep01.webp",
    href: "#transmissions",
    status: "Online",
  },
  {
    title: "Neo Tokyo",
    era: "The future has no curfew",
    description:
      "A neon megacity moving beyond permission, where one courier carries a signal capable of changing every world.",
    image: "/worlds/neo-tokyo-ep02.webp",
    href: "/worlds/tokyo-2147",
    status: "In production",
  },
  {
    title: "Atlantia",
    era: "A civilization beneath the surface",
    description:
      "Ancient architecture, living light and a submerged culture waiting to reconnect with the universe above.",
    image: "/worlds/atlantia-ep03.webp",
    href: "/worlds/atlantis",
    status: "Concept",
  },
  {
    title: "The Core",
    era: "The source behind every signal",
    description:
      "An impossible energy system linking distant civilizations through a network older than recorded history.",
    image: "/worlds/the-core-ep04.webp",
    status: "Locked",
  },
  {
    title: "The Portal",
    era: "Destination unknown",
    description:
      "The gateway has appeared. Nobody knows who built it, where it leads or what is already coming through.",
    image: "/worlds/the-portal-ep05.webp",
    status: "Unknown",
  },
] as const;

const timeline = [
  { code: "EP01", title: "The Floating City", status: "Online" },
  { code: "EP02", title: "Neo Tokyo", status: "In production" },
  { code: "EP03", title: "Atlantia", status: "Concept" },
  { code: "EP04", title: "The Core", status: "Locked" },
  { code: "EP05", title: "The Portal", status: "Unknown" },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Navbar />
      <Hero />

      <section id="episodes" className="px-3 py-24 sm:px-5 lg:py-32">
        <Reveal className="mx-auto mb-16 max-w-[92rem] px-2 sm:px-3">
          <p className="eyebrow">Episodes</p>
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <h2 className="section-title">Every episode reveals another world.</h2>
            <p className="section-copy lg:mb-2">
              Follow the FESORIA universe as new civilizations, signals and
              connections are revealed one episode at a time.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-[92rem] gap-3">
          {episodes.map((episode, index) => (
            <Reveal key={episode.title}>
              <WorldCard {...episode} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="archives" className="relative px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="ambient-orb ambient-orb-left" />
        <Reveal className="mx-auto max-w-[92rem]">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow">Recovered signals</p>
              <h2 className="section-title">Fragments from a universe still unfolding.</h2>
            </div>
            <div className="lg:pb-2">
              <p className="section-copy">
                Each transmission reveals another piece of FESORIA through
                architecture, movement, sound and hidden connections.
              </p>
              <a href="#transmissions" className="text-link mt-7 inline-flex items-center gap-2">
                Enter the transmission archive <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            <article className="editorial-card editorial-floating-city">
              <div className="editorial-overlay" />
              <div className="editorial-copy">
                <span>ARCHIVE 001</span>
                <h3>The first awakening</h3>
                <p>An ancient signal returns from beyond the clouds.</p>
              </div>
            </article>
            <article className="editorial-card editorial-tokyo">
              <div className="editorial-scanlines" />
              <div className="editorial-overlay" />
              <div className="editorial-copy">
                <span>ARCHIVE 002</span>
                <h3>Neo Tokyo — Pirate Broadcast</h3>
                <p>An illegal signal from a city moving beyond permission.</p>
              </div>
            </article>
          </div>
        </Reveal>
      </section>

      <section id="timeline" className="border-y border-white/10 bg-[#070707] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal className="mx-auto max-w-[92rem]">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow">Universe timeline</p>
              <h2 className="section-title">The story is being built in public.</h2>
            </div>
            <p className="section-copy md:justify-self-end">
              Every new release moves the universe forward. Return to see which
              signal comes online next.
            </p>
          </div>

          <div className="mt-16 border-t border-white/12">
            {timeline.map((episode, index) => (
              <article
                key={episode.code}
                className="grid gap-4 border-b border-white/12 py-7 sm:grid-cols-[0.3fr_1fr_auto] sm:items-center sm:py-9"
              >
                <span className="text-xs font-medium tracking-[0.28em] text-white/45">
                  {episode.code}
                </span>
                <h3 className="text-2xl font-medium tracking-[-0.035em] sm:text-4xl">
                  {episode.title}
                </h3>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/58">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      index === 0 ? "bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" : "bg-white/25"
                    }`}
                  />
                  {episode.status}
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
              <p className="eyebrow">Episode 01</p>
              <h2 className="section-title">The Floating City is online.</h2>
              <p className="section-copy">
                The first recovered footage reveals a civilization suspended
                above the clouds and the energy core awakening at its center.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-cyan-100/75">
                <span className="live-dot" /> Episode online · EP01
              </div>
            </div>

            <div className="transmission-frame transmission-frame-wide">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/worlds/floating-city-ep01.webp"
                aria-label="Watch Episode 01 — The Floating City"
              >
                <source src="/videos/floating-city-ep01.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
              <div className="transmission-mark">
                <Play size={15} fill="currentColor" /> Episode 01
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-28 max-w-[92rem] border-t border-white/10 pt-28 lg:mt-40 lg:pt-40">
          <div className="grid gap-10 lg:grid-cols-[1.28fr_0.72fr] lg:items-center">
            <div className="transmission-frame transmission-frame-tokyo transmission-frame-wide lg:order-1">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/worlds/neo-tokyo-ep02.webp"
                aria-label="Watch Neo Tokyo concept transmission"
              >
                <source src="/videos/neo-tokyo-ep02.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
              <div className="transmission-mark">
                <Play size={15} fill="currentColor" /> Episode 02 concept
              </div>
            </div>

            <div className="lg:order-2">
              <p className="eyebrow">Episode 02 · In production</p>
              <h2 className="section-title">Neo Tokyo was never meant to air.</h2>
              <p className="section-copy">
                Stolen street footage reveals one courier, one data run and a
                future moving faster than anyone can control.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-lime-100/75">
                <span className="live-dot live-dot-tokyo" /> Production signal · EP02
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="join" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <Reveal className="signal-join mx-auto max-w-[92rem]">
          <div className="signal-join-glow" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="eyebrow">Join the transmission</p>
              <h2 className="max-w-5xl text-[clamp(3.4rem,8vw,8rem)] font-medium leading-[0.84] tracking-[-0.07em]">
                Don&apos;t watch the future arrive. Enter it.
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="section-copy">
                New episodes, recovered signals and first access to everything
                FESORIA is becoming.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href="https://t.me/fesoriaxyz"
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary inline-flex items-center justify-center gap-2"
                >
                  Join Telegram <Send size={17} />
                </a>
                <a
                  href="https://instagram.com/fesoriaxyz"
                  target="_blank"
                  rel="noreferrer"
                  className="button-ghost inline-flex items-center justify-center gap-2"
                >
                  Follow Instagram <Instagram size={17} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
