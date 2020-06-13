import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from 'containers/App'
import configureStore from './store'

// i18n
// import './i18n'

const store = configureStore()

ReactDOM.render(
  <Suspense fallback={null}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
)
