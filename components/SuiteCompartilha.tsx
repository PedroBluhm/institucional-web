import Image from "next/image";

type Product = {
  slug: string;
  name: string;
  category: string;
  pitch: string;
  features: string[];
  image: string;
  status: "destaque" | "ativo";
};

const products: Product[] = [
  {
    slug: "pallet-control",
    name: "Compartilha Pallet Control",
    category: "Ativos logísticos",
    pitch:
      "Controle de pallets, embalagens retornáveis e ativos circulantes com visão ponta a ponta. Operadores, plantas, movimentações de envio e retorno, importação XML/NFe, conferências e relatórios — tudo em um produto só.",
    features: [
      "Operadores e plantas",
      "Envio e retorno",
      "Importação XML / NFe",
      "Conferências e ordens de serviço",
      "Relatórios operacionais",
    ],
    image: "/products/compartilha-pallet.svg",
    status: "destaque",
  },
  {
    slug: "log",
    name: "Compartilha LOG",
    category: "Logística e distribuição",
    pitch:
      "Plataforma de logística para operações multi-planta, transportadoras parceiras e visão executiva da cadeia.",
    features: ["Roteirização", "Multi-planta", "Telemetria"],
    image: "/products/compartilha-log.svg",
    status: "ativo",
  },
  {
    slug: "socorro-auto",
    name: "Compartilha Socorro Auto 24H",
    category: "Assistência veicular",
    pitch:
      "Despacho, acionamento e acompanhamento de socorro automotivo em tempo real, com cobertura 24 horas.",
    features: ["Despacho ao vivo", "Geolocalização", "SLA 24/7"],
    image: "/products/compartilha-socorro-auto.svg",
    status: "ativo",
  },
  {
    slug: "socorro-saude",
    name: "Compartilha Socorro Saúde 24H",
    category: "Assistência médica",
    pitch:
      "Acionamento, triagem e gestão de atendimentos de saúde 24 horas com prontuário operacional integrado.",
    features: ["Triagem clínica", "Prontuário", "SLA 24/7"],
    image: "/products/compartilha-socorro-saude.svg",
    status: "ativo",
  },
  {
    slug: "import",
    name: "Compartilha Import",
    category: "Comércio exterior",
    pitch:
      "Importação assistida com governança documental, integração aduaneira e visibilidade de processo de ponta a ponta.",
    features: ["DI / DUIMP", "Documentação", "Compliance"],
    image: "/products/compartilha-import.svg",
    status: "ativo",
  },
];

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

      <article
        className="surface-card mt-12 grid gap-0 overflow-hidden lg:grid-cols-[1.05fr_0.95fr]"
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

          <ul className="mt-10 grid gap-2 sm:grid-cols-2">
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
        </div>

        <div className="relative min-h-[320px] border-l border-white/6 bg-[#0A1424]">
          <Image
            src={featured.image}
            alt={`Visual do produto ${featured.name}`}
            fill
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent to-[#0A1424]/40" />
        </div>
      </article>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {others.map((product) => (
          <article
            key={product.slug}
            className="surface-card group flex flex-col overflow-hidden transition hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b border-white/6 bg-[#0A1424]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
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
              <div className="mt-5 flex flex-wrap gap-1.5">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-white/55"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
