import { Candidate } from "../types/candidate.types";

interface Field {
  label: string;
  field: keyof Candidate;
  type?: string;
}

export const fields: Field[] = [
  { label: "Profissional", field: "profissional" },
  { label: "CPF", field: "cpf" },
  {
    label: "Vaga 100% Presencial Porto Real/RJ",
    type: "radio",
    field: "vaga_100_presencial_porto_real_rj",
  },
  { label: "E-mail", field: "email" },

  { label: "Idade", field: "idade" },
  {
    label: "Vaga 100% Presencial Goiana/PE",
    type: "radio",
    field: "vaga_100_presencial_goiana_pe",
  },
  { label: "Cidade", field: "cidade" },
  { label: "Status", field: "status" },
  {
    label: "Vaga 100% Presencial Betim/MG",
    type: "radio",
    field: "vaga_100_presencial_betim_mg",
  },
  { label: "Ultima Empresa", field: "ultima_empresa" },
  { label: "Último Salário", field: "ultimo_salario" },
  {
    label: "Home Office",
    field: "home_office",
    type: "radio",
  },
  { label: "Target CLT", field: "target_clt" },
  {
    label: "Conhecimento em inglês",
    field: "conhecimento_ingles",
    type: "select",
  },
 

  {
    label: "Vaga Híbrida Betim",
    field: "vaga_hibrida_betim",
    type: "radio",
  },
  
  
];
