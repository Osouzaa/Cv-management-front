export function formatarData(data: string): string {
  const dataObj = new Date(data);
  const mes = dataObj.toLocaleString('pt-BR', { month: 'short' });
  const ano = dataObj.getFullYear();
  return `${mes.toUpperCase()}/${ano}`;
}