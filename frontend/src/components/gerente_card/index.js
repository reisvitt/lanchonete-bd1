import { Title, ContainerClick } from "./styles"

const Card = ({content, icon: Icon}) => {

  return (
    <ContainerClick to={content.path}>
      {
        Icon && <Icon color="#FFF" size={35} />
      }
      <Title>{content?.name}</Title>
    </ContainerClick>
  )
}

export default Card