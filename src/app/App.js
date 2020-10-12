import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/actions/product'
import { toggleCart } from '../store/actions/app'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from '../components/shopify/Cart'

import HomePage from '../app/HomePage'
import Contact from '../app/Contact'
import Navbar from '../components/Navbar'
import LogoSpinner from '../components/LogoSpinner'
import Footer from '../components/Footer'
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
      <ThemeProvider theme={theme}>
        <Router>
        <Navbar />
          <Cart />
          <Switch>
            <Wrapper onClick={() => cartOpen && dispatch(toggleCart())}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/contact" component={Contact} />
            </Wrapper>
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </React.Suspense>
  )
}

export default App
