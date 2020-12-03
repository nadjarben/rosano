import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Backdrop from '@material-ui/core/Backdrop'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ModalProduct from '../ModalProduct'
import LogoSpinner from '../LogoSpinner'
import ModalCreateProduct from '../ModalCreateProduct'
import SearchBar from '../SearchBar'
import { Wrapper } from './style'

const Products = () => {
  const { t } = useTranslation()

  const products = useSelector((state) => state.product.products)
  const category = useSelector((state) => state.app.category)
  const isLoading = useSelector((state) => state.product.isLoading)
  const adminMode = useSelector((state) => state.app.adminMode)
  const searchBar = useSelector((state) => state.app.searchBar)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <>
      {searchBar === '' ? (
        !isLoading ? (
          <Wrapper>
            <div style={{ display: 'flex' }}>
              <h1>{capitalizeFirstLetter(t(category))}</h1>
              <div className="modal-create">
                <ModalCreateProduct />
              </div>
              <div className="search-bar">
                <SearchBar />
              </div>
            </div>
            <Container>
              <Grid container justify="center" spacing={2}>
                {products
                  .sort((a, b) => a.brand.localeCompare(b.brand))
                  .filter((product) => product.category === category)
                  .map((product) => {
                    return (
                      <React.Fragment key={product._id}>
                        {adminMode ? (
                          <Grid item xs={6} md={3}>
                            <ModalProduct product={product} />
                          </Grid>
                        ) : (
                          product.available && (
                            <Grid item xs={6} md={3}>
                              <ModalProduct product={product} />
                            </Grid>
                          )
                        )}
                      </React.Fragment>
                    )
                  })}
              </Grid>
            </Container>
          </Wrapper>
        ) : (
          <Backdrop open={true} style={{ backgroundColor: 'transparent' }}>
            <LogoSpinner />
          </Backdrop>
        )
      ) : !isLoading ? (
        <Wrapper>
          <div style={{ display: 'flex' }}>
            <h1>{capitalizeFirstLetter(t(searchBar))}</h1>
            <div className="modal-create">
              <ModalCreateProduct />
            </div>
            <div className="search-bar">
              <SearchBar />
            </div>
          </div>
          <Container>
            <Grid container justify="center" spacing={2}>
              {products
                .sort((a, b) => a.brand.localeCompare(b.brand))
                .filter((product) =>
                  product.titleEn
                    .toLowerCase()
                    .includes(searchBar.toLowerCase())
                    ||
                    product.titleFr
                      .toLowerCase()
                      .includes(searchBar.toLowerCase())
                      ||
                    product.titleEn
                      .toLowerCase()
                      .includes(searchBar.toLowerCase())
                      ||
                    product.category
                      .toLowerCase()
                      .includes(searchBar.toLowerCase())
                      ||
                    product.brand
                      .toLowerCase()
                      .includes(searchBar.toLowerCase())
                )
                .map((product) => {
                  return (
                    <React.Fragment key={product._id}>
                      {adminMode ? (
                        <Grid item xs={6} md={3}>
                          <ModalProduct product={product} />
                        </Grid>
                      ) : (
                        product.available && (
                          <Grid item xs={6} md={3}>
                            <ModalProduct product={product} />
                          </Grid>
                        )
                      )}
                    </React.Fragment>
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
