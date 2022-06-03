import { useState } from 'react'
import { SelectOption, } from "../ui/components"
import { ORDER_STATUS } from '../../enums/order_status'
import {  Item, Qty, Name, Status } from "./styles"
import api from '../../services'

const CAN_STATUS = ['Cancelado', "Entregue"]

const ViewEditOrder = ({item, reload, valid_status = CAN_STATUS}) => {
  const [status, setStatus] = useState(item.status)

  const changeValueStatus = async (value) => {
    
    if(valid_status.includes(value)){
      setStatus(value)

      const index = ORDER_STATUS.indexOf(ORDER_STATUS.find(item => item.title === value)) + 1
      
      await api.put('/order_item/'+ item.id, {
        status_id: index
      })

      if(reload){
        reload()
      }
    }
  }
  
  return (
    <Item >
      <Qty>{item.quantity}</Qty>
      <Name>{item.name}</Name>
      <Status>
        <SelectOption 
          options={ORDER_STATUS.map((item => ({label: item.title, value: item.title})))}
          value={status}
          onChangeValue={changeValueStatus}
        />
      </Status>
    </Item>
  )
}

export default ViewEditOrder