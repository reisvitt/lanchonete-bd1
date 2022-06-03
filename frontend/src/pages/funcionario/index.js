import React, {useEffect, useState} from 'react'
import {MdModeEditOutline} from 'react-icons/md'
import EditContent from '../../components/edit_user'
import Card from '../../components/funcionario_card'
import ListHeader from '../../components/list_header'
import Loading from '../../components/loading'
import { Title } from '../../components/ui/components'
import api from '../../services'
import { Container, ContainerItems } from './styles'

const fake = [
  {
    "id": 1,
    "name": "Vitor",
    "last_name": "Reis",
    "email": "vitor@gmail.com",
    "salary": 600,
    "employer_type_id": 3,
    "created_at": "2022-06-01T12:48:34.509Z",
    "updated_at": "2022-06-01T12:48:34.509Z",
    "employer_type": {
      "id": 3,
      "title": "Gerente",
      "created_at": "2022-06-01T09:48:34.477-03:00",
      "updated_at": "2022-06-01T09:48:34.477-03:00"
    }
  },
  {
    "id": 1,
    "name": "Vitor",
    "last_name": "Reis",
    "email": "vitor@gmail.com",
    "salary": 600,
    "employer_type_id": 3,
    "created_at": "2022-06-01T12:48:34.509Z",
    "updated_at": "2022-06-01T12:48:34.509Z",
    "employer_type": {
      "id": 3,
      "title": "Gerente",
      "created_at": "2022-06-01T09:48:34.477-03:00",
      "updated_at": "2022-06-01T09:48:34.477-03:00"
    }
  },{
    "id": 1,
    "name": "Vitor",
    "last_name": "Reis",
    "email": "vitor@gmail.com",
    "salary": 600,
    "employer_type_id": 3,
    "created_at": "2022-06-01T12:48:34.509Z",
    "updated_at": "2022-06-01T12:48:34.509Z",
    "employer_type": {
      "id": 3,
      "title": "Gerente",
      "created_at": "2022-06-01T09:48:34.477-03:00",
      "updated_at": "2022-06-01T09:48:34.477-03:00"
    }
  }
]

const Funcionario = () => {
  const [data, setData] = useState(fake)
  const [loading, setLoading] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [userToEdit, setUserToEdit] = useState()

  useEffect(() => {
    /*api.get('/ala')
    .then(res => {
      setData(res.data)
    }).catch(error => {
      console.log(JSON.stringify(error))
    }).finally(() => {
      setLoading(false)
    })*/

  }, [])

  const fields = [
    {
      title: 'Nome',
      grow: 1,
      field: 'name',
    },
    {
      title: 'Último nome',
      grow: 1,
      field: 'last_name',
    },
    {
      title: 'E-mail',
      grow: 1,
      field: 'email',
    },
    {
      title: 'Tipo',
      grow: 1,
      field: 'employer_type',
      field_child: 'title'
    },
    {
      grow: 0.7,
      controls: [
        {
          icon: MdModeEditOutline,
          action: (user) => {
            setEditModal(true)
            setUserToEdit(user)
          }
        }
      ],
    },
  ]

  const submit = (values) => {
    //
  }

  if(loading){
    return <Loading />
  }

  return  (
    <Container>
      <Title>Funcionários</Title>

      <ContainerItems>
        <ListHeader data={fields} />
        {
          data.map((item, key) => (
            <Card content={item} fields={fields} key={key}/>
          ))
        }
      </ContainerItems>

      <EditContent content={userToEdit} isVisible={editModal} close={() => setEditModal(false)} submit={submit} />
    </Container>
  )
}

export default Funcionario