import React, { useEffect, useState } from 'react'
import {ORDER_STATUS} from '../../../enums/order_status'
import { Title } from '../../../components/ui/components'
import { Container,Content, ContainerOrderStatus } from './styles'
import ListOrders from '../../../components/list_orders'
import ViewEditOrder from '../../../components/view_edit_order'
import api from '../../../services'
import { usePopUpContext } from '../../../contexts'
import { getApiErrorByStatus } from '../../../helpers/api-erros'
import Loading from '../../../components/loading'


const HomeCozinha = () => {
  const {showPopUp} = usePopUpContext()
  const [data, setData] = useState([])
  const [viewEditVisible, setViewEditVisible] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const res = await api.get("/order_item")
      
      setData(res.data)
    } catch (error) {
      showPopUp(getApiErrorByStatus(error))
    } finally {
      setLoading(false)
    }

  }

  if(loading){
    return <Loading />
  }

  return  (
    <Container>
      <Title>Cozinha</Title>

      <Content>
        {
          ORDER_STATUS.filter(item => item.title !== "Entregue").map((item, key) => (
            <ContainerOrderStatus key={key}>
              <ListOrders content={data} status={item} view={setViewEditVisible} />
            </ContainerOrderStatus>
          ))
        }
      </Content>

      <ViewEditOrder
        content={viewEditVisible} 
        isVisible={!!viewEditVisible} 
        close={() => setViewEditVisible(undefined)}
        reload={getData}
        valid_status={ORDER_STATUS.map(item => item.title)}
      />
    </Container>
  )
}

export default HomeCozinha