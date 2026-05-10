const principles = [
  {
    label: "Personalização real",
    body: "Cada cliente recebe um sistema desenhado para sua operação. Nada de soluções genéricas.",
  },
  {
    label: "Independência operacional",
    body: "Modelos de contratação flexíveis para acompanhar seu ritmo, escala e governança.",
  },
  {
    label: "Suporte dedicado",
    body: "Estrutura própria por projeto: resposta ágil, evolução contínua e SLA definido.",
  },
];

export default function Manifesto() {
  return (
    <section id="quem-somos" className="section-shell py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <span className="eyebrow">Quem somos</span>
          <h2 className="display-title mt-6 text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.98]">
            Se o seu processo é único, sua tecnologia também deve ser.
          </h2>
        </div>
        <p className="max-w-[40rem] text-lg leading-8 text-white/68">
          A Bluhmwerk nasceu em 2021 com um propósito específico: transformar
          operações empresariais por meio de tecnologia aplicada, inteligente e
          personalizada. Não vendemos software de prateleira — construímos a
          camada digital que organiza, integra e dá previsibilidade para o
          negócio rodar.
        </p>
      </div>

      <div className="mt-16 mb-10">
        <span className="eyebrow">Missão e valores</span>
      </div>

      <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/8 bg-white/8 lg:grid-cols-3">
        {principles.map((principle, index) => (
          <article
            key={principle.label}
            className="bg-[#070D1B] p-8 transition hover:bg-[#0B1426]"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-xs text-[var(--steel-light)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs uppercase tracking-[0.24em] text-white/42">
                Valor
              </span>
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-white">
              {principle.label}
            </h3>
            <p className="mt-4 text-[0.95rem] leading-7 text-white/62">
              {principle.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
