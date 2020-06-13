import React, { useState } from 'react'
import { Flex, Heading } from '@chakra-ui/core'

import { FieldInput } from 'components/FieldInput'
import { FormCard } from 'containers/FormCard'
import useTranslation from 'hooks/useTranslation'

function LoginPage({ children }) {

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
        <Heading mt={5}>{ translation.login }</Heading>
      </Flex>
      <FormCard
        buttonText={translation.login}
      >
        <FieldInput mt={10} mx={10} name='email' placeholder={translation.email} onChange={handleChange.bind(this)} />
        <FieldInput mt={10} mx={10} name='password1' placeholder={translation.password} type='password' onChange={handleChange.bind(this)} />
      </FormCard>
    </Flex>
  )

}

export { LoginPage }
