import React, { useState } from 'react'
import { Flex, Heading } from '@chakra-ui/core'

import { FieldInput } from 'components/FieldInput'
import { FormCard } from 'containers/FormCard'

import useTranslation from 'hooks/useTranslation'

function RegisterPage({ children }) {

  const [ userinfo, setUserInfo ] = useState({})
  const [translation] = useTranslation()

  function handleChange(ev) {
    setUserInfo({ ...userinfo, [ev.target.name]: ev.target.value })
  }

  function registerClick() {
    // make the register call
    console.log(userinfo)
  }

  return (
    <Flex justify='center' direction='column' alignItems='center'>
      <Flex justify='center' flex={1} fontSize={[ 24, 32 ]} >
        <Heading mt={5}>{translation.register}</Heading>
      </Flex>
      <FormCard
        buttonText={translation.next}
        title={translation.register}
      >
        <FieldInput mt={5} mx={10} name='name' placeholder={translation.name} onChange={handleChange.bind(this)} />
        <FieldInput mt={5} mx={10} name='email' placeholder={translation.email} onChange={handleChange.bind(this)} />
        <FieldInput mt={5} mx={10} name='password1' placeholder={translation.password} type='password' onChange={handleChange.bind(this)} />
        <FieldInput mt={5} mx={10} name='password2' placeholder={translation.retypepassword} type='password' onChange={handleChange.bind(this)} />
      </FormCard>
    </Flex>
  )

}

export { RegisterPage }
