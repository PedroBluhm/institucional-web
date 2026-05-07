import Image from "next/image";
import Link from "next/link";
import Capabilities from "@/components/Capabilities";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Institutional from "@/components/Institutional";
import Manifesto from "@/components/Manifesto";
import Method from "@/components/Method";
import SuiteCompartilha from "@/components/SuiteCompartilha";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <Header />

      <main className="relative z-10">
        <Hero />
        <Manifesto />
        <Capabilities />
        <SuiteCompartilha />
        <Method />
        <Institutional />

        <section id="contato" className="section-shell pb-20 md:pb-24">
          <div className="surface-card grid gap-10 overflow-hidden p-8 md:p-12 xl:grid-cols-[0.95fr_1.05fr] xl:p-14">
            <div>
              <span className="eyebrow">Vamos construir</span>
              <h2 className="display-title mt-6 text-[clamp(2.4rem,4.4vw,4.4rem)] leading-[0.98]">
                A próxima camada digital da sua operação.
              </h2>
              <p className="mt-7 max-w-[32rem] text-base leading-8 text-white/68">
                Se você precisa de um produto novo, da evolução de um sistema
                atual ou de uma integração que ninguém entrega, vamos desenhar
                isso juntos.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:comercial@bluhmwerk.com"
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition hover:border-[var(--steel-light)]/60 hover:bg-white/[0.06]"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                    Comercial
                  </p>
                  <p className="mt-3 font-display text-lg font-semibold text-white">
                    comercial@bluhmwerk.com
                  </p>
                </a>
                <a
                  href="tel:+5511921045407"
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition hover:border-[var(--steel-light)]/60 hover:bg-white/[0.06]"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                    Telefone
                  </p>
                  <p className="mt-3 font-display text-lg font-semibold text-white">
                    +55 11 92104-5407
                  </p>
                </a>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 sm:col-span-2">
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                    Escritório
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/82">
                    São Paulo — SP, Brasil
                    <br />
                    <span className="text-white/52">
                      Atendimento remoto e presencial sob agendamento
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/8">
        <div className="section-shell py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <Image
                  src="/logo-mark.svg"
                  alt="Bluhmwerk"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="font-display text-base font-semibold tracking-[-0.02em] text-white">
                  Bluhmwerk Tecnologia
                </span>
              </Link>
              <p className="mt-4 max-w-[26rem] text-sm leading-7 text-white/52">
                Inteligência que rastreia, tecnologia que entrega. Software sob
                medida para operações que não podem parar.
              </p>
            </div>

            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                Navegação
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/72">
                <li>
                  <Link href="#manifesto" className="hover:text-white">
                    Manifesto
                  </Link>
                </li>
                <li>
                  <Link href="#capacidades" className="hover:text-white">
                    Capacidades
                  </Link>
                </li>
                <li>
                  <Link href="#suite" className="hover:text-white">
                    Suite Compartilha
                  </Link>
                </li>
                <li>
                  <Link href="#metodo" className="hover:text-white">
                    Método
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/42">
                Contato
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/72">
                <li>
                  <a
                    href="mailto:comercial@bluhmwerk.com"
                    className="hover:text-white"
                  >
                    comercial@bluhmwerk.com
                  </a>
                </li>
                <li>
                  <a href="tel:+5511921045407" className="hover:text-white">
                    +55 11 92104-5407
                  </a>
                </li>
                <li>São Paulo — SP, Brasil</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
            <p>© 2021-{new Date().getFullYear()} Bluhmwerk Tecnologia Ltda. Todos os direitos reservados.</p>
            <p className="font-display tracking-[0.04em]">
              Se o seu processo é único, sua tecnologia também deve ser.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
