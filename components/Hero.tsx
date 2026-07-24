import { ArrowDown, ArrowUpRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-shell relative flex min-h-[100svh] items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12">
      <video
        className="hero-film"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/posters/atlantis-world-01.webp"
        aria-hidden="true"
      >
        <source src="/videos/atlantis-world-01-fixed.mp4" type="video/mp4" />
      </video>
      <div className="hero-shade" />
      <div className="absolute inset-0 grid-noise opacity-50" />

      <div className="relative z-10 mx-auto w-full max-w-[92rem]">
        <div className="hero-kicker mb-7 flex items-center gap-3 text-[0.66rem] font-medium uppercase tracking-[0.28em] text-white/60">
          <span className="live-dot" />
          Episode 01 · The Floating City online
        </div>

        <h1 className="max-w-[1120px] text-[clamp(4.25rem,12.5vw,11rem)] font-medium leading-[0.76] tracking-[-0.078em]">
          One universe.
          <span className="block text-white/48">Infinite worlds.</span>
        </h1>

        <div className="mt-9 flex max-w-4xl flex-col justify-between gap-8 border-t border-white/20 pt-7 md:flex-row md:items-end">
          <p className="max-w-xl text-lg leading-8 text-white/72 sm:text-xl">
            Discover cinematic episodes from a universe where every world has
            its own history, architecture and soundtrack.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#transmissions" className="button-primary group flex items-center gap-2">
              <Play size={15} fill="currentColor" />
              Watch Episode 01
            </a>
            <a href="#worlds" className="button-ghost flex items-center gap-2">
              Explore episodes
              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#worlds"
        aria-label="Scroll to episodes"
        className="absolute bottom-7 right-7 z-10 hidden animate-bounce text-white/45 sm:block lg:right-12"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
