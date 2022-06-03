import styled from 'styled-components'


export const Container = styled.div`
  background-color: #FF6B00;
  display: flex;
`;

export const Item = styled.div`
  width: ${props => `${100 / props.length}%`};
  margin-left: 20px;
`;

export const Title = styled.h4`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
`;
