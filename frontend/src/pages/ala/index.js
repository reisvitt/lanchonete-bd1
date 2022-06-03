import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import TableCard from '../../components/table_card'
import Loading from '../../components/loading'
import { Container, ContainerItems, Title, Empty, EmptyTitle } from './styles'
import service from '../../services'

const Ala = () => {
  const {id} = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    service.get('/ala/'+id).then(res => {
      setData(res.data)
    })


    setLoading(false)
  }, [])

  if(loading){
    return <Loading />
  }

  return  (
    <Container>
      <Title>Mesas</Title>

      {
        data.length > 0 ? (
          <ContainerItems>
            {
              data.map((item, key) => (
                <TableCard content={item} type="table" key={key} />
              ))
            }
          </ContainerItems>
        ) : (
          <Empty>
            <EmptyTitle>Sem mesas nesta ala</EmptyTitle>
          </Empty>
        )
      }

    </Container>
  )
}

export default Ala