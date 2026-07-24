import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type WorldCardProps = {
  title: string;
  era: string;
  description: string;
  image: string;
  imagePosition?: string;
  href?: string;
  status: string;
  index: number;
};

export default function WorldCard({
  title,
  era,
  description,
  image,
  imagePosition = "center",
  href,
  status,
  index,
}: WorldCardProps) {
  const artwork = index === 0 ? "/worlds/floating-city.svg" : image;

  return (
    <article className="world-panel group relative min-h-[78svh] overflow-hidden bg-[#0b0b0d]">
      <div
        className="world-image absolute inset-0 bg-cover bg-center transition duration-[1.4s] group-hover:scale-[1.025]"
        style={{
          backgroundImage: `url(${artwork})`,
          backgroundPosition: imagePosition,
        }}
      />
      <div className="world-shade absolute inset-0" />

      <div className="relative flex min-h-[78svh] flex-col justify-between p-7 sm:p-10 lg:p-14">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[0.65rem] tracking-[0.3em] text-white/60">
            EPISODE {String(index + 1).padStart(2, "0")}
          </span>
          <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-white/75 backdrop-blur-md">
            {status}
          </span>
        </div>

        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-white/58">{era}</p>
          <h3 className="text-[clamp(3.6rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.065em]">
            {title}
          </h3>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            {description}
          </p>
          {href && (
            <Link href={href} className="button-ghost mt-7 inline-flex items-center gap-2">
              Discover episode <ArrowUpRight size={17} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
