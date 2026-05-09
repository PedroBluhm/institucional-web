export type Product = {
  slug: string;
  name: string;
  category: string;
  pitch: string;
  longDescription: string;
  features: string[];
  capabilities: string[];
  forWho: string;
  image: string;
  status: "destaque" | "ativo";
};

export const products: Product[] = [
  {
    slug: "pallet-control",
    name: "Compartilha Pallet Control",
    category: "Ativos logísticos",
    pitch:
      "Controle de pallets, embalagens retornáveis e ativos circulantes com visão ponta a ponta.",
    longDescription:
      "Plataforma para empresas que precisam controlar a circulação de pallets, embalagens retornáveis e ativos físicos entre plantas, transportadoras e clientes. Cada movimentação gera trilha auditável por evento, responsável e documento fiscal — sem planilhas paralelas.",
    features: [
      "Operadores e plantas",
      "Movimentações de envio e retorno",
      "Importação XML / NFe",
      "Conferências e ordens de serviço",
      "Relatórios operacionais",
    ],
    capabilities: [
      "Multi-planta com governança por unidade",
      "Importação automática de NFe e CT-e",
      "Conferência guiada com checagem por SKU/lote",
      "Ordem de serviço com SLA configurável",
      "Dashboard de ativos em circulação em tempo real",
      "Histórico completo de movimentação por ativo",
    ],
    forWho:
      "Indústrias, operadores logísticos e distribuidores que trabalham com ativos retornáveis e precisam de prova de circulação.",
    image: "/assets/CompartilhaPalletControl.png",
    status: "destaque",
  },
  {
    slug: "log",
    name: "Compartilha LOG",
    category: "Logística e distribuição",
    pitch:
      "Plataforma de logística para operações multi-planta, transportadoras parceiras e visão executiva da cadeia.",
    longDescription:
      "Solução para operações de distribuição que precisam orquestrar múltiplas plantas, frotas próprias e parceiras, com visibilidade executiva da cadeia logística completa.",
    features: ["Roteirização", "Multi-planta", "Telemetria"],
    capabilities: [
      "Planejamento de rotas multi-CD",
      "Alocação dinâmica de frota e motoristas",
      "Integração com telemetria veicular",
      "Dashboard de KPIs por região e cliente",
      "Auditoria de entregas e ocorrências",
    ],
    forWho:
      "Empresas com operação logística própria ou terceirizada que precisam de visão centralizada da cadeia.",
    image: "/assets/CompartilhaLOG.png",
    status: "ativo",
  },
  {
    slug: "socorro-auto",
    name: "Compartilha Socorro Auto 24H",
    category: "Assistência veicular",
    pitch:
      "Despacho, acionamento e acompanhamento de socorro automotivo em tempo real, com cobertura 24 horas.",
    longDescription:
      "Sistema completo para operadoras de assistência veicular: do acionamento do cliente ao despacho do guincho, com SLA monitorado e visibilidade ao vivo da operação 24/7.",
    features: ["Despacho ao vivo", "Geolocalização", "SLA 24/7"],
    capabilities: [
      "Acionamento via app, web e atendimento humano",
      "Mapa em tempo real com prestadores disponíveis",
      "Despacho automático por proximidade",
      "Comunicação cliente-prestador integrada",
      "Relatórios de SLA, NPS e custo por ocorrência",
    ],
    forWho:
      "Seguradoras, montadoras, frotistas e operadoras de assistência 24h que precisam orquestrar prestadores em escala.",
    image: "/assets/CompartilhaSocorroAuto.png",
    status: "ativo",
  },
  {
    slug: "socorro-saude",
    name: "Compartilha Socorro Saúde 24H",
    category: "Assistência médica",
    pitch:
      "Acionamento, triagem e gestão de atendimentos de saúde 24 horas com prontuário operacional integrado.",
    longDescription:
      "Plataforma para operações de assistência médica 24h: triagem, despacho de ambulância, prontuário do atendimento e gestão de SLA com visibilidade da equipe e do paciente.",
    features: ["Triagem clínica", "Prontuário", "SLA 24/7"],
    capabilities: [
      "Triagem clínica padronizada",
      "Despacho de ambulância e equipe médica",
      "Prontuário operacional integrado",
      "Comunicação com hospitais de destino",
      "Auditoria de atendimentos e SLA",
    ],
    forWho:
      "Operadoras de saúde, planos corporativos e empresas de assistência domiciliar 24h.",
    image: "/assets/CompartilhaSocorroSaude.png",
    status: "ativo",
  },
  {
    slug: "import",
    name: "Compartilha Import",
    category: "Comércio exterior",
    pitch:
      "Importação assistida com governança documental, integração aduaneira e visibilidade de processo de ponta a ponta.",
    longDescription:
      "Plataforma para importadoras que precisam orquestrar processos de DI/DUIMP, governança documental e visibilidade de status com despachantes, transportadoras e times internos.",
    features: ["DI / DUIMP", "Documentação", "Compliance"],
    capabilities: [
      "Pipeline de processos de importação",
      "Governança documental (DI, DUIMP, invoice, packing list)",
      "Integração com despachantes",
      "Acompanhamento de status no Siscomex",
      "Relatórios de tempo de ciclo e custo por processo",
    ],
    forWho:
      "Importadoras, tradings e indústrias com fluxo recorrente de comércio exterior.",
    image: "/assets/CompartilhaImport.png",
    status: "ativo",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
