import React from 'react'
import { Container } from '@material-ui/core'
import { Flex } from '@chakra-ui/core'

import styled from 'styled-components'

import { Header } from 'containers/Header'

function Layout({ children }) {

  return (
    <Flex direction='column' justify='center'>
      <Header />
      { children }
    </Flex>
  )

}

export { Layout }
