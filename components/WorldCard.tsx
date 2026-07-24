import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type WorldCardProps = {
  title: string;
  era: string;
  description: string;
  image: string;
  imagePosition?: string;
  href?: string;
  index: number;
};

export default function WorldCard({
  title,
  era,
  description,
  image,
  imagePosition = "center",
  href,
  index,
}: WorldCardProps) {
  const isFirstEpisode = index === 0;
  const displayTitle = isFirstEpisode ? "The Floating City" : title;
  const displayEra = isFirstEpisode ? "Above the clouds, the core awakens" : era;
  const displayDescription = isFirstEpisode
    ? "A civilization suspended above the clouds, powered by an ancient energy core that has begun to pulse again."
    : description;

  return (
    <article className="world-panel group relative min-h-[78svh] overflow-hidden bg-[#0b0b0d]">
      <div
        className="world-image absolute inset-0 bg-cover bg-center transition duration-[1.4s] group-hover:scale-[1.025]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: imagePosition,
        }}
      />
      <div className="world-shade absolute inset-0" />

      <div className="relative flex min-h-[78svh] flex-col justify-between p-7 sm:p-10 lg:p-14">
        <div className="flex items-center justify-between">
          <span className="text-[0.65rem] tracking-[0.3em] text-white/60">
            EPISODE {String(index + 1).padStart(2, "0")}
          </span>
          <ArrowUpRight
            className="text-white/55 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
            size={22}
          />
        </div>

        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-white/58">{displayEra}</p>
          <h3 className="text-[clamp(3.6rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.065em]">
            {displayTitle}
          </h3>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            {displayDescription}
          </p>
          {href && (
            <Link
              href={href}
              className="button-ghost mt-7 inline-flex items-center gap-2"
            >
              Enter this episode <ArrowUpRight size={17} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
