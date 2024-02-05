export const renderInfoDetails = [
  { name: "Profissional", key: "profissional" },
  { name: "CPF", key: "cpf" },
  { name: "E-mail", key: "email" },
  { name: "Idade", key: "idade" },
  { name: "Telefone", key: "telefone" },
  { name: "Cidade", key: "cidade" },
  { name: "UF", key: "uf" },
  { name: "Formação", key: "formacao" },
  { name: "Pretensão Salarial", key: "pretensao_salarial" },
  { name: "Pretensão PJ", key: "pretensao_pj" },
  { name: "Observação", key: "observacao" },
  { name: "CNPJ", key: "cnpj" },
  { name: "Tipo CNPJ", key: "tipo_cnpj" },
  { name: "Interesse Imediato a vaga", key: "interesse_imediato" },
  { name: "Entrevista Online", key: "entrevista_online" },
  { name: "Teste Técnico", key: "teste_tecnico" },
  {
    name: "Vaga 100% Presencial Porto Real/ RJ",
    key: "vaga_100_presencial_porto_real_rj",
  },
  {
    name: "Vaga 100% Presencial Goiana/ PE",
    key: "vaga_100_presencial_goiana_pe",
  },
  {
    name: "Vaga 100% Presencial Betim/ MG",
    key: "vaga_100_presencial_betim_mg",
  },
  {
    name: "Vaga 100% Presencial São Paulo / SP",
    key: "vaga_100_presencial_sao_paulo",
  },
  {
    name: "Vaga Internacional",
    key: "vaga_internacional",
  },
  { name: "Home Office", key: "home_office" },
  { name: "Vaga Híbrida Betim", key: "vaga_hibrida_betim" },
  { name: "Conhecimento em inglês", key: "conhecimento_ingles" },
  { name: "Registrado em", key: "createdAt", format: "dd/MM/yyyy HH:mm:ss" },
  {
    name: "Ultima Atualização",
    key: "updatedAt",
    format: "dd/MM/yyyy HH:mm:ss",
  },
  { name: "Empresa Atual", key: "empresa_atual" },
  {
    name: "Experiência no Ramo Automotivo",
    key: "experiencia_ramo_automotivo",
  },
  { name: "Modalidade Atual", key: "modalidade_atual" },
  { name: "Horário da Entrevista Online", key: "entrevista_online" },
  { name: "Horário do Teste Técnico", key: "teste_tecnico" },
];

export const renderInfoSections = [
  {
    title: "Informações Pessoais",
    keys: [
      "Profissional",
      "CPF",
      "E-mail",
      "Idade",
      "Telefone",
      "Cidade",
      "UF",
      "Formação",
    ],
  },

  {
    title: "Informações Profissionais",
    keys: [
      "Pretensão Salarial",
      "Pretensão PJ",
      "Vaga 100% Presencial Porto Real/ RJ",
      "Vaga 100% Presencial Goiana/ PE",
      "Vaga 100% Presencial Betim/ MG",
      "Vaga 100% Presencial São Paulo / SP",
      "Vaga Internacional",
      "Home Office",
      "Vaga Híbrida Betim",
      "Conhecimento em inglês",
      "CNPJ",
      "Tipo CNPJ",
      "Empresa Atual",
      "Experiência no Ramo Automotivo",
      "Modalidade Atual",
    ],
  },
  {
    title: "Sobre a Vaga",
    keys: ["Interesse Imediato a vaga", "Entrevista Online", "Teste Técnico"],
  },
  {
    title: "Observações",
    keys: ["Observação"],
  },
  {
    title: "Outras Informações",
    keys: [
      "Registrado em",
      "Ultima Atualização",
      "Avaliado pelo Recrutamento"
    ],
  },
];

export const Fields =  [
  {
    title: "Informações Pessoais",
    fields: [
      "profissional",
      "cpf",
      "email",
      "idade",
      "telefone",
      "cidade",
      "uf",
      "formacao",
    ],
  },
  {
    title: "Informações Profissionais",
    fields: [
      "pretensao_salarial",
      "pretensao_pj",
      "vaga_100_presencial_porto_real_rj",
      "vaga_100_presencial_goiana_pe",
      "vaga_100_presencial_betim_mg",
      "vaga_100_presencial_sao_paulo",
      "vaga_internacional",
      "home_office",
      "vaga_hibrida_betim",
      "conhecimento_ingles",
      "cnpj",
      "tipo_cnpj",
      "empresa_atual",
      "experiencia_ramo_automotivo",
      "modalidade_atual",
    ],
  },
  {
    title: "Sobre a Vaga",
    fields: [
      "interesse_imediato",
      "entrevista_online",
      "teste_tecnico",
    ],
  },
  {
    title: "Observações",
    fields: ["observacao"],
  },
  {
    title: "Outras Informações",
    fields: [
      "createdAt",
      "updatedAt",
    ],
  },
  
];
