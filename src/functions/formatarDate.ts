export function formatarData(data: string): string {
  const dataObj = new Date(data);
  const mes = dataObj.toLocaleString('pt-BR', { month: 'short' });
  const ano = dataObj.getFullYear();
  return `${mes.toUpperCase()}/${ano}`;
}
export function formatarDataPT(data: string): string {
  const dataObj = new Date(data);
  const dia = ("0" + dataObj.getDate()).slice(-2); 
  const mes = ("0" + (dataObj.getMonth() + 1)).slice(-2); 
  const ano = dataObj.getFullYear();
  return `${dia}/${mes}/${ano}`;
}