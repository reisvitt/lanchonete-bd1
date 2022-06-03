import { Container, Name, ContainerControls,Control } from "./styles"

const Card = ({content, fields}) => {

  return (
    <Container>
      {
        fields.map((item, key) => (
          !item.controls ? (
            <Name length={fields.length} key={key}>
              {
                item.field_child ? content[item.field][item.field_child] : content[item.field]
              }
            </Name>
          ) : (
            <ContainerControls>
              {
                item.controls.map(({icon:Icon, ...item}, key) => (
                  <Control onClick={() => item.action(content)} key={key}>
                    <Icon size={22} color="##231F20" />
                  </Control>
                ))
              }
            </ContainerControls>
          )
          
        ))
      }
    </Container>
  )
}

export default Card