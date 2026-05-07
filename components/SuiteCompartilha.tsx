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
    image: "/assets/CompartilhaPalletControl.png",
    status: "destaque",
  },
  {
    slug: "log",
    name: "Compartilha LOG",
    category: "Logística e distribuição",
    pitch:
      "Plataforma de logística para operações multi-planta, transportadoras parceiras e visão executiva da cadeia.",
    features: ["Roteirização", "Multi-planta", "Telemetria"],
    image: "/assets/CompartilhaLOG.png",
    status: "ativo",
  },
  {
    slug: "socorro-auto",
    name: "Compartilha Socorro Auto 24H",
    category: "Assistência veicular",
    pitch:
      "Despacho, acionamento e acompanhamento de socorro automotivo em tempo real, com cobertura 24 horas.",
    features: ["Despacho ao vivo", "Geolocalização", "SLA 24/7"],
    image: "/assets/CompartilhaSocorroAuto.png",
    status: "ativo",
  },
  {
    slug: "socorro-saude",
    name: "Compartilha Socorro Saúde 24H",
    category: "Assistência médica",
    pitch:
      "Acionamento, triagem e gestão de atendimentos de saúde 24 horas com prontuário operacional integrado.",
    features: ["Triagem clínica", "Prontuário", "SLA 24/7"],
    image: "/assets/CompartilhaSocorroSaude.png",
    status: "ativo",
  },
  {
    slug: "import",
    name: "Compartilha Import",
    category: "Comércio exterior",
    pitch:
      "Importação assistida com governança documental, integração aduaneira e visibilidade de processo de ponta a ponta.",
    features: ["DI / DUIMP", "Documentação", "Compliance"],
    image: "/assets/CompartilhaImport.png",
    status: "ativo",
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
    <section id="suite" className="section-shell pb-24 md:pb-32">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
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

        <div className="relative flex items-center justify-center border-l border-white/6 bg-[linear-gradient(180deg,#0A1424,#070D1B)] p-10 md:p-14">
          <LogoSpotlight src={featured.image} alt={featured.name} size={260} />
        </div>
      </article>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {others.map((product) => (
          <article
            key={product.slug}
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
