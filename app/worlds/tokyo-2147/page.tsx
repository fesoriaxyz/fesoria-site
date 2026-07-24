import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Play, Send } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Neo Tokyo — Episode 02 | FESORIA",
  description:
    "Intercept the Tokyo 2147 pirate broadcast: magnetic bikes, stolen data and a city moving beyond permission.",
  openGraph: {
    title: "Neo Tokyo — Episode 02 | FESORIA",
    description: "The future has no curfew.",
    images: ["/worlds/neo-tokyo-ep02.webp"],
  },
};

const protocols = [
  ["01 / MOVE", "Never remain visible long enough to become a target."],
  ["02 / TRANSMIT", "Every rider carries a piece of the forbidden signal."],
  ["03 / DISAPPEAR", "The city remembers machines. It forgets faces."],
] as const;

export default function TokyoPage() {
  return (
    <main className="tokyo-detail min-h-screen overflow-hidden bg-[#030303] text-white">
      <Navbar />

      <section className="world-detail-hero">
        <div
          className="world-detail-image"
          style={{ backgroundImage: "url('/worlds/neo-tokyo-ep02.webp')" }}
        />
        <div className="world-detail-shade" />
        <div className="tokyo-grid" />
        <div className="relative z-10 mx-auto w-full max-w-[92rem] px-6 pb-16 pt-40 sm:px-10 lg:px-14 lg:pb-24">
          <a
            href="/#episodes"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
          >
            <ArrowLeft size={17} /> Return to episodes
          </a>
          <p className="eyebrow tokyo-code">Episode 02 · In production · Unlicensed signal</p>
          <h1 className="max-w-6xl text-[clamp(4.8rem,15vw,13rem)] font-medium leading-[.72] tracking-[-.075em]">
            Tokyo <span className="tokyo-red">2147</span>
          </h1>
          <div className="mt-10 grid max-w-5xl gap-8 md:grid-cols-[1.15fr_.85fr] md:items-end">
            <p className="text-xl leading-8 text-white/74 sm:text-2xl">
              An illegal signal from a city moving too fast to regulate.
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className="world-fact"><span>Network</span>Pirate mesh</div>
              <div className="world-fact"><span>Status</span><b className="tokyo-code font-normal">In production</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal className="tokyo-manifesto mx-auto max-w-[92rem] p-8 sm:p-12 lg:p-20">
          <div className="relative z-10 grid gap-14 lg:grid-cols-[.92fr_1.08fr] lg:items-start">
            <div>
              <p className="eyebrow tokyo-code">Pirate broadcast / intercepted</p>
              <h2 className="section-title">The city is legal. The night is not.</h2>
            </div>
            <div className="space-y-7 text-lg leading-8 text-white/58 lg:pt-2">
              <p>
                Tokyo rebuilt itself vertically. Corporate districts own the
                sky; autonomous couriers own everything beneath it.
              </p>
              <p>
                Magnetic bikes cross abandoned transit levels carrying stolen
                music, identities and access codes. FESORIA appears wherever
                the network loses control.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-[#080706] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal className="mx-auto max-w-[92rem]">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
            <div>
              <p className="eyebrow tokyo-code">Courier protocol</p>
              <h2 className="section-title">Three rules. No permission.</h2>
              <div className="mt-12 space-y-9">
                {protocols.map(([code, copy]) => (
                  <div key={code} className="tokyo-protocol">
                    <span>{code}</span>
                    <p className="max-w-lg text-base leading-7 text-white/62">{copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="transmission-frame transmission-frame-tokyo transmission-frame-wide">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/worlds/neo-tokyo-ep02.webp"
                aria-label="Watch Tokyo 2147 Pirate Broadcast"
              >
                <source src="/videos/neo-tokyo-ep02.mp4" type="video/mp4" />
              </video>
              <div className="transmission-mark">
                <Play size={15} fill="currentColor" /> Pirate signal 02
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal className="mx-auto max-w-[92rem] text-center">
          <p className="eyebrow tokyo-code">Broadcast still active</p>
          <h2 className="mx-auto max-w-6xl text-[clamp(3.6rem,10vw,9rem)] font-medium leading-[.8] tracking-[-.07em]">
            The future has no curfew.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/55">
            Join the channel before the signal moves again.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://t.me/fesoriaxyz"
              target="_blank"
              rel="noreferrer"
              className="button-primary inline-flex items-center gap-2"
            >
              Enter the pirate channel <Send size={17} />
            </a>
            <a href="/#episodes" className="text-link inline-flex items-center gap-2">
              Explore every episode <ArrowUpRight size={17} />
            </a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
