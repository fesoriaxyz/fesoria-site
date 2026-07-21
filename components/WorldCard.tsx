import { ArrowUpRight } from "lucide-react";

type Accent = "cyan" | "violet" | "red" | "orange";

type WorldCardProps = {
  title: string;
  era: string;
  description: string;
  accent: Accent;
  index: number;
};

export default function WorldCard({
  title,
  era,
  description,
  accent,
  index,
}: WorldCardProps) {
  return (
    <article className="group relative min-h-[34rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0d]">
      <div
        className={`absolute inset-0 world-gradient-${accent} transition duration-700 group-hover:scale-[1.04]`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
      <div className="world-orbit right-[-12%] top-[4%] transition duration-700 group-hover:rotate-0 group-hover:scale-110" />
      <div className="absolute right-[12%] top-[20%] h-24 w-24 rounded-full bg-white/10 blur-2xl" />

      <div className="relative flex h-full min-h-[34rem] flex-col justify-between p-7 sm:p-9">
        <div className="flex items-center justify-between">
          <span className="text-xs tracking-[0.26em] text-white/45">
            WORLD {String(index + 1).padStart(2, "0")}
          </span>
          <ArrowUpRight
            className="text-white/55 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
            size={22}
          />
        </div>

        <div>
          <p className="mb-3 text-sm text-white/55">{era}</p>
          <h3 className="text-5xl font-medium tracking-[-0.05em] sm:text-6xl">
            {title}
          </h3>
          <p className="mt-5 max-w-md leading-7 text-white/60">{description}</p>
        </div>
      </div>
    </article>
  );
}
