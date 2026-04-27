import Image from "next/image";
import type { CSSProperties } from "react";

type PortfolioCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  accent: string;
  cta: string;
};

export default function PortfolioCard({
  eyebrow,
  title,
  description,
  features,
  image,
  accent,
  cta,
}: PortfolioCardProps) {
  return (
    <article
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-5 transition-transform duration-300 hover:-translate-y-1"
      style={
        {
          "--card-accent": accent,
        } as CSSProperties
      }
    >
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--card-accent),transparent_52%)] opacity-15" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.24em] text-white/42">
            {eyebrow}
          </span>
          <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-white/65">
            {cta}
          </span>
        </div>

        <h3 className="mt-6 max-w-[11ch] text-[2rem] font-semibold leading-[1.04] text-white">
          {title}
        </h3>
        <p className="mt-4 max-w-[28rem] text-sm leading-7 text-white/60">
          {description}
        </p>

        <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-[26px] border border-white/10 bg-black/25">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/68"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
