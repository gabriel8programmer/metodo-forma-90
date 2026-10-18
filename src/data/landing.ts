export interface NavItem {
  label: string;
  href: string;
}

export interface ProblemItem {
  number: string;
  statement: string;
  detail: string;
  tag: string;
}

export interface MethodPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: string[];
}

export interface WorkoutExercise {
  order: string;
  name: string;
  muscleGroup: string;
  sets: string;
  reps: string;
  rest: string;
  load: string;
  status: "Concluído" | "Em execução" | "Próximo" | "Carga ajustada";
  note: string;
}

export interface WorkoutSheet {
  id: string;
  code: string;
  title: string;
  environment: string;
  duration: string;
  focus: string;
  weekCycle: string;
  exercises: WorkoutExercise[];
}

export interface StepItem {
  step: string;
  phase: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface AudienceProfile {
  code: string;
  title: string;
  scenario: string;
  solution: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  tag: string;
}

export interface WeeklyProgressionPoint {
  week: string;
  loadIndex: number;
  sessionsCompleted: number;
  volumeKg: number;
  phaseLabel: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  age: number;
  profile: string;
  cycleDuration: string;
  highlightMetric: string;
}

export interface PlanItem {
  id: string;
  name: string;
  tagline: string;
  cycle: string;
  price: string;
  period: string;
  featured?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Método", href: "#metodo" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Treinos", href: "#treinos" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_DATA = {
  eyebrow: "CONSULTORIA DE TREINO ONLINE • CICLOS DE 90 DIAS",
  badge: "Treinos para academia ou casa",
  headlineLine1: "PARE DE APENAS TREINAR.",
  headlineLine2: "COMECE A EVOLUIR.",
  alternativeTag: "Treino sem estratégia vira apenas esforço.",
  subheadline:
    "Treinos personalizados, acompanhamento e ajustes contínuos para você evoluir com mais consistência e direção.",
  primaryCta: "Quero começar",
  secondaryCta: "Conhecer o método",
  telemetry: [
    { label: "CICLO BASE", value: "90 DIAS", accent: true },
    { label: "ESTRUTURA", value: "100% INDIVIDUAL", accent: false },
    { label: "AMBIENTE", value: "ACADEMIA / CASA", accent: false },
  ],
};

export const PROBLEMS_DATA = {
  eyebrow: "DIAGNÓSTICO DE TREINO",
  title: "Treinar mais nem sempre significa evoluir mais.",
  subtitle:
    "O esforço sem direção gera cansaço, mas raramente constrói progressão real. Quando falta método, a rotina vira tentativa e erro.",
  items: [
    {
      number: "01",
      statement: "Repetir sempre o mesmo treino esperando estímulos diferentes.",
      detail:
        "O corpo se adapta rapidamente a estímulos fixos. Sem periodização de volume e intensidade, você continua suando, mas a evolução estaciona.",
      tag: "Estagnação",
    },
    {
      number: "02",
      statement: "Aumentar peso sem planejamento ou controle de execução.",
      detail:
        "Progredir carga não é jogar peso na barra a qualquer custo. Sem técnica, amplitude e faixa de esforço adequadas, o risco sobe e o estímulo muscular cai.",
      tag: "Risco & Improviso",
    },
    {
      number: "03",
      statement: "Trocar de treino constantemente a cada nova dica da internet.",
      detail:
        "Pular de ficha em ficha toda semana impede que você construa base neuromuscular e saiba o que realmente está funcionando para o seu corpo.",
      tag: "Falta de Continuidade",
    },
    {
      number: "04",
      statement: "Não acompanhar evolução de cargas, repetições e frequência.",
      detail:
        "Quem não registra o que faz treina no escuro. Sem histórico de treino, cada sessão vira um chute sobre qual carga ou volume utilizar.",
      tag: "Zero Métrica",
    },
    {
      number: "05",
      statement: "Treinar sem objetivo claro e incompatível com a própria agenda.",
      detail:
        "Planos irreais de 6 dias na semana para quem só tem 40 minutos livres geram frustração e abandono logo nas primeiras semanas.",
      tag: "Inconsistência",
    },
  ] as ProblemItem[],
};

export const METHOD_DATA = {
  eyebrow: "ARQUITETURA DO PROGRAMA",
  title: "Um método pensado para a sua rotina.",
  description:
    "O Método Forma 90 não entrega fichas prontas de gaveta. Antes de prescrever qualquer exercício, mapeamos o seu contexto real para que o treino se adapte à sua vida — e não o contrário.",
  variablesTitle: "6 variáveis analisadas na sua prescrição",
  variables: [
    { code: "VAR_01", label: "Objetivo", detail: "Hipertrofia, condicionamento, recomposição ou saúde articular" },
    { code: "VAR_02", label: "Rotina", detail: "Horários de trabalho, sono, nível de estresse e energia diária" },
    { code: "VAR_03", label: "Disponibilidade", detail: "Quantidade real de dias e minutos disponíveis por sessão" },
    { code: "VAR_04", label: "Experiência", detail: "Histórico motor, domínio técnico e tempo de treinamento" },
    { code: "VAR_05", label: "Limitações", detail: "Desconfortos articulares, lesões prévias ou restrições de movimento" },
    { code: "VAR_06", label: "Equipamentos", detail: "Academia completa, condomínio ou estrutura enxuta em casa" },
  ],
  pillars: [
    {
      number: "01",
      title: "Estratégia",
      subtitle: "Treino estruturado com base no objetivo.",
      description:
        "Seleção inteligente de exercícios, divisão semanal coerente, volume calculado por grupamento muscular e progressão planejada para o seu nível atual.",
      metrics: ["Divisão semanal sob medida", "Volume e intensidade calibrados", "Ordem biomecânica lógica"],
    },
    {
      number: "02",
      title: "Consistência",
      subtitle: "Plano compatível com a rotina.",
      description:
        "Um treino eficiente precisa caber na sua semana real. Estruturamos sessões objetivas para que você mantenha frequência mesmo em semanas corridas.",
      metrics: ["Sessões de 40 a 60 min", "Flexibilidade academia ou casa", "Aderência sustentável"],
    },
    {
      number: "03",
      title: "Evolução",
      subtitle: "Acompanhamento e ajustes periódicos.",
      description:
        "Análise constante dos seus registros de carga, percepção de esforço e execução para ajustar a rota no momento certo, evitando platôs.",
      metrics: ["Revisão de cargas e RIR", "Orientação de execução por vídeo", "Recalibração estratégica"],
    },
  ] as MethodPillar[],
};

export const WORKOUT_SHEETS: WorkoutSheet[] = [
  {
    id: "treino-a",
    code: "FICHA #F90-A",
    title: "Treino A — Superior",
    environment: "Academia • Pesos Livres & Polias",
    duration: "52 min estimados",
    focus: "Ênfase em Empurrar/Puxar + Controle de Cadência",
    weekCycle: "Semana 06 / 12 • Bloco de Progressão",
    exercises: [
      {
        order: "01",
        name: "Supino reto",
        muscleGroup: "Peitoral / Deltoide Ant.",
        sets: "4 séries",
        reps: "8–10 reps",
        rest: "90s",
        load: "64 kg",
        status: "Concluído",
        note: "Cadência 2010 • 1–2 reps na reserva (RIR 2)",
      },
      {
        order: "02",
        name: "Remada baixa",
        muscleGroup: "Dorsais / Romboides",
        sets: "4 séries",
        reps: "10–12 reps",
        rest: "90s",
        load: "55 kg",
        status: "Carga ajustada",
        note: "+5 kg vs. semana anterior • Pausa de 1s na contração",
      },
      {
        order: "03",
        name: "Desenvolvimento",
        muscleGroup: "Deltoides / Estabilizadores",
        sets: "3 séries",
        reps: "8–10 reps",
        rest: "75s",
        load: "18 kg (par)",
        status: "Concluído",
        note: "Halteres em banco 75° • Sem arquear lombar",
      },
      {
        order: "04",
        name: "Puxada alta",
        muscleGroup: "Grande Dorsal",
        sets: "3 séries",
        reps: "10–12 reps",
        rest: "75s",
        load: "50 kg",
        status: "Em execução",
        note: "Pegada aberta pronada • Controle excêntrico de 3s",
      },
      {
        order: "05",
        name: "Rosca direta",
        muscleGroup: "Bíceps Braquial",
        sets: "3 séries",
        reps: "10–12 reps",
        rest: "60s",
        load: "26 kg",
        status: "Próximo",
        note: "Barra W • Cotovelos estáveis ao lado do tronco",
      },
      {
        order: "06",
        name: "Tríceps pulley",
        muscleGroup: "Tríceps Braquial",
        sets: "3 séries",
        reps: "12–15 reps",
        rest: "60s",
        load: "25 kg",
        status: "Próximo",
        note: "Corda • Extensão completa no final do movimento",
      },
    ],
  },
  {
    id: "treino-b",
    code: "FICHA #F90-B",
    title: "Treino B — Inferior & Core",
    environment: "Academia • Base de Força",
    duration: "55 min estimados",
    focus: "Dominância de Joelho, Quadril & Estabilidade",
    weekCycle: "Semana 06 / 12 • Bloco de Progressão",
    exercises: [
      {
        order: "01",
        name: "Agachamento livre",
        muscleGroup: "Quadríceps / Glúteos",
        sets: "4 séries",
        reps: "6–8 reps",
        rest: "120s",
        load: "78 kg",
        status: "Carga ajustada",
        note: "Amplitude segura • Bracing abdominal ativo",
      },
      {
        order: "02",
        name: "Levantamento terra romeno",
        muscleGroup: "Isquiotibiais / Glúteos",
        sets: "4 séries",
        reps: "8–10 reps",
        rest: "90s",
        load: "70 kg",
        status: "Concluído",
        note: "Barra rente à tíbia • Coluna neutra",
      },
      {
        order: "03",
        name: "Leg press 45°",
        muscleGroup: "Quadríceps",
        sets: "3 séries",
        reps: "10–12 reps",
        rest: "90s",
        load: "160 kg",
        status: "Concluído",
        note: "Pés na largura do quadril • Sem travar joelhos",
      },
      {
        order: "04",
        name: "Mesa flexora",
        muscleGroup: "Isquiotibiais",
        sets: "3 séries",
        reps: "12–15 reps",
        rest: "60s",
        load: "40 kg",
        status: "Em execução",
        note: "Quadril apoiado no banco durante toda a série",
      },
      {
        order: "05",
        name: "Panturrilha em pé",
        muscleGroup: "Gastrocnêmio / Sóleo",
        sets: "4 séries",
        reps: "12–15 reps",
        rest: "60s",
        load: "60 kg",
        status: "Próximo",
        note: "2s de alongamento na base + 1s no pico",
      },
      {
        order: "06",
        name: "Prancha RKC com carga",
        muscleGroup: "Core / Estabilizadores",
        sets: "3 séries",
        reps: "40s isometria",
        rest: "45s",
        load: "+10 kg",
        status: "Próximo",
        note: "Contração máxima de glúteos e abdômen",
      },
    ],
  },
  {
    id: "treino-c",
    code: "FICHA #F90-HOME",
    title: "Treino C — Full Body Casa",
    environment: "Casa / Condomínio • Halteres & Elástico",
    duration: "42 min estimados",
    focus: "Eficiência Metabólica & Tensão Mecânica",
    weekCycle: "Adaptação para Dias Remotos",
    exercises: [
      {
        order: "01",
        name: "Agachamento búlgaro com halteres",
        muscleGroup: "Quadríceps / Glúteo Médio",
        sets: "4 séries",
        reps: "10 reps / lado",
        rest: "75s",
        load: "16 kg (par)",
        status: "Concluído",
        note: "Tronco levemente inclinado à frente",
      },
      {
        order: "02",
        name: "Flexão de braços com pés elevados",
        muscleGroup: "Peitoral / Tríceps / Core",
        sets: "4 séries",
        reps: "12–15 reps",
        rest: "75s",
        load: "Peso corporal",
        status: "Concluído",
        note: "Cadência controlada 3s na descida",
      },
      {
        order: "03",
        name: "Remada unilateral serrote",
        muscleGroup: "Grande Dorsal",
        sets: "4 séries",
        reps: "12 reps / lado",
        rest: "60s",
        load: "20 kg",
        status: "Carga ajustada",
        note: "Tração direcionada ao quadril",
      },
      {
        order: "04",
        name: "Stiff unilateral com halteres",
        muscleGroup: "Posterior / Equilíbrio",
        sets: "3 séries",
        reps: "10 reps / lado",
        rest: "60s",
        load: "16 kg (par)",
        status: "Em execução",
        note: "Foco na estabilidade pélvica",
      },
      {
        order: "05",
        name: "Desenvolvimento Arnold",
        muscleGroup: "Deltoides",
        sets: "3 séries",
        reps: "12 reps",
        rest: "60s",
        load: "12 kg (par)",
        status: "Próximo",
        note: "Rotação fluida sem perder tensão",
      },
      {
        order: "06",
        name: "Dead bug controlado",
        muscleGroup: "Core Profundo",
        sets: "3 séries",
        reps: "10 reps / lado",
        rest: "45s",
        load: "Peso corporal",
        status: "Próximo",
        note: "Lombar 100% ancorada no solo",
      },
    ],
  },
];

export const NUMBERS_DATA = [
  {
    value: "90 dias",
    label: "Primeiro ciclo de acompanhamento",
    description:
      "Tempo estruturado em blocos de adaptação, progressão de carga e consolidação de rotina para gerar evolução consistente.",
  },
  {
    value: "4 etapas",
    label: "Do planejamento aos ajustes",
    description:
      "Fluxo contínuo entre diagnóstico, prescrição técnica, execução monitorada e recalibração periódica do plano.",
  },
  {
    value: "100%",
    label: "Treino adaptado ao aluno",
    description:
      "Cada exercício, volume, intervalo e divisão semanal são definidos a partir da sua rotina, histórico e equipamento.",
  },
];

export const HOW_IT_WORKS_DATA = {
  eyebrow: "FLUXO OPERACIONAL",
  title: "Da análise inicial à evolução contínua em 4 etapas.",
  subtitle:
    "Nada de PDFs genéricos esquecidos no celular. O acompanhamento funciona em ciclo ativo de feedback e refinamento.",
  steps: [
    {
      step: "01",
      phase: "FASE DE DIAGNÓSTICO",
      title: "1. Avaliação inicial",
      description:
        "Entendimento dos objetivos, rotina e experiência. Mapeamos seu histórico de treino, disponibilidade real de horários, equipamentos disponíveis (academia ou casa) e eventuais limitações articulares.",
      deliverable: "Anamnese técnica + avaliação postural/mobilidade via vídeo",
    },
    {
      step: "02",
      phase: "ENGENHARIA DO TREINO",
      title: "2. Planejamento",
      description:
        "Criação do treino personalizado. Desenhamos sua divisão semanal, seleção biomecânica de exercícios, séries, faixas de repetições, tempos de descanso e metas claras de progressão.",
      deliverable: "Ficha interativa completa + guia de execução e cadência",
    },
    {
      step: "03",
      phase: "APLICAÇÃO PRÁTICA",
      title: "3. Execução",
      description:
        "O aluno começa os treinos e registra sua evolução. A cada sessão você anota cargas utilizadas, repetições realizadas e pode enviar vídeos de exercícios para correção técnica.",
      deliverable: "Registro de cargas + suporte online para dúvidas e postura",
    },
    {
      step: "04",
      phase: "OTIMIZAÇÃO DE ROTA",
      title: "4. Ajustes",
      description:
        "O plano é revisado conforme a evolução. Analisamos os dados de frequência e progressão para ajustar volume, intensidade ou substituir exercícios sempre que necessário.",
      deliverable: "Relatório de evolução + atualização estratégica do ciclo",
    },
  ] as StepItem[],
};

export const AUDIENCE_DATA = {
  eyebrow: "PERFIL DE ALUNO",
  title: "Para quem quer parar de improvisar.",
  subtitle:
    "O Método Forma 90 foi desenhado para adultos entre 20 e 45 anos que buscam estrutura profissional sem depender de fórmulas irreais.",
  profiles: [
    {
      code: "P_01",
      title: "Quem está começando",
      scenario: "Quer iniciar na musculação ou treino funcional com segurança, sem se sentir perdido entre aparelhos.",
      solution: "Base técnica sólida, progressão gradual e orientação clara em cada movimento.",
    },
    {
      code: "P_02",
      title: "Quem já treina mas está estagnado",
      scenario: "Frequenta a academia há meses ou anos, mas sente que as cargas e o condicionamento pararam no tempo.",
      solution: "Periodização estruturada de volume, controle de intensidade e quebra de platô.",
    },
    {
      code: "P_03",
      title: "Quem treina em casa",
      scenario: "Prefere treinar na sala, garagem ou academia do condomínio com poucos equipamentos.",
      solution: "Prescrição otimizada para o equipamento disponível com alto estímulo mecânico.",
    },
    {
      code: "P_04",
      title: "Quem frequenta academia",
      scenario: "Tem acesso a equipamentos completos, mas cansou de fichas genéricas sem acompanhamento real.",
      solution: "Aproveitamento inteligente das máquinas, pesos livres e polias para o seu biotipo.",
    },
    {
      code: "P_05",
      title: "Quem tem pouco tempo",
      scenario: "Rotina intensa de trabalho e família que exige sessões enxutas de 40 a 50 minutos sem enrolação.",
      solution: "Treinos densos, priorizando exercícios multiarticulares e alta eficiência por minuto.",
    },
    {
      code: "P_06",
      title: "Quem busca mais organização",
      scenario: "Sente dificuldade em manter constância porque não sabe o que priorizar em semanas corridas.",
      solution: "Planejamento semanal previsível, metas tangíveis e acompanhamento profissional.",
    },
  ] as AudienceProfile[],
};

export const BENEFITS_DATA = {
  eyebrow: "ENTREGÁVEIS PRÁTICOS",
  title: "O que muda quando o seu treino tem direção técnica.",
  subtitle:
    "Sem promessas milagrosas ou atalhos artificiais. Nosso foco está nas variáveis que você consegue controlar, medir e evoluir semana após semana.",
  items: [
    {
      title: "Treinos adaptados à rotina",
      description:
        "Divisão semanal pensada para os seus dias disponíveis. Se a semana apertar, você tem diretrizes claras de como adaptar sem perder a semana.",
      tag: "Aderência Real",
    },
    {
      title: "Planejamento progressivo",
      description:
        "Blocos estruturados onde cada semana prepara o corpo para o próximo estímulo de força, resistência ou hipertrofia.",
      tag: "Periodização",
    },
    {
      title: "Acompanhamento profissional",
      description:
        "Você não fica sozinho após receber o treino. Canal direto para alinhar percepção de esforço, recuperação e dúvidas práticas.",
      tag: "Suporte Ativo",
    },
    {
      title: "Ajustes periódicos",
      description:
        "Substituição de exercícios desconfortáveis, recalibração de séries e atualização do plano conforme a resposta do seu corpo.",
      tag: "Refinamento",
    },
    {
      title: "Histórico de evolução",
      description:
        "Visão clara da sua constância mensal, progressão de cargas nos exercícios-chave e evolução do volume de treino.",
      tag: "Métricas",
    },
    {
      title: "Orientação sobre exercícios",
      description:
        "Instruções objetivas de postura, amplitude, cadência e respiração para você executar cada movimento com confiança.",
      tag: "Técnica & Segurança",
    },
  ] as BenefitItem[],
};

export const COACH_DATA = {
  eyebrow: "RESPONSÁVEL TÉCNICO",
  name: "Lucas Andrade",
  credentials: "Personal Trainer | CREF 000000-G/XX",
  description:
    "Profissional de Educação Física com atuação em musculação, treinamento personalizado e acompanhamento online. Especialista em estruturação de treinos para adultos que precisam conciliar performance física, saúde articular e rotina profissional intensa.",
  secondaryBio:
    "Ao longo da prática presencial e online, desenvolveu o Método Forma 90 com um propósito claro: substituir o improviso das fichas padronizadas por uma engenharia de treino compreensível, mensurável e sustentável a longo prazo.",
  quote:
    "“O melhor treino não é o mais difícil. É aquele que você consegue executar, acompanhar e evoluir.”",
  pillars: [
    "Especialista em Biomecânica Aplicada e Periodização do Treinamento de Força",
    "Avaliação funcional e adaptação para treino em academia ou residência",
    "Foco em autonomia técnica, prevenção de lesões e constância real",
  ],
};

// Dados fictícios utilizados apenas para apresentação visual do projeto.
export const PROGRESS_DATA = {
  eyebrow: "TELEMETRIA DE EVOLUÇÃO • 12 SEMANAS DE ACOMPANHAMENTO",
  title: "Evolução medida por consistência, carga e domínio técnico.",
  subtitle:
    "A estética é consequência de um processo bem executado. No Método Forma 90, acompanhamos indicadores concretos de desempenho ao longo de 12 semanas.",
  disclaimer:
    "Dados fictícios utilizados apenas para apresentação visual do projeto. Os resultados variam conforme genética, rotina, alimentação e dedicação individual.",
  summaryCards: [
    {
      label: "FREQUÊNCIA NO CICLO",
      value: "46 / 48",
      unit: "sessões concluídas",
      delta: "95.8% de constância em 12 semanas",
    },
    {
      label: "PROGRESSÃO DE CARGA (MÉDIA)",
      value: "+28%",
      unit: "em exercícios básicos",
      delta: "Com manutenção de amplitude e técnica",
    },
    {
      label: "VOLUME SEMANAL EFETIVO",
      value: "14 → 18",
      unit: "séries por grupo/sem",
      delta: "Progressão gradual sem sobrecarga articular",
    },
  ],
  weeklyData: [
    { week: "SEM 01", loadIndex: 52, sessionsCompleted: 4, volumeKg: 6400, phaseLabel: "Adaptação Técnica" },
    { week: "SEM 02", loadIndex: 55, sessionsCompleted: 4, volumeKg: 6750, phaseLabel: "Adaptação Técnica" },
    { week: "SEM 03", loadIndex: 59, sessionsCompleted: 4, volumeKg: 7100, phaseLabel: "Adaptação Técnica" },
    { week: "SEM 04", loadIndex: 63, sessionsCompleted: 3, volumeKg: 6900, phaseLabel: "Base de Volume" },
    { week: "SEM 05", loadIndex: 68, sessionsCompleted: 4, volumeKg: 7650, phaseLabel: "Base de Volume" },
    { week: "SEM 06", loadIndex: 72, sessionsCompleted: 4, volumeKg: 8100, phaseLabel: "Base de Volume" },
    { week: "SEM 07", loadIndex: 76, sessionsCompleted: 4, volumeKg: 8450, phaseLabel: "Ajuste Intermediário" },
    { week: "SEM 08", loadIndex: 70, sessionsCompleted: 4, volumeKg: 7400, phaseLabel: "Semana Regenerativa" },
    { week: "SEM 09", loadIndex: 82, sessionsCompleted: 4, volumeKg: 8900, phaseLabel: "Bloco de Intensidade" },
    { week: "SEM 10", loadIndex: 87, sessionsCompleted: 4, volumeKg: 9350, phaseLabel: "Bloco de Intensidade" },
    { week: "SEM 11", loadIndex: 93, sessionsCompleted: 3, volumeKg: 9600, phaseLabel: "Consolidação" },
    { week: "SEM 12", loadIndex: 98, sessionsCompleted: 4, volumeKg: 10150, phaseLabel: "Consolidação 90D" },
  ] as WeeklyProgressionPoint[],
  exerciseBenchmarks: [
    { exercise: "Supino Reto com Barra", start: "50 kg • 3x8", week6: "58 kg • 4x8", week12: "64 kg • 4x9", progression: "+14 kg" },
    { exercise: "Agachamento Livre", start: "60 kg • 3x8", week6: "70 kg • 4x8", week12: "78 kg • 4x8", progression: "+18 kg" },
    { exercise: "Remada Baixa Polia", start: "42 kg • 3x10", week6: "50 kg • 4x10", week12: "55 kg • 4x11", progression: "+13 kg" },
  ],
};

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote:
      "Eu já treinava há algum tempo, mas nunca conseguia perceber evolução. Com um planejamento mais organizado, comecei a entender melhor o que precisava fazer.",
    name: "Bruno",
    age: 29,
    profile: "Treina em academia • 4x por semana",
    cycleDuration: "1º Ciclo Forma 90 concluído",
    highlightMetric: "Foco em organização e progressão de cargas",
  },
  {
    quote:
      "O treino passou a caber na minha rotina, e isso fez muita diferença para conseguir manter constância.",
    name: "Mariana",
    age: 35,
    profile: "Rotina híbrida (Academia + Casa) • 3x por semana",
    cycleDuration: "6 meses de acompanhamento",
    highlightMetric: "Sessões objetivas de 45 minutos",
  },
  {
    quote:
      "Antes eu trocava de ficha por conta própria sempre que achava o treino monótono. Ter ajustes feitos por um profissional e saber exatamente por que cada exercício está ali mudou minha relação com o treino.",
    name: "Rafael",
    age: 41,
    profile: "Retorno aos treinos • 4x por semana",
    cycleDuration: "1º Ciclo Forma 90 concluído",
    highlightMetric: "Evolução técnica sem desconforto no ombro",
  },
];

