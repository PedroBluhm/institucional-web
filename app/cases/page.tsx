import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { cases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Cases — operações que ganharam controle",
  description:
    "Recortes anonimizados de operações que ganharam controle, velocidade e previsibilidade com a Bluhmwerk e a Suite Compartilha.",
  alternates: { canonical: "/cases" },
};

export default function CasesPage() {
  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <Header />

      <main className="relative z-10 pt-32 md:pt-40">
        <section className="section-shell pb-16">
          <Link
            href="/"
            className="inline-flex items-center text-[0.7rem] uppercase tracking-[0.24em] text-white/52 transition hover:text-white"
          >
            ← Voltar para a home
          </Link>
          <span className="eyebrow mt-8">Cases Bluhmwerk</span>
          <h1 className="display-title mt-6 max-w-[18ch] text-[clamp(2.6rem,5.4vw,5rem)] leading-[0.96]">
            Operações reais. Métricas reais. Sigilo preservado.
          </h1>
          <p className="mt-7 max-w-[42rem] text-lg leading-8 text-white/68">
            Os clientes da Bluhmwerk operam em mercados onde sigilo importa. Por
            isso, apresentamos cada case com identidade preservada — mas com
            problemas, soluções e resultados verificáveis.
          </p>
        </section>

        <section className="section-shell pb-24 md:pb-32">
          <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/8 bg-white/8">
            {cases.map((useCase) => (
              <article
                key={useCase.slug}
                className="grid gap-10 bg-[#070D1B] p-8 md:grid-cols-[0.85fr_1.15fr] md:p-12"
              >
                <div>
                  <span className="text-[0.65rem] uppercase tracking-[0.24em] text-[var(--steel-light)]">
                    {useCase.industry}
                  </span>
                  <h2 className="display-title mt-5 text-[clamp(1.6rem,2.6vw,2.4rem)] leading-tight">
                    {useCase.client}
                  </h2>
                  <p className="mt-6 text-[0.7rem] uppercase tracking-[0.24em] text-white/42">
                    Solução
                  </p>
                  <p className="mt-2 font-display text-base font-semibold text-white">
                    {useCase.product}
                  </p>
                </div>

                <div className="grid gap-6">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                      Desafio
                    </p>
                    <p className="mt-3 text-[0.95rem] leading-7 text-white/72">
                      {useCase.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                      Solução implantada
                    </p>
                    <p className="mt-3 text-[0.95rem] leading-7 text-white/72">
                      {useCase.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                      Resultados
                    </p>
                    <dl className="mt-4 grid gap-4 sm:grid-cols-3">
                      {useCase.results.map((result) => (
                        <div
                          key={result.label}
                          className="rounded-2xl border border-white/8 bg-white/[0.03] p-5"
                        >
                          <dt className="font-display text-3xl font-semibold text-white">
                            {result.metric}
                          </dt>
                          <dd className="mt-2 text-xs leading-5 text-white/56">
                            {result.label}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="max-w-[34rem] text-base text-white/62">
              Sua operação tem um problema parecido? Vamos diagnosticar juntos.
            </p>
            <Link href="/#contato" className="btn-primary">
              Solicitar diagnóstico
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>

      <WhatsAppButton />
    </div>
  );
}
