import React from 'react'
import { Overlay, ModalStyled, Content, Title, SubTitle, Button } from './styles';

const PopUp = ({
  isVisible,
  close,
  title = "",
  subTitle = '',
  buttons = [{ title: 'Ok', action: close }]
}) => {

  const action = (button) => {
    close()
    if(button.action){
      button.action()
    }
  }

  if(!isVisible) return null;

  return (
    <>
      <Overlay />
      <ModalStyled>
        <Content>
          {
            title && <Title>{title}</Title>
          }
          {
            subTitle && <SubTitle>{subTitle}</SubTitle>
          }
          
          {buttons &&
          buttons.map((button, index) => (
            <Button onClick={() => action(button)} key={index}>
              {button.title}
            </Button>
          ))}
          
        </Content>
      </ModalStyled>
    </>
  )
}

export default PopUp