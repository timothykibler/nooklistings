import React from 'react'
import { Flex, Input } from '@chakra-ui/core'

function FieldInput (props) {
  const { placeholder = 'begin typing...', type = 'text', onChange, name='' } = props

  return (
    <Flex {...props}>
      <Input minH={props.minH || null} borderBottom='none' letterSpacing='.1rem' px={15} name={name} placeholder={placeholder}
        type={type} onChange={onChange} variant='flushed'
      />
    </Flex>
  )

}

export { FieldInput }
