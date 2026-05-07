const differentials = [
  "Desenvolvimento próprio e exclusivo",
  "Confidencialidade rigorosa de dados e processos",
  "Integração com sistemas existentes",
  "Foco em operações logísticas e controle de ativos",
  "Implantação assistida e acompanhamento contínuo",
  "Flexibilidade comercial e técnica",
];

export default function Institutional() {
  return (
    <section id="institucional" className="section-shell pb-24 md:pb-32">
      <div className="surface-card overflow-hidden p-8 md:p-12 xl:p-16">
        <div className="grid gap-12 xl:grid-cols-[1fr_1.05fr]">
          <div>
            <span className="eyebrow">Quem somos</span>
            <h2 className="display-title mt-6 text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.02]">
              Fundada em 2021, em São Paulo. Liderada por quem desenvolve.
            </h2>
            <p className="mt-7 max-w-[34rem] text-[1.02rem] leading-8 text-white/68">
              Sob a liderança do fundador e desenvolvedor principal{" "}
              <span className="text-white">Pedro Bluhm</span>, a Bluhmwerk se
              posiciona como uma desenvolvedora especializada em soluções
              digitais sob medida — com foco em eficiência operacional,
              integração sistêmica e controle de processos logísticos e
              corporativos.
            </p>
            <p className="mt-5 max-w-[34rem] text-[0.95rem] leading-8 text-white/56">
              Estrutura enxuta, estratégica e orientada à entrega: arquiteto de
              soluções, desenvolvimento pleno, suporte técnico, comercial,
              administrativo e jurídico associado. Cada projeto conta com uma
              estrutura própria de atendimento.
            </p>

            <blockquote className="mt-10 border-l-2 border-[var(--steel-light)] pl-6">
              <p className="font-display text-xl leading-8 text-white md:text-2xl">
                A Bluhmwerk não compete por volume — compete por resultado.
              </p>
            </blockquote>
          </div>

          <div className="grid content-start gap-3">
            <span className="text-[0.7rem] uppercase tracking-[0.28em] text-white/42">
              Diferenciais competitivos
            </span>
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8">
              {differentials.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-4 bg-[#070D1B] px-5 py-4"
                >
                  <span className="font-display text-xs text-[var(--steel-light)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-white/82">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                  Missão
                </p>
                <p className="mt-3 text-sm leading-6 text-white/78">
                  Soluções inteligentes que geram controle e vantagem
                  competitiva.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                  Visão
                </p>
                <p className="mt-3 text-sm leading-6 text-white/78">
                  Referência em desenvolvimento de sistemas personalizados no
                  Brasil.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                  Valores
                </p>
                <p className="mt-3 text-sm leading-6 text-white/78">
                  Confidencialidade, ética, transparência, resultado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
