import React from 'react'
import { Container } from '@material-ui/core'
import { Flex } from '@chakra-ui/core'

import styled from 'styled-components'

import { Header } from 'containers/Header'

function Layout({ children }) {

  return (
    <Flex direction='column' lineHeight={4} justify='center' color='white'>
      <Header />
      { children }
    </Flex>
  )

}

export { Layout }
