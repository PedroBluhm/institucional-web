import Link from "next/link";
import { cases } from "@/lib/cases";

export default function CasesPreview() {
  return (
    <section id="cases" className="section-shell pb-24 md:pb-32">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <span className="eyebrow">Resultados</span>
          <h2 className="display-title mt-6 text-[clamp(2.2rem,4.2vw,4rem)] leading-[1]">
            Operações reais. Métricas reais.
          </h2>
        </div>
        <p className="max-w-[36rem] text-base leading-8 text-white/62">
          Não competimos por volume — competimos por resultado. Abaixo, três
          recortes anonimizados de operações que ganharam controle, velocidade
          e previsibilidade com a Bluhmwerk.
        </p>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {cases.map((useCase) => (
          <article
            key={useCase.slug}
            className="surface-card flex flex-col p-7 transition hover:-translate-y-1"
          >
            <span className="text-[0.65rem] uppercase tracking-[0.24em] text-[var(--steel-light)]">
              {useCase.industry}
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-white">
              {useCase.client}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/60">
              {useCase.challenge}
            </p>

            <div className="marker-line my-7" />

            <dl className="grid grid-cols-3 gap-3">
              {useCase.results.map((result) => (
                <div key={result.label}>
                  <dt className="font-display text-2xl font-semibold text-white">
                    {result.metric}
                  </dt>
                  <dd className="mt-1 text-[0.7rem] leading-5 text-white/52">
                    {result.label}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-[0.7rem] uppercase tracking-[0.24em] text-white/42">
              Solução · {useCase.product}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/cases" className="btn-secondary">
          Ver todos os cases
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
