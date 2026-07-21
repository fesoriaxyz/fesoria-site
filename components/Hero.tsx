import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24 text-center">
      <div className="absolute inset-0 grid-noise" />
      <div className="absolute inset-0 hero-glow animate-pulse-soft" />
      <div className="absolute left-1/2 top-[46%] h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 shadow-[0_0_160px_rgba(110,79,255,.16)]" />
      <div className="absolute left-1/2 top-[46%] h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.34em] text-white/45 sm:text-sm">
          AI-generated festival universes
        </p>

        <h1 className="text-[18vw] font-medium leading-[0.78] tracking-[-0.075em] sm:text-[9.5rem] lg:text-[12rem]">
          FESORIA
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-2xl">
          Every world has a festival.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#worlds"
            className="group flex items-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-black transition hover:scale-[1.03]"
          >
            Enter FESORIA
            <ArrowUpRight
              size={18}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href="#about"
            className="rounded-full border border-white/15 px-7 py-4 text-white/70 transition hover:border-white/35 hover:text-white"
          >
            Discover the signal
          </a>
        </div>
      </div>

      <a
        href="#worlds"
        aria-label="Scroll to worlds"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/40"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
