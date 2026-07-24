import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Send } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Atlantia — Episode 03 | FESORIA",
  description:
    "Enter Atlantia, a submerged civilization waiting to reconnect with the universe above.",
  alternates: {
    canonical: "/worlds/atlantia",
  },
  openGraph: {
    title: "Atlantia — Episode 03 | FESORIA",
    description: "A civilization beneath the surface. Signal pending.",
    images: ["/worlds/atlantia-ep03.webp"],
  },
};

const records = [
  ["Origin", "Beyond recorded time"],
  ["Environment", "Submerged civilization"],
  ["Signal", "Not yet recovered"],
  ["Status", "Concept"],
] as const;

export default function AtlantiaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Navbar />

      <section className="world-detail-hero">
        <div
          className="world-detail-image"
          style={{ backgroundImage: "url('/worlds/atlantia-ep03.webp')" }}
        />
        <div className="world-detail-shade" />
        <div className="relative z-10 mx-auto w-full max-w-[92rem] px-6 pb-16 pt-40 sm:px-10 lg:px-14 lg:pb-24">
          <a
            href="/#episodes"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
          >
            <ArrowLeft size={17} /> Return to episodes
          </a>
          <p className="eyebrow">Episode 03 · Concept</p>
          <h1 className="text-[clamp(5rem,17vw,14rem)] font-medium leading-[.72] tracking-[-.075em]">
            Atlantia
          </h1>
          <div className="mt-10 grid max-w-5xl gap-8 md:grid-cols-[1.15fr_.85fr] md:items-end">
            <p className="text-xl leading-8 text-white/74 sm:text-2xl">
              A civilization beneath the surface, waiting to reconnect with
              the universe above.
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className="world-fact"><span>Episode</span>EP03</div>
              <div className="world-fact"><span>Status</span>Concept</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal className="mx-auto grid max-w-[92rem] gap-14 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div>
            <p className="eyebrow">Unrecovered world</p>
            <h2 className="section-title">The city did not disappear. It went quiet.</h2>
          </div>
          <div className="space-y-7 text-lg leading-8 text-white/58 lg:pt-2">
            <p>
              Beneath a ceiling of moving water, ancient towers pulse with
              living light. Every structure points toward a signal source that
              has remained dormant for centuries.
            </p>
            <p>
              Atlantia is not the beginning of the story. It may be the place
              where the connection between every FESORIA world is finally
              understood.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-[#071014] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal className="mx-auto max-w-[92rem]">
          <p className="eyebrow">Archive status</p>
          <h2 className="section-title">No transmission has surfaced yet.</h2>
          <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {records.map(([label, value]) => (
              <div key={label} className="bg-[#071014] p-7 sm:p-10">
                <span className="text-xs uppercase tracking-[0.24em] text-white/38">{label}</span>
                <p className="mt-4 text-xl text-white/78 sm:text-2xl">{value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal className="mx-auto max-w-[92rem] text-center">
          <p className="eyebrow">Signal pending</p>
          <h2 className="mx-auto max-w-6xl text-[clamp(3.6rem,10vw,9rem)] font-medium leading-[.8] tracking-[-.07em]">
            The surface will hear Atlantia again.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/55">
            Join the transmission to know when Episode 03 begins to surface.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://t.me/fesoriaxyz"
              target="_blank"
              rel="noreferrer"
              className="button-primary inline-flex items-center gap-2"
            >
              Join the signal <Send size={17} />
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
