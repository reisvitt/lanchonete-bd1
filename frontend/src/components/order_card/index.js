import { formatDate } from '../../helpers/date'
import { Container, Date as DateComponent, Title } from "./styles"

const OrderCard = ({content, view}) => {

  const options = [
    {
      name: 'Editar',
      action: () => {}
    },
    {
      name: 'Excluir',
      action: () => {}
    },
  ]

  return (
    <Container onClick={() =>  view(content)}>
      <Title>Pedido - #{content?.id}</Title>
      <DateComponent>{formatDate(content?.created_at)}</DateComponent>
    </Container>
  )
}

export default OrderCard