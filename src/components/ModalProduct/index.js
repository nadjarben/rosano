import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../store/actions/cart'
import { withStyles } from '@material-ui/core/styles'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography'
import { ImageStyled, DialogStyled, IconButtonStyled } from './style'
import MuiDialogActions from '@material-ui/core/DialogActions'
import CardProduct from '../CardProduct'
import logo from '../../assets/logo.png'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import DialogContent from '@material-ui/core/DialogContent'



const styles = (theme) => ({
  root: {
    margin: 0,
    background: 'unset !important',
    color: 'black !important',
    minWidth: 350,
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  closeButtonRight: {
    fontSize: '56px',
    position: 'absolute',
    color: 'black',
  },
  btn: {
    fontSize: '20px'
  }
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <img src={logo} alt='logo' width='100%' />
      <Divider style={{ color: 'black', background: 'black', height: '3px' }} />
      <Typography className={classes.title} variant="h6">
        {children}
      </Typography>
      {onClose ? (
        <IconButtonStyled
          aria-label="close"
          onClick={onClose}
        >
          <ArrowBackIosIcon fontSize="large" />
        </IconButtonStyled>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogActionsStyled = withStyles((theme) => ({
root: {
 justifyContent: 'space-between',
 fontSize: '20px'
},
}))(MuiDialogActions)

const ModalProduct = (props) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
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

  const whichBg = () => {
    if (props.product.category === 'beer') {
      return 'https://i.pinimg.com/236x/db/7f/c2/db7fc263c7ff27035979a51498577d8a--beer.jpg'
    }
    if (props.product.category === 'whiskey') {
      return 'https://ak.picdn.net/shutterstock/videos/6043583/thumb/1.jpg'
    }
    if (props.product.category === 'vodka') {
      return 'https://c1.wallpaperflare.com/preview/90/364/860/pattern-winter-cold-ice.jpg'
    }
    else return 'https://c1.wallpaperflare.com/preview/90/364/860/pattern-winter-cold-ice.jpg'
  }

  return (
    <>
      <div>
        <CardProduct product={props.product} setOpen={setOpen} />
      </div>
      <DialogStyled
        onClose={handleClose}
        fullScreen={fullScreen}
        aria-labelledby="customized-dialog-title"
        open={open}
        bg={whichBg}
      >
        <DialogTitle
          onClose={() => setOpen(false)}
          style={{
            textAlign: 'center',
          }}
        >
          {language === 'he' && props.product.titleHe}
          {language === 'fr' && props.product.titleFr}
          {language === 'en' && props.product.titleEn}
        </DialogTitle>
        <DialogContent className='dialog-content'>
          <Container>
            {props.product.image ? (
              <ImageStyled
                src={props.product.image}
                alt={`${props.product.titleHe} product shot`}
              />
            ) : (
              <ImageStyled
                style={{ backgroundColor: 'white' }}
                src="https://static.thenounproject.com/png/1174579-200.png"
                alt={`${props.product.titleHe} product shot`}
              />
            )}
            <br />
            <Typography
              className="product-info"
            >
              {language === 'he' && props.product.descriptionHe}
              {language === 'fr' && props.product.descriptionFr}
              {language === 'en' && props.product.descriptionEn}
            </Typography>
          </Container>
        </DialogContent>
        <DialogActionsStyled>
            <Typography
              className="product-price"
            >
              {props.product.price && props.product.price !== props.product.realPrice && <span className='product-fake-price'>₪{props.product.price}</span>}
                ₪{props.product.realPrice}
            </Typography>
            <Button
              onClick={addProductToCart}
              variant="outlined"
              style={{fontSize: '18px', fontWeight: 'bold' }}
            >
              {t('Add to Cart')}
            </Button>
        </DialogActionsStyled>
      </DialogStyled>
    </>
  )
}

export default ModalProduct
