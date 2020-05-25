import React, { useState } from 'react'
import { Button, Flex, Box, Heading } from '@chakra-ui/core'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ContentCard } from 'components/ContentCard'
import { FieldInput } from 'components/FieldInput'

function FormCard({ buttonText = 'Button', title = 'Title',
  description, clickHandler, children }) {

  const [ userinfo, setUserInfo ] = useState({})

  function handleChange(ev) {
    setUserInfo({ ...userinfo, [ev.target.name]: ev.target.value })
  }

  function registerClick() {
    // make the register call
    console.log(userinfo)
  }

  return (
    <ContentCard boxShadow='lg' bg='gray.50' direction='column' minH='sm' width={['sm', 'lg', 'xl']} spacing={4} rounded='lg'>
      <Flex justify='center' flex={1} fontSize={[ 24, 32 ]} >
        <Heading>{ title }</Heading>
      </Flex>
      { description &&
        <Flex justify='center' flex={1}>
          <p>{ description }</p>
        </Flex>
      }
      <Flex direction='column' flex={3}>
        { children }
      </Flex>
      <Flex justify='flex-end' flex={1}>
        <Button size={['md']} variantColor='green' onClick={clickHandler}>
          { buttonText }
        </Button>
      </Flex>
    </ContentCard>
  )

}

FormCard.propTypes = {
  buttonText: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  clickHandler: PropTypes.func.isRequired
}

export { FormCard }