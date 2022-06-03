import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Box, Container,
} from '../../components/ui/components';
function ServerErrors({ match }) {
  const { number } = match.params;

  const getTitle = () => {
    switch (number) {
      case '00': return 'Erro interno';
      case '01': return 'Funcionalidade não implementada';
      case '02': return 'Bad Gateway';
      case '03': return 'Serviço indisponível';
      case '04': return 'Tempo limite de conexão expirado';
      default: return 'Erro desconhecido';
    }
  };

  const getMessage = () => {
    switch (number) {
      case '00': return 'Ops, ocorreu um erro em nossos servidores.';
      case '01': return 'O servidor não reconhece o método de solicitação ou não pode atender à solicitação.';
      case '02':
      case '04': return 'O servidor estava agindo como um gateway ou proxy e recebeu uma resposta inválida do servidor upstream.';
      case '03': return 'O servidor não pode lidar com a solicitação, porque está sobrecarregado ou fora do ar, tente novamente mais tarde.';
      default: return 'Erro desconhecido.';
    }
  };

  return (
    <StyledContainer>
      <Box maxW={900} mx="auto" py={[45, 60, 90]} minH="100%" d="flex">
        <Center>
          <h1>{getTitle()}</h1>
          <p>{getMessage()}</p>
        </Center>
      </Box>
    </StyledContainer>
  );
}

ServerErrors.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      number: PropTypes.string,
    }),
  }).isRequired,
};
export default ServerErrors;

const StyledContainer = styled(Container)`
  min-height: calc(100vh -  200px);
  height: calc(100vh - 200px);
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p{
    text-align: center;
    max-width: 500px;
    margin-top: 20px;
  }
`;
