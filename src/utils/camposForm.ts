import { Candidate } from "../types/candidate.types";

interface Field {
  label: string;
  field: keyof Candidate;
  type?: string;
}

export const fields: Field[] = [
  { label: "Profissional", field: "profissional" },
  { label: "CPF", field: "cpf" },

  { label: "E-mail", field: "email" },

  { label: "Idade", field: "idade" },
  { label: "Telefone", field: "telefone" },
  { label: "Cidade", field: "cidade" },
  { label: "Status", field: "status" },

  { label: "Ultima Empresa", field: "ultima_empresa" },
  { label: "Último Salário", field: "ultimo_salario" },

  { label: "Target CLT", field: "target_clt" },

  {label: "Observação", field: 'observacao'}
];
