import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// theme
import theme from './theme'

// Misc. components
import { Layout } from 'containers/Layout'

// Full pages
import { RegisterPage } from 'containers/RegisterPage'
import { ListPage } from 'containers/ListPage'
import { LoginPage } from 'containers/LoginPage'
import { HomePage } from 'containers/HomePage'

// set global css here
const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: scroll;
  }

  body {
    margin: 0;
    padding: 0;
    background: #171923;
  }

  ::-webkit-scrollbar {
     -webkit-appearance: none;

     background-color: black;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact={true} path='/'>
            <Layout>
              <HomePage />
            </Layout>
          </Route>
          <Route path='/register'>
            <Layout>
              <RegisterPage />
            </Layout>
          </Route>
          <Route path='/login'>
            <Layout>
              <LoginPage />
            </Layout>
          </Route>
          <Route path='/list'>
            <Layout>
              <ListPage />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export { App }
