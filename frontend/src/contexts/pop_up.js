/**
 * Contexto responsável exibir os popUps
 */
import React, { useContext, createContext, useState } from 'react';
import PopUp from '../components/ui/components/pop_up'

const PopUpContext = createContext();

export function PopUpProvider({ children }) {
  const [contents, setContents] = useState({ isVisible: false })

  const showPopUp = (props) => {
    setContents({
      ...props,
      isVisible: true,
      close: closePopUp
    })
  }

  const closePopUp = () => {
    setContents({ isVisible: false })
  }

  return (
    <PopUpContext.Provider value={{ showPopUp, closePopUp }}>
      <PopUp {...contents} />
      {children}
    </PopUpContext.Provider>
  )
}

export const usePopUpContext = () => {
  const { showPopUp, closePopUp } = useContext(PopUpContext);
  if (!showPopUp) {
    throw new Error('usePopUpContext must be used within a provider PopUpProvider');
  }
  return { showPopUp, closePopUp };
};
