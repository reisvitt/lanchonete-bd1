import React from 'react';
import styled from 'styled-components';
import { Image } from '../ui/components';
import Logo from '../../assets/images/ifood_orange.png';

function Header() {

  return (
    <Container>
      <ContainerLogo>
          <ImageLogo src={Logo} alt="Logo laranja" maxW="100px" />
      </ContainerLogo>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  z-index: 2;
  position: relative;
`;

const ImageLogo = styled(Image)`
  max-height: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 100%;
  object-fit: contain;
`;

const ContainerLogo = styled.div`
  border-radius: 4px;
  background-color: $fff;
  padding-left: 10px;
  height: 70px;
  width: 120px;
  max-height: 70px;
  max-width: 120px;
`;