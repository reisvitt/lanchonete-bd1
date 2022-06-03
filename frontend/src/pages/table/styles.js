import styled from 'styled-components'

export const Container = styled.div`
  margin: 40px 15px 0;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewOder = styled.div`
  width: 250px;
  max-width: 100%;
  margin-bottom: 30px;
  transition-duration: 0.2s;
  transition-property: transform;  

  &:hover{
    transform: scale(1.05);
  }
`;

export const Empty = styled.div`
  display: flex;
`;
export const EmptyTitle = styled.h4`
  display: flex;
  font-family: Montserrat;
  font-size: 24px;
  margin: 20px auto;
  font-weight: 400;
  color: #444;
`;