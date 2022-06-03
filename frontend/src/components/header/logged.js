import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi'
import {  Flex, Image , Box} from '../ui/components';
import Logo from '../../assets/images/ifood_orange.png';
import LocalStorage from '../../helpers/local_storage';

function Header() {
  const [showMenu, setshowMenu] = useState(false)
  const user = LocalStorage.getItem('user')
  
  const name = 'Lanchonete'

  return (
    <Box mb={10} bg={'#f8f8f8'}>
      <CustomFlex w="100%" maxW="1400px" ml="auto"  mr="auto" >
        <Flex justifyContent="center" alignItems="center">
          <ContainerLogo to={`/`}>
            <ImageLogo src={Logo} alt={name} maxW="100px" />
          </ContainerLogo>

          <Title color={'#000'}>{name}</Title>
        </Flex>

        <End>
          <Item onClick={() => setshowMenu(true)}>
            {user?.employer_type?.title} - {user?.name} 
            <FiChevronDown color="#FFF" size={20} />
          </Item>
          {
            showMenu && (
              <>
                <Bg onClick={() => setshowMenu(false)} />
                <Menu>
                  <ItemLink to="/perfil" onClick={() => setshowMenu(false)} >Perfil</ItemLink>
                  <ItemLink to="/logout" onClick={() => setshowMenu(false)}>Sair</ItemLink>
                </Menu>
              </>
            )
          }
        </End>

      </CustomFlex>
    </Box>
  );
}

export default Header;

const CustomFlex = styled(Flex)`
  overflow: hidden;
  background-color: ${(props) => props?.bg || 'transparent'};
  position: relative;
  z-index: 2;
  @media (min-width: '768px') {
    box-shadow: 0 4px 22px rgba(0, 0, 0, 0.15);
  };
  height: 15vh;
  padding: 0 15px;
`;

const ImageLogo = styled(Image)`
  max-height: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 100%;
  object-fit: contain;
`;

const ContainerLogo = styled(Link)`
  border-radius: 4px;
  background-color: $fff;
  padding-left: 10px;
  height: 70px;
  width: 120px;
  max-height: 70px;
  max-width: 120px;
`;

const Title = styled.h2`
  display: flex;
  flex: 1;
  margin: 0;
  margin-left: 20px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.color || '#000'};
`;

const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
`;

const Menu = styled.div`
  position: fixed;
  top: 15vh;
  padding: 0 15px 0 0;
  background-color: #FFF;
  z-index: 2;

  display: flex;
  flex-direction: column;
  
`;

const End = styled.div`
  align-self: center;
  margin-left: auto;
  position: relative;
`;

const Item = styled.div`
  border-radius: 10px;
  background-color: #FF6B00;
  padding: 15px 25px;
  color: #FFF;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    margin-top: 5px;
    margin-left: 12px;
  }
`;

const ItemLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  font-family: Montserrat;
  padding: 15px;
  cursor: pointer;
  text-decoration: none;
  color: #222;

  :hover{
    opacity: 0.85;
    color: #FF6B00;
  }
`;