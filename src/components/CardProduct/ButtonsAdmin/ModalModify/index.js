import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { updateProduct } from '../../../../store/actions/product'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import CreateIcon from '@material-ui/icons/Create'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { categories } from '../../../../utils/categories'

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    textAlign: 'center',
    float: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
      width: 300,
    },
  },
}))

const ModalModify = ({ product }) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('xl'))
  const dispatch = useDispatch()
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const [newProduct, setNewProduct] = React.useState({
    id: product._id,
    titleHe: product.titleHe,
    titleEn: product.titleEn,
    titleFr: product.titleFr,
    category: product.category,
    descriptionHe: product.descriptionHe,
    descriptionEn: product.descriptionEn,
    descriptionFr: product.descriptionFr,
    price: product.price,
    realPrice: product.realPrice,
    image: product.image,
    liter: product.liter,
    brand: product.brand,
    percentage: product.percentage,
    available: product.available,
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (name) => (e) => {
    setNewProduct({ ...newProduct, [name]: e.target.value })
  }

  const handleUpdate = (id, newProduct) => {
    dispatch(updateProduct(id, newProduct))
  }

  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'rosano')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dox0xz1yq/image/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()
    setNewProduct({ ...newProduct, image: file.secure_url })
    setLoading(false)
  }

  React.useEffect(() => {
    setNewProduct({ ...newProduct })
  }, [newProduct.image])

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClickOpen}
      >
        <CreateIcon fontSize="large" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullScreen={fullScreen}
      >
        <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
          {'Modify the product'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form className={classes.root} autoComplete="off">
              <TextField
                id="fname standard-required"
                label={t('Title hebrew')}
                type="text"
                value={newProduct.titleHe}
                onChange={handleChange('titleHe')}
              />
              <br />
              <br />
              <TextField
                id="fname standard-required"
                label={t('Title english')}
                type="text"
                value={newProduct.titleEn}
                onChange={handleChange('titleEn')}
              />
              <br />
              <br />
              <TextField
                id="fname standard-required"
                label={t('Title french')}
                type="text"
                value={newProduct.titleFr}
                onChange={handleChange('titleFr')}
              />
              <br />
              <br />
              <Autocomplete
                id="combo-box-demo"
                options={categories}
                getOptionLabel={(option) => option}
                defaultValue={newProduct.category}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t('Category')}
                    variant="outlined"
                  />
                )}
                onSelect={handleChange('category')}
              />
              <br />
              <br />
              <TextField
                id="filled-multiline-static"
                label={t('Description hebrew')}
                multiline
                rows={4}
                defaultValue={newProduct.descriptionHe}
                onChange={handleChange('descriptionHe')}
              />
              <br />
              <br />
              <TextField
                id="filled-multiline-static"
                label={t('Description english')}
                multiline
                rows={4}
                value={newProduct.descriptionEn}
                onChange={handleChange('descriptionEn')}
              />
              <br />
              <br />
              <TextField
                id="filled-multiline-static"
                label={t('Description french')}
                multiline
                rows={4}
                value={newProduct.descriptionFr}
                onChange={handleChange('descriptionFr')}
              />
              <br />
              <br />
              <TextField
                id="standard-required"
                style={{ width: '45%' }}
                label={t('Brand')}
                type="text"
                value={newProduct.brand}
                onChange={handleChange('brand')}
              />
              <br />
              <br />
              <TextField
                id="standard-required"
                style={{ width: '45%', marginLeft: '5%' }}
                label={t('Price')}
                type="number"
                value={newProduct.price}
                onChange={handleChange('price')}
              />
              <TextField
                id="standard-required"
                style={{ width: '45%', marginLeft: '5%' }}
                label={t('Price after promotion')}
                type="number"
                value={newProduct.realPrice}
                onChange={handleChange('realPrice')}
              />
              <br />
              <br />
              <TextField
                id="standard-required"
                style={{ width: '45%', marginLeft: '5%' }}
                label={t('Liter')}
                type="number"
                value={newProduct.liter}
                onChange={handleChange('liter')}
              />
              <TextField
                id="standard-required"
                style={{ width: '45%', marginLeft: '5%' }}
                label={t('Alcool percentage')}
                type="number"
                value={newProduct.percentage}
                onChange={handleChange('percentage')}
              />
              <br />
              <br />
              <br />
              <div>
                <h5>{t('Upload Image')}</h5>
                <div style={{ cursor: 'pointer' }}>
                  {!newProduct.image && (
                    <input
                      type="file"
                      name="file"
                      placeholder="Upload Image"
                      onChange={uploadImage}
                    />
                  )}
                  {loading ? (
                    <h3>Loading ...</h3>
                  ) : (
                    <img
                      src={newProduct.image}
                      alt=""
                      style={{
                        width: '200px',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                  )}
                  {newProduct.image && (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() =>
                        setNewProduct({ ...newProduct, image: undefined })
                      }
                      style={{ fontSize: '18px' }}
                    >
                      {t('Remove product image')}
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ fontSize: '18px' }}
            onClick={() => handleUpdate(newProduct.id, newProduct)}
            color="secondary"
          >
            Confirm
          </Button>
          <Button
            style={{ fontSize: '18px' }}
            onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ModalModify
