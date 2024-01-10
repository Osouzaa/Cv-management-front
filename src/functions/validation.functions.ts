export const validarDados = (dados : any) => {
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
  
    if (
      !idade ||
      !profissional ||
      !status ||
      !telefone ||
      !cidade ||
      !email ||
      !vaga_100_presencial_porto_real_rj ||
      !vaga_100_presencial_goiana_pe ||
      !vaga_100_presencial_betim_mg ||
      !vaga_hibrida_betim ||
      !home_office ||
      !ultima_empresa ||
      !ultimo_salario ||
      !target_clt ||
      !conhecimento_ingles
    ) {
      return false;
    }
  
    // Adicione outras validações conforme necessário, como validar o formato do email, telefone, etc.
  
    return true; // Todos os dados estão preenchidos, retorna verdadeiro
  };
  