import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 3vh;

  * {
    font-family: Montserrat;
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 800px;

  button {
    max-width: 50%;
  }

  @media (max-width: 992px) {
    button {
      max-width: 100%;
      padding: 0 15px;
    }
  }
`;