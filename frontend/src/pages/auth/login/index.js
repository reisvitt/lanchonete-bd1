/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import FormFactory from '../../../components/form_factory'
import Hamburguer from '../../../assets/images/hamburguer.png'
import api from '../../../services'
import {usePopUpContext} from '../../../contexts'
import { goToUrl } from '../../../utils/go_to_url'
import { getApiErrorByStatus } from '../../../helpers/api-erros'
import LocalStorage from '../../../helpers/local_storage'
import {
    Gradient,
    Container,
    Content,
    Left,
    Right,
    Title,
    SubTitle,
    ContainerForm,
    ContainerImage
} from './styles'


const Login = () => {
  const {showPopUp} = usePopUpContext()
  const history = useHistory()

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
          col: ['100%'],
          value: ''
        },
        {
          name: 'password',
          isRequired: true,
          placeholder: 'Digite sua senha',
          validations: 'passwordWithMatches',
          component: 'InputPassword',
          value: '',
          title: 'Senha'
        },
        {
          name: 'button',
          component: 'Button',
          title: 'Entrar',
          submittingText: 'Entrando',
          mt: 20,
        }
      ]
    }
  ]

  useEffect(() => {
    const user = LocalStorage.getItem('user')
    if(user) goToUrl(history, '/')
  }, [])

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
      <Gradient />
      <Content>
        <Left>
          <ContainerImage>
            <img src={Hamburguer} /> 
          </ContainerImage>

        </Left>
        <Right>
          <Title>
            Olá, seja
            <br/>
            bem-vindo
          </Title>

          <SubTitle>Para acessar a plataforma, <br/> faça seu login.</SubTitle>


          <ContainerForm>
            <FormFactory data={data} onSubmit={auth} />
          </ContainerForm>

        </Right>
      </Content>
    </Container>
  )
}

export default Login