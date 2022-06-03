import React from 'react';
import styled from 'styled-components';
import {
  Box, Container,
} from '../../components/ui/components';

function PageNotFound() {
  return (
    <StyledContainer>
      <Box maxW={900} mx="auto" py={[45, 60, 90]} minH="100%" d="flex" alignItems="center" justifyContent="center">
        <Center>
          <Title>Página não encontrada</Title>
        </Center>
      </Box>
    </StyledContainer>
  );
}

export default PageNotFound;

const Title = styled.h1`
  font-size: 34px;
  line-height: 45.32px;
  font-weight: normal;
  margin-bottom: 30px;
  color: #383E71;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 40px;
`;

const StyledContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  min-width: 100vw;
  position: fixed;
  top: 0;
  left:0;

`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;