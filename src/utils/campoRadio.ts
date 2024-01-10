import { Candidate } from "../types/candidate.types";

interface FieldRadio {
  label: string;
  field: keyof Candidate;
  type?: string;
}

export const camposRadio: FieldRadio[] = [
  {
    label: "Vaga 100% Presencial Porto Real/RJ",
    type: "radio",
    field: "vaga_100_presencial_porto_real_rj",
  },
  {
    label: "Home Office",
    field: "home_office",
    type: "radio",
  },

  {
    label: "Vaga 100% Presencial Goiana/PE",
    type: "radio",
    field: "vaga_100_presencial_goiana_pe",
  },
  {
    label: "Vaga Híbrida Betim",
    field: "vaga_hibrida_betim",
    type: "radio",
  },
  {
    label: "Vaga 100% Presencial Betim/MG",
    type: "radio",
    field: "vaga_100_presencial_betim_mg",
  },

  {
    label: "Conhecimento em inglês",
    field: "conhecimento_ingles",
    type: "radio",
  },
];
