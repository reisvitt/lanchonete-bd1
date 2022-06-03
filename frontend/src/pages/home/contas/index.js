import React, {useEffect, useState} from 'react'
import Card from '../../../components/card'
import Loading from '../../../components/loading'
import { Title } from '../../../components/ui/components'
import api from '../../../services'
import { Container, ContainerItems } from './styles'

const HomeContas = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/ala')
    .then(res => {
      setData(res.data)
    }).catch(error => {
      console.log(JSON.stringify(error))
    }).finally(() => {
      setLoading(false)
    })

  }, [])

  if(loading){
    return <Loading />
  }

  return  (
    <Container>
      <Title>Alas Contas</Title>

      <ContainerItems>
        {
          data.map((item, key) => (
            <Card content={item} alas key={key} />
          ))
        }
      </ContainerItems>
    </Container>
  )
}

export default HomeContas