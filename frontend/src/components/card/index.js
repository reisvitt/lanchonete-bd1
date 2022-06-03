import {HiPlus} from 'react-icons/hi'
import { Container, Title, MenuButton, ContainerClick } from "./styles"

const Card = ({create, content, type}) => {


  if(create){
    return (
      <Container>
        <Title>{content?.name}</Title>

        <MenuButton>
          <HiPlus color="#000" size={22} />
        </MenuButton>
      </Container>
    )
  }

  return (
    <ContainerClick to={`/ala/${content.id}`}>
      <Title>{content?.name}</Title>
    </ContainerClick>
  )
}

export default Card