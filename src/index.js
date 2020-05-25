import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import { App } from 'containers/App'

// i18n
import './i18n'

ReactDOM.render(
  <Suspense fallback={null}>
    <App />
  </Suspense>,
  document.getElementById('root')
)
