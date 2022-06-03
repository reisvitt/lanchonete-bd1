import styled from 'styled-components'

export const Container = styled.div`
  margin: 40px 15px 0;
`

export const Content = styled.div`
  display: flex;
  overflow-x: scroll;
  min-height: 55vh;
`

export const ContainerOrderStatus = styled.div`
  border-right: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 400px;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;