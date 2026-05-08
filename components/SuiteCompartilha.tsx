import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

function LogoSpotlight({
  src,
  alt,
  size = 160,
}: {
  src: string;
  alt: string;
  size?: number;
}) {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(122,169,216,0.2),transparent_70%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="relative flex aspect-square w-full max-w-[260px] items-center justify-center rounded-3xl bg-[radial-gradient(circle_at_50%_30%,#FFFFFF,#E9EEF6)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_24px_60px_rgba(2,6,16,0.55)]">
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}

export default function SuiteCompartilha() {
  const featured = products.find((product) => product.status === "destaque")!;
  const others = products.filter((product) => product.status !== "destaque");

  return (
    <section id="suite" className="section-shell pb-24 md:pb-32">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[40rem]">
          <span className="eyebrow">Suite Compartilha</span>
          <h2 className="display-title mt-6 text-[clamp(2.2rem,4.2vw,4rem)] leading-[1]">
            Cinco produtos. Uma mesma obsessão por controle real.
          </h2>
        </div>
        <p className="max-w-[28rem] text-base leading-8 text-white/62">
          A suite Compartilha reúne plataformas que nasceram em operações
          críticas e foram industrializadas para escalar com a Bluhmwerk.
        </p>
      </div>

      <Link
        href={`/produtos/${featured.slug}`}
        className="surface-card mt-12 grid gap-0 overflow-hidden transition hover:-translate-y-1 lg:grid-cols-[1.05fr_0.95fr]"
        aria-labelledby={`product-${featured.slug}`}
      >
        <div className="flex flex-col justify-between p-8 md:p-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-[var(--signal)]/40 bg-[var(--signal)]/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-[var(--signal)]">
                Produto em destaque
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.24em] text-white/42">
                {featured.category}
              </span>
            </div>

            <h3
              id={`product-${featured.slug}`}
              className="display-title mt-8 text-[clamp(2rem,3.4vw,3rem)] leading-[1.04]"
            >
              {featured.name}
            </h3>
            <p className="mt-5 max-w-[34rem] text-[1.02rem] leading-8 text-white/68">
              {featured.pitch}
            </p>
          </div>

          <div className="mt-10">
            <ul className="grid gap-2 sm:grid-cols-2">
              {featured.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-white/72"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[var(--signal)]"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <span className="mt-8 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] text-[var(--signal)]">
              Ver página do produto <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>

        <div className="relative flex items-center justify-center border-l border-white/6 bg-[linear-gradient(180deg,#0A1424,#070D1B)] p-10 md:p-14">
          <LogoSpotlight src={featured.image} alt={featured.name} size={260} />
        </div>
      </Link>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {others.map((product) => (
          <Link
            key={product.slug}
            href={`/produtos/${product.slug}`}
            className="surface-card group flex flex-col overflow-hidden transition hover:-translate-y-1"
          >
            <div className="flex aspect-square items-center justify-center border-b border-white/6 bg-[linear-gradient(180deg,#0A1424,#070D1B)] p-8">
              <LogoSpotlight src={product.image} alt={product.name} size={170} />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                {product.category}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-white">
                {product.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-white/60">
                {product.pitch}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] text-[var(--steel-light)] transition group-hover:text-white">
                Conhecer <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
