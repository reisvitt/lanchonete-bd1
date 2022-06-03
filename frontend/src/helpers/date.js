export const formatDate = (string) => {
  return new Date(string).toLocaleString('pt-BR', {month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})
}