import React, { useState } from 'react'
import { Flex } from '@chakra-ui/core'
import { useTranslation } from 'react-i18next'

import { FieldInput } from 'components/FieldInput'

import { FormCard } from 'containers/FormCard'

function LoginPage({ children }) {

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
    <Flex justify='center'>
      <FormCard
        buttonText={t('translation:login')}
        title={t('translation:login')}
      >
        <FieldInput name='email' placeholder={t('translation:email')} onChange={handleChange.bind(this)} />
        <FieldInput name='password1' placeholder={t('translation:password')} type='password' onChange={handleChange.bind(this)} />
      </FormCard>
    </Flex>
  )

}

export { LoginPage }
