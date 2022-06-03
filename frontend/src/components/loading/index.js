import React from 'react';
import styled, { keyframes } from 'styled-components';

function Loading({ onlySpinner, ...props }) {
  if (onlySpinner) {
    return <Spinner {...props} />;
  }

  return (
    <Container>
      <Label>Carregando...</Label>
      <Spinner {...props} />
    </Container>
  );
}

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: ${(props) => props?.borderWidth || '8px'} solid transparent;
  border-left-color:${(props) => props?.color || "#FF6B00"};
  border-radius: 50%;
  width: ${(props) => props?.width || '50px'};
  height: ${(props) => props?.height || '50px'};
  animation: ${rotate} 1s linear infinite;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  justify-content:center;
  align-items:center;
  display:flex;
  flex-direction:column;
`;

const Label = styled.label`
  color: #FF6B00;
  font-weight: 700;
  margin-bottom: 30px;
  font-size: 35px;
`;

export default Loading;