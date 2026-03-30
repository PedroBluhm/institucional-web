import Image from "next/image";
import Link from "next/link";

const modules = [
  "Operadores",
  "Plantas",
  "Movimentacoes",
  "Conferencias",
  "Ordens de servico",
  "Relatorios",
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-28 md:pt-32">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="hero-grid" />

      <div className="section-shell relative z-10 flex min-h-[calc(100svh-7rem)] items-center py-12 md:py-16">
        <div className="grid w-full gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
          <div className="max-w-[42rem]">
            <div className="section-kicker">
              <Image
                src="/logo2.png"
                alt="Pallet Control"
                width={88}
                height={20}
                className="h-5 w-auto object-contain opacity-90"
              />
              <span>Software, UX e IA aplicada a operacoes</span>
            </div>

            <h1 className="display-title mt-8 text-[clamp(3.4rem,9vw,7.4rem)] leading-[0.92] tracking-[-0.05em]">
              Software que deixa a operacao clara, rapida e controlada.
            </h1>

            <p className="mt-7 max-w-[38rem] text-lg leading-8 text-white/70 md:text-xl">
              Criamos produtos digitais premium para empresas que precisam
              reduzir atrito entre sistema, campo e decisao. Da estrategia ao
              build, entregamos software com ownership real.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#contato" className="primary-link justify-center">
                Falar com o time
              </Link>
              <Link href="#produtos" className="secondary-link justify-center">
                Conhecer o Pallet Control
              </Link>
            </div>

            <div className="mt-12 grid max-w-[36rem] gap-4 sm:grid-cols-3">
              <div className="glass-panel p-5">
                <p className="text-xs uppercase tracking-[0.26em] text-white/45">
                  Design
                </p>
                <p className="mt-4 text-2xl font-semibold text-white">
                  Fluxos reais
                </p>
              </div>
              <div className="glass-panel p-5">
                <p className="text-xs uppercase tracking-[0.26em] text-white/45">
                  Engenharia
                </p>
                <p className="mt-4 text-2xl font-semibold text-white">
                  Build end-to-end
                </p>
              </div>
              <div className="glass-panel p-5">
                <p className="text-xs uppercase tracking-[0.26em] text-white/45">
                  Controle
                </p>
                <p className="mt-4 text-2xl font-semibold text-white">
                  Dados acionaveis
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-14 hidden rounded-[24px] border border-white/10 bg-[#08101d]/85 px-5 py-4 shadow-[0_22px_60px_rgba(3,8,18,0.45)] backdrop-blur-xl md:block">
              <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                Time alinhado
              </p>
              <p className="mt-3 text-xl font-semibold text-white">
                Produto + UX + Eng + QA
              </p>
            </div>

            <div className="absolute -right-4 bottom-16 hidden rounded-[24px] border border-white/10 bg-[#0f1729]/85 px-5 py-4 shadow-[0_22px_60px_rgba(3,8,18,0.45)] backdrop-blur-xl md:block">
              <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                Pallet Control
              </p>
              <p className="mt-3 text-xl font-semibold text-white">
                Ativos logisticos em tempo real
              </p>
            </div>

            <div className="glass-panel relative overflow-hidden p-4 shadow-[0_30px_120px_rgba(7,13,35,0.55)] md:p-5">
              <div className="flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                    Dashboard
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Operacao conectada, de ponta a ponta
                  </p>
                </div>
                <span className="rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1 text-xs font-medium tracking-[0.2em] text-emerald-100 uppercase">
                  Online
                </span>
              </div>

              <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-[#090d18]">
                <Image
                  src="/card1.png"
                  alt="Painel do produto Pallet Control"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {modules.map((module) => (
                  <div
                    key={module}
                    className="rounded-[22px] border border-white/8 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/72"
                  >
                    {module}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}