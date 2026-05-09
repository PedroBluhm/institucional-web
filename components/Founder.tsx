import { site } from "@/lib/site";

export default function Founder() {
  return (
    <section id="lideranca" className="section-shell pb-24 md:pb-32">
      <div className="surface-card grid gap-10 overflow-hidden p-8 md:p-12 xl:grid-cols-[0.4fr_0.6fr] xl:p-16">
        <div className="relative">
          <div className="aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,#0A1424,#070D1B)]">
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-display text-[8rem] font-semibold text-white/8">
                PB
              </span>
            </div>
          </div>
          <div className="absolute -bottom-4 left-4 rounded-2xl border border-white/10 bg-[#0E1A2C]/95 px-4 py-3 shadow-[0_18px_44px_rgba(2,6,15,0.6)] backdrop-blur-xl">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/42">
              Liderança técnica
            </p>
            <p className="mt-1 font-display text-base font-semibold text-white">
              {site.founder}
            </p>
          </div>
        </div>

        <div>
          <span className="eyebrow">Quem lidera</span>
          <h2 className="display-title mt-6 text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.02]">
            Tecnologia construída por quem assina o código.
          </h2>
          <p className="mt-7 text-[1.02rem] leading-8 text-white/72">
            <span className="text-white">{site.founder}</span> é fundador e
            desenvolvedor principal da Bluhmwerk. Cada projeto que entra na
            casa passa pela arquitetura dele — do diagnóstico operacional ao
            deploy em produção. Essa proximidade é proposital: senioridade
            técnica acessível, decisões rápidas e ownership real do que vai
            pro ar.
          </p>
          <blockquote className="mt-8 border-l-2 border-[var(--steel-light)] pl-6">
            <p className="font-display text-lg leading-8 text-white md:text-xl">
              &ldquo;A gente não compete por volume — compete por resultado.
              Cada cliente tem uma estrutura própria de atendimento porque
              cada operação é única.&rdquo;
            </p>
            <footer className="mt-4 text-xs uppercase tracking-[0.24em] text-white/42">
              {site.founder}, fundador
            </footer>
          </blockquote>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                Time
              </p>
              <p className="mt-3 text-sm leading-6 text-white/78">
                Arquiteto, dev pleno, estagiário, comercial e jurídico
                associado.
              </p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                Modelo
              </p>
              <p className="mt-3 text-sm leading-6 text-white/78">
                Estrutura própria por projeto, com SLA dedicado.
              </p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                Sigilo
              </p>
              <p className="mt-3 text-sm leading-6 text-white/78">
                NDA padrão, escritório jurídico associado, propriedade
                intelectual protegida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
