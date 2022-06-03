import { Container, Item, Title } from "./styles"

const ListHeader = ({data}) => {

  return (
    <Container>
      {
        data.map((item, key) => (
          <Item length={data.length} key={key}>
            {
              item?.title && <Title>{item.title}</Title>
            }
          </Item>
        ))
      }
    </Container>
  )
}

export default ListHeader