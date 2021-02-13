import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../store/actions/cart'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import { ImageStyled, Background } from './style'
import CardProduct from '../CardProduct'
import logo from '../../assets/logo.png'

const styles = (theme) => ({
  root: {
    margin: 0,
    color: 'black',
    backgroundColor: 'white',
    minWidth: 350,
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  closeButtonRight: {
    fontSize: '40px',
    position: 'absolute',
    left: theme.spacing(1),
    top: theme.spacing(1),
    color: 'white',
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <img src={logo} alt='logo' width='100%' />
      <Divider style={{color: 'white', background: 'white', height: '3px'}} />
      <Typography className={classes.title} variant="h6">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButtonRight}
          onClick={onClose}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

//const DialogActionsStyled = withStyles((theme) => ({
// root: {
//  margin: 'auto',
//  width: '30%',
// marginTop: '-25px',
// },
//}))(MuiDialogActions)

const ModalProduct = (props) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const language = useSelector((state) => state.app.language)
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const addProductToCart = () => {
    dispatch(addItem(props.product))
    setOpen(false)
  }

  return (
    <>
      <div>
        <CardProduct product={props.product} setOpen={setOpen} />
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        BackdropProps={{
          style: {
            backgroundColor: 'white',
            opacity: '0.9',
          },
        }}
      >
        <Background>
          <DialogTitle
            onClose={() => setOpen(false)}
            style={{
              textAlign: 'center',
              background: 'rgb(25, 25, 25)',
              color: 'white',
            }}
          >
            {language === 'he' && props.product.titleHe}
            {language === 'fr' && props.product.titleFr}
            {language === 'en' && props.product.titleEn}
          </DialogTitle>
          <DialogContent dividers>
            {props.product.image ? (
              <ImageStyled
                src={props.product.image}
                alt={`${props.product.titleHe} product shot`}
              />
            ) : (
              <ImageStyled
              style={{backgroundColor: 'white' }}
                src="https://static.thenounproject.com/png/1174579-200.png"
                alt={`${props.product.titleHe} product shot`}
              />
            )}
            <br />
            <Typography
              style={{ textAlign: 'center' }}
              variant="h5"
              gutterBottom
              className="product-info"
            >
              {language === 'he' && props.product.descriptionHe}
              {language === 'fr' && props.product.descriptionFr}
              {language === 'en' && props.product.descriptionEn}
            </Typography>
            <Typography
              style={{
                textAlign: 'center',
                margin: 'auto',
                width: '20%',
                padding: '10px',
              }}
              variant="h5"
              gutterBottom
              className="product-price"
            >
              ₪{props.product.realPrice}
            </Typography>
          </DialogContent>
          {/*<DialogActionsStyled>
            <label className="Product__option">
              {t('Quantity')}{' '}
              <InputStyled
                className="form-control"
                min="1"
                type="number"
                defaultValue={1}
              />
            </label>
          </DialogActionsStyled>
          */}
          <DialogActions>
            <Button
              onClick={addProductToCart}
              variant="outlined"
              className="add-btn"
            >
              {t('Add to Cart')}
            </Button>
          </DialogActions>
        </Background>
      </Dialog>
    </>
  )
}

export default ModalProduct
