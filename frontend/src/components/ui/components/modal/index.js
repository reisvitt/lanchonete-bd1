import styled from 'styled-components'

export const Modal = ({close, children}) => {
  return (
    <>
      <ModalBg onClick={close} />
      <ModalStyled>
        <Content>
          {children}
        </Content>
      </ModalStyled>
    </>
  )
}

const ModalBg = styled.div`
  position: fixed;
  background: rgba(0,0,0,.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
`;

const ModalStyled = styled.div`
  border-radius: 10px;
  box-shadow: 1px 1px 10px -2px #838383;
  width: 60%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
  overflow: hidden;
  min-width: 400px;
  max-width: 90%;
`;

const Content = styled.div`
  background-color: #FFF;
  max-width: 100%;
  padding: 15px;
`;