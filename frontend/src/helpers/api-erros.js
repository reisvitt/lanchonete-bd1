export const getApiErrorByStatus = (error) => {
  switch(error?.response?.status){
    case 400:
      return ({
        title: 'Requisição mal',
        subTitle: 'Requisição com algum dado incorreto! Por favor, corrija as informações.'
      })
    case 403:
      return ({
        title: 'Sem permissão',
        subTitle: 'Sem permissão a este conteúdo'
      })
    case 404:
      return ({
        title: 'Não encontrado',
        subTitle: 'Informação não encontrada'
      })
    default: 
      return ({
        title: 'Erro na comunicação',
        subTitle: 'Houve algum erro na comunicação com noss servidor! Tente novamente mais tarde.'
      })
  }
}