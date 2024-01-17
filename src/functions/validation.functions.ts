export const validarDados = (dados: any) => {
  const {
    idade,
    profissional,
    status,
    telefone,
    cidade,
    email,
    vaga_100_presencial_porto_real_rj,
    vaga_100_presencial_goiana_pe,
    vaga_100_presencial_betim_mg,
    vaga_hibrida_betim,
    home_office,
    ultima_empresa,
    ultimo_salario,
    target_clt,
    conhecimento_ingles,
  } = dados;

  const camposVazios = [];

  if (!idade) camposVazios.push("idade");
  if (!profissional) camposVazios.push("profissional");
  if (!status) camposVazios.push("status");
  if (!telefone) camposVazios.push("telefone");
  if (!cidade) camposVazios.push("cidade");
  if (!email) camposVazios.push("email");
  if (!vaga_100_presencial_porto_real_rj)
    camposVazios.push("vaga_100_presencial_porto_real_rj");
  if (!vaga_100_presencial_goiana_pe)
    camposVazios.push("vaga_100_presencial_goiana_pe");
  if (!vaga_100_presencial_betim_mg)
    camposVazios.push("vaga_100_presencial_betim_mg");
  if (!vaga_hibrida_betim) camposVazios.push("vaga_hibrida_betim");
  if (!home_office) camposVazios.push("home_office");
  if (!ultima_empresa) camposVazios.push("ultima_empresa");
  if (!ultimo_salario) camposVazios.push("ultimo_salario");
  if (!target_clt) camposVazios.push("target_clt");
  if (!conhecimento_ingles) camposVazios.push("conhecimento_ingles");

  if (camposVazios.length > 0) {
    return false;
  }

  return true; 
};
