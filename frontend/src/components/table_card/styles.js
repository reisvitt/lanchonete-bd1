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

  text-decoration: none;
`;

export const Title = styled.div`
  font-size: 32px;
  color: #444;
  font-weight: bold;
`;

export const MenuButton = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
`;