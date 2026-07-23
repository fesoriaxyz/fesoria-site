import { ArrowUpRight } from "lucide-react";

type WorldCardProps = {
  title: string;
  era: string;
  description: string;
  image: string;
  imagePosition?: string;
  index: number;
};

export default function WorldCard({
  title,
  era,
  description,
  image,
  imagePosition = "center",
  index,
}: WorldCardProps) {
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
            WORLD {String(index + 1).padStart(2, "0")}
          </span>
          <ArrowUpRight
            className="text-white/55 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
            size={22}
          />
        </div>

        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-white/58">{era}</p>
          <h3 className="text-[clamp(3.6rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.065em]">
            {title}
          </h3>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">{description}</p>
        </div>
      </div>
    </article>
  );
}
