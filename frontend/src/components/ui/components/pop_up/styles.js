import styled from 'styled-components'
import {Button as ButtonAux} from '../buttons'

export const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,.1);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
`;

export const ModalStyled = styled.div`
  position: fixed;
  z-index: 9999999;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

//  Content, Title, SubTitle 

export const Content = styled.div`
  border-radius: 10px;
  box-shadow: 1px 1px 10px -2px #838383;
  margin-bottom: 10%;
  background-color: #FFF;
  padding: 30px;
  width: 85%;
  max-width: 350px;
  aspect-ratio: 1/0.5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    font-family: Montserrat;
  }
`;

export const  Button = styled(ButtonAux)`
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 24px;
  color: #383E71;
  font-weight: 400;
  margin-bottom: 1.6em;
`;

export const SubTitle = styled.h4`
  font-size: 18px;
  color: #383E71;
  margin-bottom: 2.5em;
  margin-top: 0;
  font-weight: 300;
`;
