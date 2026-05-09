export type Case = {
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  product: string;
};

export const cases: Case[] = [
  {
    slug: "operador-logistico-pallets",
    client: "Operador logístico nacional",
    industry: "Logística e distribuição",
    challenge:
      "Conferência de pallets entre plantas e transportadoras feita em planilhas paralelas, com perdas mensais e auditoria reativa.",
    solution:
      "Implantação do Compartilha Pallet Control com importação automática de NFe, conferência guiada por operador e dashboard multi-planta.",
    results: [
      { metric: "-42%", label: "no tempo médio de conferência" },
      { metric: "98,6%", label: "SLA de retorno cumprido" },
      { metric: "12 mil+", label: "ativos sob controle ativo" },
    ],
    product: "Compartilha Pallet Control",
  },
  {
    slug: "assistencia-24h-automotiva",
    client: "Operadora de assistência 24h",
    industry: "Assistência veicular",
    challenge:
      "Despacho manual de guinchos via telefone, com tempo de chegada inconsistente e ausência de visibilidade ao vivo da rede de prestadores.",
    solution:
      "Compartilha Socorro Auto 24H com despacho automático por proximidade, mapa de prestadores em tempo real e auditoria de SLA por ocorrência.",
    results: [
      { metric: "-31%", label: "no tempo médio de chegada" },
      { metric: "+24%", label: "no NPS pós-atendimento" },
      { metric: "24/7", label: "operação visível em painel único" },
    ],
    product: "Compartilha Socorro Auto 24H",
  },
  {
    slug: "industria-multi-planta",
    client: "Indústria de bens de consumo",
    industry: "Manufatura multi-planta",
    challenge:
      "ERP corporativo desconectado da operação de chão de fábrica, exigindo retrabalho de cadastro e cruzamento manual de relatórios.",
    solution:
      "Camada de integração sob medida conectando ERP, WMS, telemetria e BI — com painéis acionáveis para diretoria e gerência operacional.",
    results: [
      { metric: "1 fonte", label: "única de verdade entre sistemas" },
      { metric: "-67%", label: "no tempo de fechamento mensal" },
      { metric: "0", label: "planilhas paralelas após go-live" },
    ],
    product: "Solução sob medida",
  },
];
