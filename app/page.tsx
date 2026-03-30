import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioCard from "@/components/PortfolioCard";

type EcosystemItem =
  | { type: "image"; src: string; alt: string }
  | { type: "text"; label: string };

const services = [
  {
    title: "Produto e estrategia",
    description:
      "Traduzimos problemas operacionais em backlog claro, prioridades reais e software que nasce com contexto de negocio.",
  },
  {
    title: "UX para ambientes criticos",
    description:
      "Desenhamos jornadas para operadores, plantas, transportadoras e gestores com foco em fluidez, menos cliques e menor retrabalho.",
  },
  {
    title: "Engenharia full-cycle",
    description:
      "Construimos front-end, back-end, integracoes e observabilidade com ownership real, da concepcao ao go-live.",
  },
  {
    title: "Dados e integracoes",
    description:
      "Conectamos ERP, WMS, XML/NFe, rastreamento e relatorios para transformar sinais dispersos em decisao rapida.",
  },
];

const pains = [
  {
    title: "Ativos sem rastreabilidade",
    text: "Pallets, embalagens retornaveis e equipamentos circulam entre plantas e clientes sem trilha confiavel de responsabilidade.",
  },
  {
    title: "Operacao manual demais",
    text: "Conferencias paralelas, cadastros soltos e planilhas criam atraso em envio, retorno, auditoria e fechamento.",
  },
  {
    title: "Sistemas que nao conversam",
    text: "ERP, XML, processo de campo e visao gerencial ficam separados, gerando retrabalho e pouca previsibilidade.",
  },
];

const playbook = [
  {
    step: "01",
    title: "Imersao operacional",
    description:
      "Mapeamos fluxos, excecoes, handoffs e indicadores para entender onde a operacao perde tempo, dinheiro ou controle.",
  },
  {
    step: "02",
    title: "Arquitetura da solucao",
    description:
      "Definimos jornadas, modulos, integracoes e governanca para garantir escala sem abrir mao da simplicidade.",
  },
  {
    step: "03",
    title: "Build orientado a entrega",
    description:
      "Montamos o produto em ciclos curtos com design, engenharia, QA e checkpoints de negocio no mesmo ritmo.",
  },
  {
    step: "04",
    title: "Go-live e evolucao",
    description:
      "Entramos em producao com leitura de uso, suporte operacional e uma camada continua de melhoria.",
  },
];

const products = [
  {
    eyebrow: "Produto proprio",
    title: "Pallet Control",
    description:
      "Controle de ativos logisticos com visao ponta a ponta para pallets, embalagens retornaveis e movimentacoes criticas.",
    features: [
      "Operadores e plantas",
      "Movimentacoes de envio e retorno",
      "Importacao XML / NFe",
      "Conferencias e ordens de servico",
      "Relatorios operacionais",
    ],
    image: "/card1.png",
    accent: "#8ef5d0",
    cta: "Produto em destaque",
  },
  {
    eyebrow: "Solucoes sob medida",
    title: "Portais operacionais",
    description:
      "Experiencias web e mobile para times internos, parceiros e operacao de campo trabalharem no mesmo fluxo.",
    features: [
      "Dashboards de performance",
      "Apps de conferencia",
      "Permissao por perfil",
      "Fluxos conectados ao backoffice",
    ],
    image: "/card2.png",
    accent: "#6ad8ff",
    cta: "Projetos customizados",
  },
  {
    eyebrow: "Camada de integracao",
    title: "Control towers de dados",
    description:
      "Camadas de integracao, alertas e visibilidade em tempo real para operacoes que precisam decidir rapido.",
    features: [
      "Conectores ERP e WMS",
      "Alertas de excecao",
      "Visao multi-planta",
      "KPIs acionaveis",
    ],
    image: "/card3.png",
    accent: "#ffad75",
    cta: "Stacks conectadas",
  },
];

const useCases = [
  {
    title: "Envio e retorno com prova operacional",
    text: "Cada movimentacao pode nascer de XML, fluxo manual assistido ou conferencia dedicada, com historico por evento e responsavel.",
  },
  {
    title: "Gestao multi-planta sem perder contexto",
    text: "Organizamos operacao, regras e visibilidade por planta, transportadora, cliente e tipo de ativo com leitura clara.",
  },
  {
    title: "Backoffice e campo na mesma tela",
    text: "Ordens, relatorios, pendencias e configuracoes deixam de viver em sistemas paralelos e passam a operar como um unico produto.",
  },
];

