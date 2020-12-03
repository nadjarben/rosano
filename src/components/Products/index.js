import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Backdrop from '@material-ui/core/Backdrop'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ModalProduct from '../ModalProduct'
import LogoSpinner from '../LogoSpinner'
import { Wrapper } from './style'

const Products = () => {
  const { t } = useTranslation()

  const products = useSelector((state) => state.product.products)
  const category = useSelector((state) => state.app.category)
  const isLoading = useSelector((state) => state.product.isLoading)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <>
      {!isLoading ? (
        <Wrapper>
          <h1>{capitalizeFirstLetter(t(category))}</h1>
          <Container>
            <Grid container justify="center" spacing={2}>
              {products
                .sort((a, b) => a.brand.localeCompare(b.brand))
                .filter((product) => product.category === category)
                .map((product) => {
                  return (
                    <Grid key={product._id} item xs={6} md={3}>
                      <ModalProduct product={product} />
                    </Grid>
                  )
                })}
            </Grid>
          </Container>
        </Wrapper>
      ) : (
        <Backdrop open={true} style={{ backgroundColor: 'transparent' }}>
          <LogoSpinner />
        </Backdrop>
      )}
    </>
  )
}

export default Products
