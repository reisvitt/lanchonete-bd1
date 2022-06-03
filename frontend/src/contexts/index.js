import React from 'react'
import {PopUpProvider} from './pop_up'

const Contexts = ({children}) => {
  return (
    <PopUpProvider>
      {children}
    </PopUpProvider>
  )
}
export default Contexts

export * from './pop_up'