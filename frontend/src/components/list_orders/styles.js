import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat;
  padding: 0 5px;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 97%;
  margin: 0 10px;

  padding: 15px 5px;
  cursor: pointer;
  border-bottom: 1px solid #c4c4c4;

  transition-duration: 0.2s;
  transition-property: transform;

  :hover{
    transform: scale(1.02);
  }
`

export const TitleStatus = styled.h4``


export const Order = styled.span`
  font-size: 18px;
  color: #444;
  font-family: Montserrat;
  margin-right: 10px;
  margin-left: auto;
`;

export const Qty = styled.h3`
  font-size: 18px;
  color: #444;
  font-weight: 700;
  font-family: Montserrat;
  margin-right: 10px;
`;

export const Name = styled.h3`
  font-size: 16px;
  color: #444;
  font-weight: 600;
  font-family: Montserrat;
`;
