
import {FiTrash2} from 'react-icons/fi'
import { Modal, Title } from "../ui/components"
import Item from '../view_edit_order_item'
import { Content, Header, Items, Trash } from "./styles"

const ViewEditOrder = ({isVisible, close, content, trash, reload,valid_status}) => {
 
  if(!isVisible) return null

  return (
    <Modal close={close}>
      <Content>
        <Header>
          <Title>Pedido #{content.id}</Title>

          {
            !!trash && (
              <Trash onClick={() => trash(content)}>
                Excluir
                <FiTrash2 color='#990000' size={22} />
              </Trash>
            )
          }

         
        </Header>

        <Items>
          {
            content.items?.map((item, key) => (
              <Item key={key} item={item} reload={reload} valid_status={valid_status} />
            ))
          }
        </Items>
      </Content>
    </Modal>
  )
}

export default ViewEditOrder