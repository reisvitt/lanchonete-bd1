import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color:  #FFF;
  padding: 25px 15px;

  -webkit-box-shadow: 0px 0px 17px -10px #000000;
  box-shadow: 0px 0px 17px -10px #000000;

  border-radius: 15px;
  margin-bottom: 20px;
  cursor: pointer;

  transition-duration: 0.2s;
  transition-property: transform;  

  &:hover{
    transform: scale(1.01);
  }
`;

export const Qty = styled.h3`
  font-size: 18px;
  color: #444;
  font-weight: 700;
  font-family: Montserrat;
  margin-right: 5px;
`;

export const Title = styled.h3`
  font-size: 18px;
  color: #444;
  font-weight: 600;
  font-family: Montserrat;
`;

export const Status = styled.h3`
  font-size: 18px;
  color: #444;
  font-weight: 700;
  font-family: Montserrat;
  margin-left: auto;
  margin-right: 5%;
  color: ${props => props.color};
`;

export const Date = styled.h3`
  font-size: 18px;
  color: #444;
  font-weight: 700;
  font-family: Montserrat;
  margin-left: auto;
  margin-right: 5%;
`;
