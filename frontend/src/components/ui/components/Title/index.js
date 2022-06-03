import React from 'react'
import styled from 'styled-components'

export const Title = ({children}) => {
  return (
    <TitleIntern>
      {children}
    </TitleIntern>
  )
}



const TitleIntern = styled.h3`
  font-weight: 400;
  font-size: 48px;
  color: #383E71;
  margin: 15px 0;
  margin-bottom: 6vh;
  font-family: Montserrat;
`;