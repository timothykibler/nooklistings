import React, { useState } from 'react'
import { Flex, Heading } from '@chakra-ui/core'
import { useTranslation } from 'react-i18next'

import { FieldInput } from 'components/FieldInput'

import { FormCard } from 'containers/FormCard'

function RegisterPage({ children }) {

  const [ userinfo, setUserInfo ] = useState({})
  const { t } = useTranslation('translation')

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
        <Heading mt={5}>{ t('translation:register') }</Heading>
      </Flex>
      <FormCard
        buttonText={t('translation:next')}
        title={t('translation:register')}
      >
        <FieldInput mt={5} mx={10} name='name' placeholder={t('translation:name')} onChange={handleChange.bind(this)} />
        <FieldInput mt={5} mx={10} name='email' placeholder={t('translation:email')} onChange={handleChange.bind(this)} />
        <FieldInput mt={5} mx={10} name='password1' placeholder={t('translation:password')} type='password' onChange={handleChange.bind(this)} />
        <FieldInput mt={5} mx={10} name='password2' placeholder={t('translation:retypepassword')} type='password' onChange={handleChange.bind(this)} />
      </FormCard>
    </Flex>
  )

}

export { RegisterPage }
