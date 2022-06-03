import React  from 'react';
import { Box, Container } from '../../components/ui/components';

function NoAuthorization() {

  return (
    <Container>
      <Box textAlign="center">
        <h1>Sem autorização</h1>
        <p>Você não tem permissão para acessar essa página</p>
      </Box>
    </Container>
  );
}

export default NoAuthorization;