export const PLANS_DATA = {
  eyebrow: "PLANOS DE ACOMPANHAMENTO",
  title: "Escolha o formato ideal para o seu ciclo de 90 dias.",
  subtitle:
    "Todos os planos partem de uma prescrição 100% individualizada para academia ou casa, sem contratos ocultos.",
  disclaimer: "Valores e planos fictícios para projeto demonstrativo.",
  plans: [
    {
      id: "essencial",
      name: "Essencial",
      tagline: "Para quem já tem boa autonomia de execução e busca um planejamento estruturado com revisão mensal.",
      cycle: "Ciclo Trimestral (90 dias)",
      price: "R$ 197",
      period: "/mês no plano de 90 dias",
      featured: false,
      features: [
        "Avaliação inicial de rotina, histórico e objetivos",
        "Treino 100% personalizado (academia ou casa)",
        "Revisão e atualização estratégica mensal",
        "Acesso à ficha digital com vídeos demonstrativos",
        "Registro de evolução de cargas por sessão",
        "Suporte online para dúvidas pontuais (até 24h úteis)",
      ],
      ctaText: "Quero começar no Essencial",
    },
    {
      id: "performance",
      name: "Performance",
      tagline: "Acompanhamento próximo com checkpoints quinzenais, análise de vídeos de execução e ajustes dinâmicos.",
      cycle: "Ciclo Trimestral (90 dias)",
      price: "R$ 297",
      period: "/mês no plano de 90 dias",
      featured: true,
      badge: "MAIS ESCOLHIDO • ACOMPANHAMENTO PRÓXIMO",
      features: [
        "Tudo do plano Essencial incluso",
        "Acompanhamento e checkpoint quinzenal de evolução",
        "Ajustes dinâmicos de volume, carga e exercícios",
        "Análise técnica de execução por envio de vídeos",
        "Adaptação rápida de treino para viagens ou dias em casa",
        "Relatório completo ao final dos 90 dias",
        "Suporte prioritário via WhatsApp com o treinador",
      ],
      ctaText: "Quero começar",
    },
  ] as PlanItem[],
};

