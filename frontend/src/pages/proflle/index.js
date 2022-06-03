import React from 'react'
import { useHistory } from 'react-router-dom'
import FormFactory from '../../components/form_factory'
import api from '../../services'
import {usePopUpContext} from '../../contexts'
import { goToUrl } from '../../utils/go_to_url'
import { getApiErrorByStatus } from '../../helpers/api-erros'
import LocalStorage from '../../helpers/local_storage'
import {
  Container,
  ContainerForm,
} from './styles'
import { Title } from '../../components/ui/components'


const Profile = () => {
  const {showPopUp} = usePopUpContext()
  const history = useHistory()
  const user = LocalStorage.getItem('user')

  const data = [
    {
      name: '',
      items: [
        {
          name: 'email',
          title: 'E-mail',
          placeholder: 'Digite seu e-mail',
          isRequired: true,
          validations: 'emailRequired',
          component: 'Input',
          col: ['100%', '47%'],
          value: user?.email,
          disabled: true,
        },
        {
          name: 'employer_type',
          title: 'Cargo',
          placeholder: 'Cargo',
          isRequired: true,
          component: 'Input',
          col: ['100%', '47%'],
          value: user?.employer_type?.title,
          disabled: true,
        },
        {
          name: 'name',
          title: 'Nome',
          placeholder: 'Digite seu nome',
          isRequired: true,
          component: 'Input',
          col: ['100%', '47%'],
          value: user?.name,
        },
        {
          name: 'last_name',
          title: 'Último nome',
          placeholder: 'Digite seu último nome',
          isRequired: true,
          component: 'Input',
          col: ['100%', '47%'],
          value: user?.last_name,
        },
        {
          name: 'button',
          component: 'Button',
          title: 'Salvar',
          submittingText: 'Salvando...',
          mt: 20,
        }
      ]
    }
  ]

  const auth = async (values, actions) => {
    try {
      const user = await api.post('/auth', {
        email: values.email,
        password: values.password,
      })

      LocalStorage.setItem("user", user.data)

      goToUrl(history, '/')

    } catch (error) {
       showPopUp(getApiErrorByStatus(error))
    } finally {
      actions.setSubmiting(false)
    }
  }

  return (
    <Container>
      <Title>
        Editar perfil
      </Title>

      <ContainerForm>
        <FormFactory data={data} onSubmit={auth} />
      </ContainerForm>
    </Container>
  )
}

export default Profile