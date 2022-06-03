import styled from 'styled-components'

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
