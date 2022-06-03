import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Button, Title} from '../../components/ui/components'
import OrderCard from '../../components/order_card'
import Loading from '../../components/loading'
import api from '../../services'
import ModalNewOrder from '../../components/modal_new_order'
import service from '../../services'
import LocalStorage from '../../helpers/local_storage'
import { usePopUpContext } from '../../contexts'
import { getApiErrorByStatus } from '../../helpers/api-erros'
import ViewEditOrder from '../../components/view_edit_order'
import { Container, ContainerItems,NewOder, Empty, EmptyTitle } from './styles'

const Table = () => {
  const user = LocalStorage.getItem('user')
  const {showPopUp} = usePopUpContext()

  const {id} = useParams()
  const [data, setData] = useState([])
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModalNewOrder, setShowModalNewOrder] = useState(false)

  const [viewEditVisible, setViewEditVisible] = useState()
  

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const items = await service.get("/items")
      const tables = await service.get(`/table/${id}`)
      setData(tables.data)
      setItems(items.data)
    } catch (error) {
      showPopUp(getApiErrorByStatus(error))
    } finally {
      setLoading(false)
    }

  }


  const submitNewOrder = async (items) => {
    const dataToSend = {
      table_id: parseInt(id),
      order_by: user.id,
      orders: items.map(item => ({
        item_id: item.id,
        quantity: item.quantity,
        note: ''
      }))
    }
    
    try {
      await api.post("/order", dataToSend)
      getData()
    } catch (error) {
      showPopUp(getApiErrorByStatus(error))
    }
  }

  const trash = async (order) => {
    setViewEditVisible(undefined)

    showPopUp({
      title: 'Excluir pedido #' + order.id,
      subTitle: 'Deseja realmente excluir este pedido?',
      buttons: [
        {
          title: 'Não'
        },
        {
          title: 'Sim',
          action: async () => {
            try {
              await api.delete(`/order/${order.id}`)
              getData()
            } catch (error) {
              showPopUp(getApiErrorByStatus(error))
            }
          }
        },
      ]
    })

  }

  if(loading){
    return <Loading />
  }

  if(data?.length === 0){
    return (
      <Container>
        <Title>Mesa {id} - Pedidos</Title>

        <ContainerItems>
          <NewOder>
            <Button onClick={() => setShowModalNewOrder(true)}>Novo pedido</Button>
          </NewOder>
        </ContainerItems>

        <Empty>
          <EmptyTitle>Sem pedidos</EmptyTitle>
        </Empty>
      </Container>
    )
  }

  return  (
    <Container>
      <Title>Mesa {id} - Pedidos</Title>

      <ContainerItems>
        <NewOder>
          <Button onClick={() => setShowModalNewOrder(true)}>Novo pedido</Button>
        </NewOder>
        {
          data?.map((item, key) => (
            <OrderCard content={item} key={key} view={setViewEditVisible} />
          ))
        }
      </ContainerItems>


      <ModalNewOrder 
        submit={submitNewOrder} 
        items={items} 
        close={() => setShowModalNewOrder(false)} isVisible={showModalNewOrder} 
      />

      <ViewEditOrder 
        content={viewEditVisible} 
        isVisible={!!viewEditVisible} 
        close={() => setViewEditVisible(undefined)} 
        trash={trash}
        reload={getData}
      />
    </Container>
  )
}

export default Table