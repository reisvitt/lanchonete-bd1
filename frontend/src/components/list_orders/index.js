import { Container, TitleStatus,Item, Qty, Name, Order} from "./styles"

const ListOrders = ({content, status, view}) => {
  return (
    <Container>
      <TitleStatus>{status.title}</TitleStatus>

      {
        content?.filter(order => order.status === status.title).map((item, key) => (
          <Item key={key} onClick={() => view(({id: item.order_id, items: [item]}))}>
            <Qty>{item.quantity}</Qty>
            <Name>{item.name}</Name>
            <Order>#{item.order_id}</Order>
          </Item>
        ))
      }
    </Container>
  )
}

export default ListOrders