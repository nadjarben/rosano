import React from 'react'
import { useDispatch } from 'react-redux'
import { disableProduct } from '../../../../store/actions/product'
import IconButton from '@material-ui/core/IconButton'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const DisableButton = ({ product }) => {
  
  const handleModify = (id) => {
    dispatch(disableProduct(id))
  }

  const dispatch = useDispatch()
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={() => handleModify(product._id)}
    >
      {product.available ? <VisibilityIcon fontSize="large" /> :  <VisibilityOffIcon fontSize="large" />}
    </IconButton>
  )
}

export default DisableButton
