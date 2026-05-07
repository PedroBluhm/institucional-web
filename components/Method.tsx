const steps = [
  {
    code: "01",
    title: "Diagnóstico operacional",
    body: "Mapeamos fluxos, exceções, handoffs e indicadores. Entendemos onde a operação perde tempo, dinheiro ou controle antes de propor qualquer linha de código.",
  },
  {
    code: "02",
    title: "Desenvolvimento personalizado",
    body: "Arquitetura, design e engenharia trabalhando no mesmo ritmo. Sistemas pensados para a realidade do cliente, sem soluções genéricas.",
  },
  {
    code: "03",
    title: "Implantação assistida",
    body: "Treinamento remoto ou presencial, integração com sistemas existentes e go-live acompanhado por equipe técnica dedicada.",
  },
  {
    code: "04",
    title: "Suporte contínuo com SLA",
    body: "Estrutura própria de atendimento por projeto, evolução contínua do sistema e proximidade com a operação no dia a dia.",
  },
];

export default function Method() {
  return (
    <section id="metodo" className="section-shell pb-24 md:pb-32">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <span className="eyebrow">Método</span>
          <h2 className="display-title mt-6 text-[clamp(2.2rem,4.2vw,4rem)] leading-[1]">
            Tecnologia não é apenas software — é parceria.
          </h2>
          <p className="mt-6 max-w-[28rem] text-base leading-8 text-white/62">
            Cada cliente é tratado como um projeto único. Quatro etapas pensadas
            para entregar resultado sem ruído, com a operação acompanhando de
            perto desde o primeiro briefing.
          </p>
        </div>

        <ol className="relative space-y-3">
          <span
            className="absolute left-[1.4rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent md:block"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <li
              key={step.code}
              className="surface-card flex flex-col gap-4 p-6 md:flex-row md:items-start md:gap-8 md:p-8"
            >
              <div className="relative flex items-center gap-3 md:flex-col md:items-start">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-[#0A1424] font-display text-base font-semibold text-[var(--steel-pale)]">
                  {step.code}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold leading-tight text-white md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/62 md:text-[0.95rem]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
