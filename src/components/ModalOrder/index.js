import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
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
  Wrapper,
  DialogContentStyled,
  DialogTitleStyled,
  DialogActionsStyled,
} from './style'

export default function ResponsiveDialog() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const lang = useSelector((state) => state.app.language)
  const client = useSelector((state) => state.checkout.client)
  const [open, setOpen] = React.useState(false)
  const [page, setPage] = React.useState(0)
  const [newClient, setNewClient] = React.useState({
    name: client.name,
    phone: client.phone,
    email: client.email,
    address: client.address,
    tehuda: client.tehuda,
    tehudaImage: client.tehudaImage,
  })

  React.useEffect(() => {
    dispatch(getClient(newClient))
  }, [newClient])

  const handleClickOpen = () => {
    setOpen(true)
    dispatch(toggleCart())
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (name) => (e) => {
    setNewClient({ ...newClient, [name]: e.target.value })
  }

  return (
    <Wrapper>
      <button className="Cart__checkout button" onClick={handleClickOpen}>
        {t('Checkout')}
      </button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitleStyled id="responsive-dialog-title">
          {t('Checkout').toUpperCase()}
        </DialogTitleStyled>
        <Divider />
        <DialogContentStyled>
          {page === 0 && (
            <FirstPageModal
              client={client}
              handleChange={handleChange}
              setClient={setNewClient}
            />
          )}
          {page === 1 && (
            <CreditCard client={client} handleChange={handleChange} />
          )}
        </DialogContentStyled>
        <Divider />

        {lang === 'he' ? (
          <DialogActionsStyled>
            {page !== 0 ? (
              <TwilioOrder />
            ) : (
              <Button
              style={{ fontSize: '17px' }}
              variant="outlined"
              onClick={() => setPage(page + 1)}
              color="primary"
            >
              {t('Next')}
            </Button>
            )}
            {page !== 1 ? (
                <Button onClick={handleClose} color="primary">
                {t('Close')}
              </Button>
            ) : (
              <Button onClick={() => setPage(page - 1)} color="primary">
              {t('Previous')}
            </Button>            )}
          </DialogActionsStyled>
        ) : 
        
        
        
        (
          <DialogActionsStyled>
            {page !== 0 ? (
              <Button onClick={() => setPage(page - 1)} color="primary">
                {t('Previous')}
              </Button>
            ) : (
              <Button onClick={handleClose} color="primary">
                {t('Close')}
              </Button>
            )}
            {page !== 1 ? (
              <Button
                style={{ fontSize: '17px' }}
                variant="outlined"
                onClick={() => setPage(page + 1)}
                color="primary"
              >
                {t('Next')}
              </Button>
            ) : (
              <TwilioOrder />
            )}
          </DialogActionsStyled>
        )}
      </Dialog>
    </Wrapper>
  )
}
