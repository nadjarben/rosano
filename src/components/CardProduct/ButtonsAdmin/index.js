import React from 'react'
import DisableButton from './DisableButton'
import ModalModify from './ModalModify'
import ModalDelete from './ModalDelete'
import Divider from '@material-ui/core/Divider'
import { Wrapper } from './style'

const ButtonsAdmin = ({ product }) => {
  return (
    <div>
      <Wrapper>
        <div>
          <DisableButton product={product} />
        </div>
        <ModalModify product={product} />
        <ModalDelete product={product} />
      </Wrapper>
      <Divider />
    </div>
  )
}

export default ButtonsAdmin
