import React from 'react';
import styled from 'styled-components';

function Footer() {

  return (
    <Container>
      <h5>Banco de dados 1 - <span>2021.1</span></h5>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  z-index: 2;
  position: relative;
  margin-top: auto;

  h5 {
    font-family: Montserrat;
    font-weight: 400;
    

    span {
      font-weight: 700;
      color: #FF6B00;
    }
  }
`;