import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/actions/product'
import { toggleCart, toggleModalAdmin } from '../store/actions/app'
import Cart from '../components/shopify/Cart'
import HomePage from '../app/HomePage'
import Navbar from '../components/Appbar'
import LogoSpinner from '../components/LogoSpinner'
import Test from './Test'
import Footer from '../components/Footer'
import ModalAdmin from '../components/ModalAdmin'
import StyleProvider from '../styleProvider'
import { Wrapper } from './style'
import { theme } from '../theme'
import { ThemeProvider } from '@material-ui/core/styles'


const App = () => {
  const dispatch = useDispatch()
  const cartOpen = useSelector(state => state.app.cartOpen)

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <React.Suspense fallback={<LogoSpinner />}>
      <StyleProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Cart />
          <ModalAdmin />
          <Router>
            <Route exact path='/'>
              <Wrapper onClick={() => cartOpen && dispatch(toggleCart())}>
                <HomePage />
              </Wrapper>
            </Route>
            <Route exact path='/test'>
              <Test />
            </Route>
          </Router>
          <div onDoubleClick={() => dispatch(toggleModalAdmin())}>
            <Footer />
          </div>
        </ThemeProvider>
      </StyleProvider>
    </React.Suspense>
  )
}

export default App
