import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

const capabilities = [
  {
    code: "C.01",
    title: "Logística e ativos circulantes",
    body: "Controle ponta a ponta de pallets, embalagens retornáveis, frota e equipamentos com trilha de responsabilidade por evento.",
    tags: ["Pallet Control", "Rastreabilidade", "Conferência"],
  },
  {
    code: "C.02",
    title: "Sistemas mobile integrados",
    body: "Apps Android nativos para operação de campo conectados ao backoffice em tempo real, com sincronia offline-first.",
    tags: ["Android", "Offline-first", "Sync"],
  },
  {
    code: "C.03",
    title: "Automação de processos",
    body: "Substituímos planilhas, conferências paralelas e cadastros soltos por fluxos automatizados, auditáveis e rápidos.",
    tags: ["BPM", "Auditoria", "SLA"],
  },
  {
    code: "C.04",
    title: "Integração entre sistemas",
    body: "Conectamos ERP, WMS, XML/NFe, telemetria e BI para que sinais dispersos virem decisão executiva em segundos.",
    tags: ["ERP", "XML/NFe", "BI"],
  },
];

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
    <section id="solucoes" className="section-shell pb-24 md:pb-32">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <span className="eyebrow">Nossas soluções</span>
          <h2 className="display-title mt-6 text-[clamp(2.2rem,4.2vw,4rem)] leading-[1]">
            Quatro frentes para operar com clareza e velocidade.
          </h2>
        </div>
        <p className="max-w-[36rem] text-base leading-8 text-white/62">
          Combinamos arquitetura de produto, design operacional e engenharia
          full-cycle. Cada frente existe para reduzir atrito entre quem opera,
          quem decide e quem audita.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {capabilities.map((item) => (
          <article
            key={item.code}
            className="group surface-card flex h-full flex-col p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xs tracking-[0.32em] text-[var(--steel-light)]">
                {item.code}
              </span>
              <span
                className="text-white/30 transition group-hover:translate-x-1 group-hover:text-white/80"
                aria-hidden="true"
              >
                →
              </span>
            </div>

            <div className="marker-line my-7" />

            <h3 className="font-display text-2xl font-semibold leading-tight text-white">
              {item.title}
            </h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-white/60">
              {item.body}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/55"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[40rem]">
          <span className="eyebrow">Suite Compartilha</span>
          <h2 className="display-title mt-6 text-[clamp(2.2rem,4.2vw,4rem)] leading-[1]">
            Cinco produtos. Um mesmo paradigma: modernização e corte de custos.
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
