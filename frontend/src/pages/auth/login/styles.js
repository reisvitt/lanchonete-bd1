import styled from 'styled-components'

// Content, Left, Right, Title, SubTitle

export const Gradient = styled.div`
  height: 100vh;
  width: 45vw;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(255,107,0);
  background: linear-gradient(90deg, rgba(255,107,0,0.36761799446341037) 23%, rgba(255,255,255,0) 100%);

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Container = styled.div`
  padding-top: 3vh;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;

  * {
    font-family: Montserrat;
  }
`;

export const Content = styled.div`
  width: 85vw;
  display: flex;
  align-self: center;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 50%;
  display: flex;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 48px;
  color: #383E71;
  margin: 15px 0;
`;

export const SubTitle = styled.h4`
  color: #FF6B00;
  font-weight: 600;
  font-size: 18px;
`;
//const breakpoints = ['576px', '768px', '992px', '1200px', '1400px']
export const ContainerForm = styled.div`
  width: 100%;
  max-width: 550px;

  @media (max-width: 992px) {
    max-width: unset;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 75%;
    max-height: 100%;
    object-fit: contain;
  }
`;