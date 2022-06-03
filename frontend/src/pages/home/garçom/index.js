import React, {useEffect, useState} from 'react'
import Card from '../../../components/gerente_card'
import Loading from '../../../components/loading'
import { Title } from '../../../components/ui/components'
import api from '../../../services'
import { Container, ContainerItems } from './styles'

const HomeGarcom = () => {
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
      <Title>Alas</Title>

      <ContainerItems>
        {
          data.map((item, key) => (
            <Card content={{...item, path: '/ala/' + item.id}} alas key={key} />
          ))
        }
      </ContainerItems>
    </Container>
  )
}

export default HomeGarcom