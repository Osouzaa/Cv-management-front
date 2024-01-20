import { Candidate } from "../types/candidate.types";

interface FieldRadio {
  label: string;
  field: keyof Candidate;
  type?: string;
  options?: string[];
}

export const camposSelect: FieldRadio[] = [
  {
    label: "Está Empregado?",
    type: "select",
    field: "esta_empregado",
    options: [" ", "Sim", "Não"],
  },
  {
    label: "Nome da empresa atual",
    field: "empresa_atual",
    type: "text",
  },
  {
    label: "Experiência no segmento automotivo",
    type: "select",
    field: "experiencia_ramo_automotivo",
    options: [" ", "Sim", "Não"],
  },
  {
    label: "Modalidade Atual:",
    field: "modalidade_atual",
    type: "select",
    options: [
      " ",
      "CLT",
      "Desempregado",
      "Estagiário",
      "Freelance",
      "Prestador de serviços",
    ],
  },
  {
    label: "Tipo desejado (cagas abertas no Linkedin)",
    type: "select",
    field: "tipo_desejado_linkedin",
    options: [" ", "Opção A", "Opção B", "Opção C"],
  },
  {
    label: "Nível Atual na função",
    field: "nivel_funcao",
    type: "select",
    options: [" ", "Júnior", "Pleno", "Sênior"],
  },
  {
    label: "Formação",
    field: "formacao",
    type: "select",
    options: [
      " ",
      "Administração",
      "Engenharia Mecânica",
      "Engenharia Elétrica",
      "Engenharia de Qualidade",
      "Engenharia de Automação",
      "Técnica Mecânica",
      "Técnica Elétrica",
      "Ensino Médio",
      "Outro",
      "Arquitetura",
      "Ciência da Computação",
      "Medicina",
      "Direito",
      "Contabilidade",
      "Biologia",
      "Economia",
      "Design Gráfico",
      "Marketing",
      "Educação Física",
      "Química",
      "Farmácia",
      "Fisioterapia",
      "Administração Hospitalar",
      "Geologia",
      "Enfermagem",
      "Jornalismo",
      "Matemática",
      "Nutrição",
      "Odontologia",
      "Relações Internacionais",
      "Sociologia",
      "Publicidade e Propaganda",
      "Pedagogia",
      "Ciências Políticas",
      "Medicina Veterinária",
      "Engenharia Química",
      "Ciências Ambientais",
      "Administração Pública",
      "História",
      "Engenharia de Produção",
      "Ciências da Informação",
      "Astrofísica",
      "Comércio Exterior",
      "Teatro",
      "Engenharia de Software",
      "Geografia",
      "Artes Visuais",
      "Letras",
      "Ciências Sociais",
      "Design de Moda",
      "Engenharia Aeroespacial",
      "Filosofia",
      "Engenharia de Telecomunicações",
      "Música",
    ],
  },
  {
    label: "Possui interesse IMEDIATO na ocupação da vaga:",
    field: "interesse_imediato",
    type: "select",
    options: [" ", "Sim", "Não"],
  },
];

export const camposRadioLocalizacao: FieldRadio[] = [
  {
    label: "Vaga 100% Presencial Betim/MG",
    type: "select",
    field: "vaga_100_presencial_betim_mg",
    options: [" ", "Sim", "Não"],
  },

  {
    label: "Vaga Internacional",
    field: "vaga_internacional",
    type: "select",
    options: [" ", "Sim", "Não"],
  },

  {
    label: "Vaga 100% Presencial Porto Real/RJ",
    type: "select",
    field: "vaga_100_presencial_porto_real_rj",
    options: [" ", "Sim", "Não"],
  },

  {
    label: "Home Office",
    field: "home_office",
    type: "select",
    options: [" ", "Sim", "Não"],
  },

  {
    label: "Vaga 100% Presencial Goiana/PE",
    type: "select",
    field: "vaga_100_presencial_goiana_pe",
    options: [" ", "Sim", "Não"],
  },
  {
    label: "Vaga Híbrida Betim",
    field: "vaga_hibrida_betim",
    type: "select",
    options: [" ", "Sim", "Não"],
  },
];

export const camposDisponibilidadeForm: FieldRadio[] = [
  {
    label: "Disponibilidade ENTREVISTA on-line",
    type: "select",
    field: "entrevista_online",
    options: [" ", "Manhã", "Tarde", "Noite"],
  },
  {
    label: "Disponibilidade TESTE TÉCNICO on-line (seg a sex).",
    type: "select",
    field: "teste_tecnico",
    options: [" ", "09:00 as 10:00hs", "12:00 as 13:00hs", "18:00 as 19:00hs"],
  },
  {
    label: "Nível de idioma para conversação [Inglês]",
    type: "select",
    field: "conhecimento_ingles",
    options: [" ", "Básico", "Intermediário", "Avançado", "Fluente", "N/A"],
  },
  {
    label: "Possui CNPJ ativo? ",
    type: "select",
    field: "cnpj",
    options: [" ", "Sim", "Não"],
  },
  {
    label: "Tipo CPNJ",
    type: "select",
    field: "tipo_cnpj",
    options: [" ", "Mei", "ME", "Ltda", "Eirelli", "N/A", "Outro"],
  },
];
