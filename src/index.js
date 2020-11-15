import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from 'containers/App'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  // suspense handles loading behavior, migh
  
    <Provider store={store}>
      <App />
    </Provider>
  ,
  document.getElementById('root')
)
