import React, {useState} from 'react'
import {Flex, Input} from '@chakra-ui/core'

function FieldInput (props) {
  const { placeholder = 'begin typing...', type = 'text', onChange, name='' } = props

  const [inputbordercolor, setInputBorderColor] = useState('gray.500')

  return (
    <Flex {...props}>
      <Input
        backgroundColor='gray.900'
        borderBottom='1px'
        borderColor={inputbordercolor}
        minH={props.minH || null}
        letterSpacing='.1rem'
        fontSize={[18]}
        p={[5]}
        name={name}
        placeholder={placeholder}
        type={type}
        onBlur={() => setInputBorderColor('gray.500')}
        onFocus={() => setInputBorderColor('blue.800')}
        onChange={onChange}
        variant='flushed'
      />
    </Flex>
  )

}

export { FieldInput }
