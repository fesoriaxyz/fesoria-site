import { ArrowUpRight } from "lucide-react";

type WorldCardProps = {
  title: string;
  era: string;
  description: string;
  image: string;
  index: number;
};

export default function WorldCard({
  title,
  era,
  description,
  image,
  index,
}: WorldCardProps) {
  return (
    <article className="group relative min-h-[34rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0d]">
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.04]"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />

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
