import { Link } from 'react-router-dom';
import styled from 'styled-components'


export const Container = styled.div`
  border: 1px solid #aaa;
  min-width: 200px;
  
  background-color:  #FFF;

  box-shadow: 0px 1px 21px -7px rgba(0,0,0,0.66);
  -webkit-box-shadow: 0px 1px 21px -7px rgba(0,0,0,0.66);
  -moz-box-shadow: 0px 1px 21px -7px rgba(0,0,0,0.66);

  border-radius: 15px;
  padding: 15px;
  margin-right: 15px;
  margin-top: 15px;
  aspect-ratio: 1/0.8;

  position: relative;
`;


export const ContainerClick = styled(Link)`
  width: 300px;
  max-width: 100%;

  display: flex;
  align-items: center;
  
  background: rgb(231,111,84);
  background: linear-gradient(90deg, rgba(231,111,84,1) 0%, rgba(255,107,0,1) 100%);

  transition-duration: 0.2s;
  transition-property: box-shadow;
  transition-property: transform;

  transform: scale(1.02);


  &:hover {
    transform: scale(1);
  }

  border-radius: 15px;
  padding: 15px;
  margin-right: 2%;
  margin-top: 2%;
  aspect-ratio: 1/0.55;

  position: relative;

  text-decoration: none;
  
  * {
    color: #FFF;
  }

  svg {
    width: 30%;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const MenuButton = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
`;