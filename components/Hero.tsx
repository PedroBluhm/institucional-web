import Image from "next/image";
import Link from "next/link";

const indicators = [
  { value: "2021", label: "Fundada em São Paulo" },
  { value: "5+", label: "Verticais Compartilha" },
  { value: "24/7", label: "Operações que não param" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-32">
      <div className="hero-orb hero-orb-a" aria-hidden="true" />
      <div className="hero-orb hero-orb-b" aria-hidden="true" />

      <div className="section-shell relative z-10 pb-24 md:pb-32">
        <div className="grid items-end gap-10 xl:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow">Bluhmwerk Tecnologia · São Paulo</span>

            <h1 className="display-title mt-7 text-[clamp(3rem,8vw,6.6rem)] leading-[0.93]">
              Inteligência <span className="text-[var(--steel-light)]">que rastreia,</span>{" "}
              tecnologia <span className="text-[var(--signal)]">que entrega.</span>
            </h1>

            <p className="mt-8 max-w-[36rem] text-lg leading-8 text-white/72 md:text-xl">
              Mais do que desenvolver sistemas, entregamos controle, eficiência e
              inteligência para o seu negócio. Software sob medida para operações
              logísticas e corporativas que não podem parar.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="#solucoes" className="btn-secondary">
                Conheça nossas soluções próprias
              </Link>
              <Link href="#contato" className="btn-primary">
                Entre em contato
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-14 grid max-w-[32rem] grid-cols-3 gap-6">
              {indicators.map((item) => (
                <div key={item.label} className="border-l border-white/12 pl-4">
                  <p className="font-display text-2xl font-semibold text-white md:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/52">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 hidden h-24 w-24 rounded-full border border-white/10 md:block" aria-hidden="true">
              <Image
                src="/logo-mark.svg"
                alt=""
                width={96}
                height={96}
                className="h-full w-full p-3 opacity-80"
              />
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0A1424] shadow-[0_40px_140px_rgba(4,10,24,0.7)]">
              <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-5 py-3">
                <span className="h-2 w-2 rounded-full bg-[var(--alert)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--warn)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--signal)]" />
                <span className="ml-3 text-[0.7rem] uppercase tracking-[0.28em] text-white/42">
                  pallet-control · operação ao vivo
                </span>
              </div>

              <div className="relative aspect-[5/4] w-full">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/decorative/dashboard-mock.svg"
                  preload="metadata"
                >
                  <source src="/hero.mp4" type="video/mp4" />
                  <source src="/hero.webm" type="video/webm" />
                </video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040810] via-transparent to-transparent" />
              </div>

              <div className="grid grid-cols-3 divide-x divide-white/8 border-t border-white/8 text-center">
                <div className="px-3 py-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">SLA</p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">98,6%</p>
                </div>
                <div className="px-3 py-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">Ativos</p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">12.847</p>
                </div>
                <div className="px-3 py-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">Sync</p>
                  <p className="mt-1 font-display text-lg font-semibold text-[var(--signal)]">Online</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 right-4 hidden rounded-2xl border border-white/10 bg-[#0E1A2C]/95 px-4 py-3 shadow-[0_18px_44px_rgba(2,6,15,0.6)] backdrop-blur-xl md:block">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/42">
                Resultado
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Operação visível em tempo real
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
