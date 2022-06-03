import { useState } from 'react';
import styled from 'styled-components'
import { Button, Modal } from '../ui/components';

const ModalNewOrder = ({close, submit, items, isVisible}) => {
  const [selectedItems, setSelectedItems] = useState([...items])

  const increase = (aux) => {
    
    setSelectedItems(prev => prev.map(item => {
      if(item.id === aux.id){
        return ({
          ...item,
          quantity: (aux.quantity || 0) + 1
        })
      }

      return item
    }))
  }

  const decrease = (aux) => {
    setSelectedItems(prev => prev.map(item => {
      if(item.id === aux.id){
        return ({
          ...item,
          quantity: (aux.quantity || 1) - 1
        })
      }

      return item
    }))
  }

  const filterOrders = () => {
    const selected = selectedItems.filter(item => item.quantity > 0)
    close()
    setSelectedItems(items)
    submit(selected)
  }

  const cancel = () => {
    setSelectedItems(items)
    close()
  }

  if(!isVisible) return null

  return (
    <Modal close={close}>
      <ContainerItem>
        <label>Mesa: 2</label>
      </ContainerItem>
      
      <ContainerItems>
        {
          selectedItems.map((item) => (
            <Item key={item.id}>
              <h3>{item?.name}</h3>

              <label>{Number(item?.price).toMoney()}</label>

              <Decrease  onClick={() => decrease(item)} disabled={!item?.quantity}>-</Decrease>

              <Qtd>{item?.quantity || 0}</Qtd>

              <Increase onClick={() => increase(item)}>+</Increase>
            </Item>
          ))
        }

      </ContainerItems>

      <ContainerButton>
        <Button outline onClick={cancel}>Cancelar</Button>
        <Button onClick={filterOrders}>Realizar pedido</Button>
      </ContainerButton>
    </Modal>
  )
}

export default ModalNewOrder

const ContainerItem = styled.div`
  margin: 0px 8px 20px 0px;
  margin-top: 15px;
  display: flex;
  align-items: center;

  label {
    margin-right: 5px;
    background-color: #FF6B00;
    padding: 8px 12px;
    border-radius: 5px;
    color: #FFF;
    font-weight: 500;
    font-size: 20px;
  }
`;

const ContainerItems = styled.div``

const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 0;


  h3 {
    flex: 1;
  }

  label {
    margin-right: 2%;
  }
`

const ButtonLocal = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: #FFF;
  font-size: 30px;
  font-weight: bold;
  margin: 0 1%;
  cursor: pointer;
  border: 1px solid #FF6B00;
  color: #FF6B00;
`

const Increase = styled(ButtonLocal)`
`;

const Decrease = styled(ButtonLocal)`
`;


const Qtd = styled.label`
  font-weight: bold;
  font-size: 24px;
  margin-left: 2%;
`;

const ContainerButton = styled.div`
  display: flex;
  margin: 40px 0 20px auto;
  max-width: 100%;
  justify-content: space-between;

  button {
    width: 48%;
  }
`;