const ecosystem: EcosystemItem[] = [
  { type: "image", src: "/logo1.png", alt: "Bluhmwerk" },
  { type: "image", src: "/logo2.png", alt: "Pallet Control" },
  { type: "text", label: "ERP & WMS" },
  { type: "text", label: "XML / NFe" },
  { type: "text", label: "BI em tempo real" },
  { type: "text", label: "Apps operacionais" },
];

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <Header />

      <main>
        <Hero />

        <section className="border-y border-white/8 bg-black/25 py-6 md:py-8">
          <div className="section-shell">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="max-w-[48rem] text-sm uppercase tracking-[0.24em] text-white/55">
                Ecossistemas que conectamos para produtos de alta operacao
              </p>
              <p className="max-w-[32rem] text-sm text-white/50">
                Arquitetura, interface e dados desenhados para reduzir atrito
                entre campo, escritorio e tomada de decisao.
              </p>
            </div>

            <div className="overflow-hidden">
              <div className="trust-track flex min-w-max items-center gap-4 py-2 md:gap-6">
                {[...ecosystem, ...ecosystem].map((item, index) => (
                  <div
                    key={`${item.type}-${index}`}
                    className="flex h-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 backdrop-blur-xl"
                  >
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={140}
                        height={32}
                        className="h-8 w-auto object-contain opacity-90"
                      />
                    ) : (
                      <span className="text-sm font-medium tracking-[0.18em] text-white/72 uppercase">
                        {item.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section-shell py-24 md:py-32">
          <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-[46rem]">
              <span className="section-kicker">Sobre a Bluhmwerk</span>
              <h2 className="display-title mt-6 max-w-[12ch] text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.96]">
                Nascidos na operacao. Construidos para escalar.
              </h2>
              <p className="mt-6 max-w-[42rem] text-lg leading-8 text-white/72">
                Somos uma empresa de desenvolvimento de software focada em
                produtos digitais que precisam funcionar sob pressao, com gente
                real, processos complexos e necessidade de visibilidade
                imediata.
              </p>
              <p className="mt-5 max-w-[42rem] text-base leading-8 text-white/58">
                Em vez de entregar apenas telas, desenhamos a camada digital que
                organiza operacoes, integra sistemas, melhora a experiencia de
                uso e cria uma base mais confiavel para crescer. O resultado e
                um software que conversa com o negocio desde o primeiro deploy.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="glass-panel p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                    Ritmo
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-white">
                    Descobrir
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Entender primeiro, acelerar depois.
                  </p>
                </div>
                <div className="glass-panel p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                    Ownership
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-white">
                    Construir
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Produto, engenharia e dados no mesmo fluxo.
                  </p>
                </div>
                <div className="glass-panel p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                    Escala
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-white">
                    Sustentar
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Evolucao continua com leitura operacional.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-panel relative min-h-[420px] overflow-hidden sm:row-span-2">
                <Image
                  src="/card2.png"
                  alt="Visual de dashboard operacional"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/35 to-transparent p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/48">
                    UX para ambientes criticos
                  </p>
                  <p className="mt-3 max-w-[20rem] text-xl font-semibold text-white">
                    Interfaces desenhadas para decisao rapida, nao para
                    enfeite.
                  </p>
                </div>
              </div>

              <div className="glass-panel relative min-h-[202px] overflow-hidden">
                <Image
                  src="/card3.png"
                  alt="Mapa de integracoes e indicadores"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="glass-panel p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-white/45">
                  O que entregamos
                </p>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-white/68">
                  <li>Arquitetura de produto conectada ao negocio</li>
                  <li>Design de fluxos para operadores e gestores</li>
                  <li>Back-end confiavel e interfaces performaticas</li>
                  <li>Governanca de dados, eventos e relatorios</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pb-24 md:pb-32">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-6 md:p-10">
            <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="section-kicker">Principais dores</span>
                <h2 className="display-title mt-6 max-w-[11ch] text-[clamp(2.2rem,4vw,4rem)] leading-[1]">
                  O que trava sua operacao hoje?
                </h2>
                <p className="mt-6 max-w-[34rem] text-base leading-8 text-white/62">
                  Quando o software nao acompanha a realidade da rua, do patio
                  ou da planta, a operacao compensa no improviso. E o improviso
                  quase sempre custa controle.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {pains.map((pain) => (
                  <article key={pain.title} className="glass-panel p-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-white/42">
                      Diagnostico
                    </p>
                    <h3 className="mt-5 text-2xl font-semibold text-white">
                      {pain.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/60">
                      {pain.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="section-shell pb-24 md:pb-32">
          <div className="mb-10 max-w-[52rem]">
            <span className="section-kicker">Como atuamos</span>
            <h2 className="display-title mt-6 text-[clamp(2.2rem,4vw,4rem)] leading-[1]">
              Entrega senior, ownership real e software que funciona no mundo
              fisico.
            </h2>
            <p className="mt-6 max-w-[40rem] text-base leading-8 text-white/62">
              Nosso trabalho combina pensamento de produto, design operacional e
              engenharia orientada a resultado. Cada camada existe para reduzir
              atrito e aumentar clareza.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="glass-panel group min-h-[260px] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-8 h-px w-full bg-gradient-to-r from-white/40 to-transparent" />
                <h3 className="max-w-[12ch] text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/60">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="metodo" className="section-shell pb-24 md:pb-32">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <span className="section-kicker">Nosso playbook</span>
              <h2 className="display-title mt-6 max-w-[12ch] text-[clamp(2.2rem,4vw,4rem)] leading-[1]">
                Um metodo simples para problemas complexos.
              </h2>
              <p className="mt-6 max-w-[32rem] text-base leading-8 text-white/62">
                Nao vendemos processo pelo processo. Estruturamos uma forma de
                trabalhar que deixa claro o que estamos resolvendo, como vamos
                construir e quando cada entrega gera valor.
              </p>
              <Link href="#contato" className="primary-link mt-8 inline-flex">
                Solicitar um diagnostico
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {playbook.map((item) => (
                <article key={item.step} className="glass-panel p-6 md:p-7">
                  <div className="flex items-end justify-between gap-4">
                    <span className="text-sm uppercase tracking-[0.26em] text-white/40">
                      Etapa {item.step}
                    </span>
                    <span className="text-xs uppercase tracking-[0.24em] text-white/28">
                      Bluhmwerk
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="produtos" className="section-shell pb-24 md:pb-32">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[46rem]">
              <span className="section-kicker">Produtos e plataformas</span>
              <h2 className="display-title mt-6 text-[clamp(2.2rem,4vw,4.2rem)] leading-[1]">
                Solucoes que nascem de problemas reais e operam com clareza.
              </h2>
            </div>
            <p className="max-w-[29rem] text-base leading-8 text-white/62">
              O Pallet Control e o nosso destaque em ativos logisticos, mas a
              mesma abordagem pode escalar para novas verticais, fluxos e
              ecossistemas digitais.
            </p>
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            {products.map((product) => (
              <PortfolioCard key={product.title} {...product} />
            ))}
          </div>
        </section>

        <section id="resultados" className="section-shell pb-24 md:pb-32">
          <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="section-kicker">Casos de uso</span>
              <h2 className="display-title mt-6 max-w-[11ch] text-[clamp(2.2rem,4vw,4rem)] leading-[1]">
                Projetado para o ritmo da operacao.
              </h2>
              <p className="mt-6 max-w-[33rem] text-base leading-8 text-white/62">
                A experiencia que desenhamos precisa servir a quem envia,
                confere, retorna, acompanha e decide. Por isso o produto nasce
                com contexto multi-time e multi-canal.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="glass-panel p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/42">
                    Time base
                  </p>
                  <p className="mt-5 text-4xl font-semibold text-white">5</p>
                  <p className="mt-3 text-sm leading-7 text-white/58">
                    Product, UX, engenharia full-stack, integracoes e QA no
                    mesmo fluxo.
                  </p>
                </div>
                <div className="glass-panel p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/42">
                    Norte
                  </p>
                  <p className="mt-5 text-4xl font-semibold text-white">
                    Visibilidade
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/58">
                    Menos pontos cegos entre patio, transporte e backoffice.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {useCases.map((useCase) => (
                <article key={useCase.title} className="glass-panel p-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-white/42">
                    Aplicacao
                  </p>
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {useCase.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {useCase.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section-shell pb-16 md:pb-20">
          <div className="rounded-[40px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_120px_rgba(6,10,28,0.45)] md:p-10 xl:p-14">
            <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr]">
              <div className="max-w-[36rem]">
                <span className="section-kicker">Vamos construir</span>
                <h2 className="display-title mt-6 max-w-[10ch] text-[clamp(2.4rem,4.2vw,4.6rem)] leading-[0.98]">
                  A proxima camada digital da sua operacao.
                </h2>
                <p className="mt-6 max-w-[30rem] text-base leading-8 text-white/68">
                  Se voce precisa de um produto novo, de uma plataforma
                  operacional mais clara ou de evolucao para o Pallet Control,
                  a gente pode desenhar isso junto.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="glass-panel p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-white/42">
                      Email
                    </p>
                    <p className="mt-4 text-lg font-semibold text-white">
                      contato@bluhmwerk.com
                    </p>
                  </div>
                  <div className="glass-panel p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-white/42">
                      Foco
                    </p>
                    <p className="mt-4 text-lg font-semibold text-white">
                      Software, logistica e IA aplicada
                    </p>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="section-shell flex flex-col gap-4 border-t border-white/8 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/logo1.png"
            alt="Bluhmwerk"
            width={122}
            height={30}
            className="h-7 w-auto object-contain"
          />
          <span>Software que organiza operacoes complexas.</span>
        </div>
        <p>© 2026 Bluhmwerk. All rights reserved.</p>
      </footer>
    </div>
  );
}