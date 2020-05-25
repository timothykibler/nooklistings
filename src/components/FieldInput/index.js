import React from 'react'
import { Flex, Input } from '@chakra-ui/core'
import styled from 'styled-components'

function FieldInput (props) {
  const { placeholder = 'begin typing...', type = 'text', onChange, name='' } = props

  return (
    <Flex mt={5}>
      <Input px={15} name={name} placeholder={placeholder} type={type} onChange={onChange} variant='flushed' />
    </Flex>
  )

}

export { FieldInput }