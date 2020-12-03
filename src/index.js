import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import './styles/shopify.css'
import './utils/i18n'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
