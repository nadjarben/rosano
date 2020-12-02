import React from 'react'
import ModalModify from './ModalModify'
import ModalDelete from './ModalDelete'
import { Wrapper } from './style'

const ButtonsAdmin = () => {
  return (
    <Wrapper>
        <ModalModify />
        <ModalDelete />
    </Wrapper>
  )
}

export default ButtonsAdmin
