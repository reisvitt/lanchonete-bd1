import React from 'react'
import {MdAttachMoney, MdPeople} from 'react-icons/md'
import {AiOutlineBorderlessTable} from 'react-icons/ai'
import Card from '../../../components/gerente_card'
import { Title } from '../../../components/ui/components'
import { Container, ContainerItems } from './styles'


const DASHBOARD_ITEMS = [
  {
    name: 'Contas',
    path: '/gerente/contas',
    icon: MdAttachMoney
  },
  {
    name: 'Funcionários',
    path: '/gerente/funcionarios',
    icon: MdPeople
  },
  {
    name: 'Alas',
    path: '/gerente/alas',
    icon: AiOutlineBorderlessTable
  },
]

const HomeGerente = () => {

  return  (
    <Container>
      <Title>Dashboard</Title>

      <ContainerItems>
        {
          DASHBOARD_ITEMS.map((item, key) => (
            <Card content={item} icon={item.icon} key={key} />
          ))
        }
      </ContainerItems>
    </Container>
  )
}

export default HomeGerente