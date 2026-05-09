import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProduct, products } from "@/lib/products";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.pitch,
    alternates: { canonical: `/produtos/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.pitch,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = products.filter((item) => item.slug !== product.slug);

  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <Header />

      <main className="relative z-10 pt-32 md:pt-40">
        <section className="section-shell pb-16">
          <Link
            href="/#suite"
            className="inline-flex items-center text-[0.7rem] uppercase tracking-[0.24em] text-white/52 transition hover:text-white"
          >
            ← Suite Compartilha
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow">{product.category}</span>
              <h1 className="display-title mt-6 text-[clamp(2.6rem,5.6vw,5rem)] leading-[0.96]">
                {product.name}
              </h1>
              <p className="mt-7 max-w-[42rem] text-lg leading-8 text-white/72">
                {product.longDescription}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/#contato" className="btn-primary">
                  Solicitar demonstração
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/#contato" className="btn-secondary">
                  Falar com o time
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#0A1424,#070D1B)] p-12 shadow-[0_30px_120px_rgba(4,10,24,0.7)]">
              <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(122,169,216,0.25),transparent_70%)] blur-3xl" />
              <div className="relative flex aspect-square w-full max-w-[360px] items-center justify-center rounded-3xl bg-[radial-gradient(circle_at_50%_30%,#FFFFFF,#E9EEF6)] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_24px_60px_rgba(2,6,16,0.55)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pb-24 md:pb-32">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="eyebrow">Capacidades</span>
              <h2 className="display-title mt-6 text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.04]">
                O que o {product.name} entrega.
              </h2>
              <p className="mt-6 max-w-[28rem] text-base leading-8 text-white/62">
                Funcionalidades pensadas pra operação real — não para checklist
                de feature.
              </p>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-2">
              {product.capabilities.map((capability, index) => (
                <li
                  key={capability}
                  className="flex items-start gap-4 bg-[#070D1B] px-5 py-5"
                >
                  <span className="font-display text-xs text-[var(--steel-light)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-6 text-white/82">
                    {capability}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-shell pb-24 md:pb-32">
          <div className="surface-card grid gap-10 p-8 md:grid-cols-[1fr_1.1fr] md:p-12">
            <div>
              <span className="eyebrow">Para quem é</span>
              <h2 className="display-title mt-6 text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.04]">
                Indicado para
              </h2>
            </div>
            <p className="text-lg leading-8 text-white/72 md:text-xl">
              {product.forWho}
            </p>
          </div>
        </section>

        {others.length > 0 ? (
          <section className="section-shell pb-24 md:pb-32">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <span className="eyebrow">Outros produtos</span>
                <h2 className="display-title mt-5 text-[clamp(1.6rem,2.6vw,2.2rem)]">
                  Continue explorando a Suite.
                </h2>
              </div>
              <Link
                href="/#suite"
                className="text-[0.7rem] uppercase tracking-[0.24em] text-white/52 hover:text-white"
              >
                Ver tudo →
              </Link>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={`/produtos/${item.slug}`}
                  className="surface-card flex flex-col p-6 transition hover:-translate-y-1"
                >
                  <span className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                    {item.category}
                  </span>
                  <span className="mt-3 font-display text-base font-semibold text-white">
                    {item.name}
                  </span>
                  <span className="mt-2 text-xs leading-6 text-white/55">
                    {item.pitch}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>

      <WhatsAppButton />
    </div>
  );
}
