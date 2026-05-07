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

export default function Capabilities() {
  return (
    <section id="capacidades" className="section-shell pb-24 md:pb-32">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <span className="eyebrow">O que construímos</span>
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
    </section>
  );
}
