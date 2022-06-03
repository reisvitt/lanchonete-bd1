import styled from 'styled-components'


export const Content = styled.div`

min-height: 500px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 35px 0;

  h3 {
    font-size: 22px;
    margin: 0;
  }
`
export const Items = styled.div`
  
`
export const Item = styled.div`
  display: flex;
  border-top: 1px solid #d4d4d4;
  align-items: center;
`

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

export const Status = styled.div`
  margin: 10px 5% 0 auto;
  color: ${props => props.color};
`;

export const Trash = styled.button`
  color: #990000;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 18px;
  padding: 5px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  
  svg {
    margin-left: 5px;
  }
`;