export const FAQ_DATA: FAQItem[] = [
  {
    category: "Local de Treino",
    question: "Preciso treinar em academia?",
    answer:
      "Não obrigatoriamente. O planejamento é 100% adaptado ao ambiente onde você treina — seja uma academia completa, a academia do seu condomínio ou um espaço na sua casa.",
  },
  {
    category: "Nível de Experiência",
    question: "O treino também funciona para iniciantes?",
    answer:
      "Sim. Para quem está começando, o foco inicial é construir base motora, aprender a execução correta dos movimentos fundamentais e estabelecer uma frequência sustentável sem dores exageradas.",
  },
  {
    category: "Rotina & Tempo",
    question: "Quantos dias por semana preciso treinar?",
    answer:
      "O plano se adapta à sua disponibilidade real. É perfeitamente possível estruturar um programa eficiente treinando de 3 a 5 vezes por semana, com sessões entre 40 e 60 minutos.",
  },
  {
    category: "Entrega",
    question: "Como recebo meu treino?",
    answer:
      "Após preencher a avaliação inicial e enviarmos o diagnóstico, seu planejamento é disponibilizado em formato digital organizado com vídeos demonstrativos, séries, repetições, intervalos e espaço para registrar cargas.",
  },
  {
    category: "Periodização",
    question: "O treino é atualizado?",
    answer:
      "Sim. Nenhum treino permanece estático. Realizamos revisões mensais (plano Essencial) ou quinzenais (plano Performance) para ajustar volume, intensidade e exercícios conforme a sua evolução.",
  },
  {
    category: "Flexibilidade",
    question: "Posso treinar em casa?",
    answer:
      "Com certeza. Inclusive podemos estruturar um formato híbrido: treinos principais para a academia e uma ficha adaptada para os dias em que você precisar treinar em casa.",
  },
  {
    category: "Estrutura",
    question: "Preciso ter equipamentos?",
    answer:
      "Se você treinar em casa, é possível começar apenas com o peso corporal e elásticos extensores, ou utilizar pares de halteres e kettlebells caso já possua. Na avaliação inicial mapeamos tudo o que você tem disponível.",
  },
  {
    category: "Suporte",
    question: "Como funciona o acompanhamento?",
    answer:
      "Você registra suas cargas e percepções a cada treino, tira dúvidas pelo canal de suporte e, no plano Performance, pode enviar vídeos executando os exercícios para receber feedback técnico e correções posturais.",
  },
];
