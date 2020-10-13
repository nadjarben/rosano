import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCart } from '../../store/actions/app'
import { getClient } from '../../store/actions/checkout'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Divider from '@material-ui/core/Divider'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import FirstPageModal from './FirstPageModal'
//import SecondPageModal from './SecondPageModal'
import CreditCard from './CreditCard'
import TwilioOrder from '../TwilioOrder'
import {
  DialogContentStyled,
  DialogTitleStyled,
  DialogActionsStyled,
} from './style'

export default function ResponsiveDialog() {
  const dispatch = useDispatch()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = React.useState(false)
  const [page, setPage] = React.useState(0)
  const [client, setClient] = React.useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    tehuda: null,
    tehudaImage: ''
  })

  React.useEffect(() => {
    dispatch(getClient(client))
  }, [client])

  const handleClickOpen = () => {
    setOpen(true)
    dispatch(toggleCart())
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (name) => (e) => {
    setClient({ ...client, [name]: e.target.value })
  }

  return (
    <div>
      <button className="Cart__checkout button" onClick={handleClickOpen}>
        Checkout
      </button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitleStyled id="responsive-dialog-title">
          {'Checkout'}
        </DialogTitleStyled>
        <Divider />
        <DialogContentStyled>
          {page === 0 && (
            <FirstPageModal client={client} handleChange={handleChange} setClient={setClient} />
          )}
          {page === 1 && (
            <CreditCard client={client} handleChange={handleChange} />
          )}
        </DialogContentStyled>
        <Divider />
        <DialogActionsStyled>
          {page !== 0 ? (
            <Button onClick={() => setPage(page - 1)} color="primary">
              Previous
            </Button>
          ) : (
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          )}
          {page !== 1 ? (
            <Button style={{fontSize: '15px'}} variant='outlined' onClick={() => setPage(page + 1)} color="primary">
              Next
            </Button>
          ) : (
            <TwilioOrder />
          )}
        </DialogActionsStyled>
      </Dialog>
    </div>
  )
}
