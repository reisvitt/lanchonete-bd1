import FormFactory from '../form_factory'
import { Modal } from '../ui/components'
import {EMPLOYER_TYPES} from '../../enums/employer_types'
import { Container,ContainerForm } from './styles'

const EditContent = ({content, isVisible, close, submit}) => {
  const options = EMPLOYER_TYPES.map(item => ({label: item.title, value: item.id}))
  
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
          value: content?.email,
          disabled: true,
        },
        {
          name: 'name',
          title: 'Nome',
          placeholder: 'Digite seu nome',
          isRequired: true,
          validations: 'inputRequired',
          component: 'Input',
          col: ['100%', '47%'],
          value: content?.name,
        },
        {
          name: 'last_name',
          title: 'Último nome',
          placeholder: 'Digite seu último nome',
          isRequired: true,
          validations: 'inputRequired',
          component: 'Input',
          col: ['100%', '47%'],
          value: content?.last_name,
        },
        {
          name: 'employer_type',
          title: 'Cargo',
          placeholder: 'Cargo',
          isRequired: true,
          validations: 'inputRequired',
          component: 'SelectOption',
          col: ['96%'],
          value: content?.employer_type?.id,
          options
        },
        {
          name: 'salary',
          title: 'Salário',
          validations: 'inputRequired',
          placeholder: 'Digite o salário do colaborador',
          isRequired: true,
          component: 'Input',
          col: ['100%'],
          value: content?.salary,
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

  if(isVisible){
    return (
      <Modal close={close}>
        <Container>
          <ContainerForm>
            <FormFactory data={data} onSubmit={submit} />
          </ContainerForm>
        </Container>
      </Modal>
    )
  }

  return null
}

export default EditContent