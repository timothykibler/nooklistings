import React, { useState } from 'react'
import { Button, Flex, Box, Heading } from '@chakra-ui/core'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ContentCard } from 'components/ContentCard'
import { FieldInput } from 'components/FieldInput'

function FormCard({ buttonText = 'Button', title = 'Title',
  description, clickHandler, children, ...props }) {

  const [userinfo, setUserInfo] = useState({})

  return (
    <ContentCard
      boxShadow='lg'
      color='white'
      bg='gray.800'
      direction='column'
      height={['sm']}
      width={['sm', 'lg', 'xl']}
      spacing={4}
      rounded='lg'
      justify='center'
      {...props}
    >
      { description &&
        <Flex justify='center' flex={1}>
          <p>{ description }</p>
        </Flex>
      }
      <Flex direction='column' flex={3}>
        { children }
      </Flex>
      <Flex justify='flex-end' flex={1}>
        <Button size={['md']} variantColor='blue' onClick={clickHandler} mr={10} >
          { buttonText }
        </Button>
      </Flex>
    </ContentCard>
  )

}

FormCard.propTypes = {
  buttonText: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  clickHandler: PropTypes.func.isRequired
}

export { FormCard }
