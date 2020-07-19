import React, { useEffect, useState } from 'react'
import { Flex, Heading } from '@chakra-ui/core'

import { FieldInput } from 'components/FieldInput'
import { FormCard } from 'containers/FormCard'

import useTranslation from 'hooks/useTranslation'

function RegisterPage({ children }) {

  const [error, setError] = useState({})
  const [userinfo, setUserInfo] = useState({})
  const [valid, setValid] = useState(false)

  const [translation] = useTranslation()

  useEffect(() => {
    const {email, password1, password2} = userinfo

    // check if email is valid email
    if (email) {
      const email_valid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      const message = email_valid ? undefined : `Email is invalid`

      setError(state => ({
        ...state,
        message,
        email_invalid: message
      }))
    }

    if (password2) {
      // check if passwords match
      const message = password1 === password2 ? undefined : `Passwords do not match`
      setError(state => ({
        ...state,
        message,
        password_mismatch: message
      }))

    } else if (password1) {
      // check if password meets criteria
      const validpw = password1.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{12,20}$/)
      const message = validpw ? undefined : `Password is invalid`

      // update state to show error
      setError(state => ({
        ...state,
        message,
        password_invalid: message
      }))

    }

    console.info('updating...')

    return () => {
      // null errors
      setError({})
    }

    
  }, [userinfo, setError])

  useEffect(() => {
    console.log(error)
    if (error.message !== null) {
      setValid((!error.message))
    }
  }, [error])

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
        clickHandler={registerClick}
      >
        <FieldInput
          mt={5} mx={10} name='name' placeholder={translation.name} onChange={handleChange.bind(this)} />
        <FieldInput mt={5} mx={10} name='email' placeholder={translation.email} onChange={handleChange.bind(this)} />
        <FieldInput mt={5} mx={10} name='password1' placeholder={translation.password} type='password' onChange={handleChange.bind(this)} />
        <FieldInput mt={5} mx={10} name='password2' placeholder={translation.retypepassword} type='password' onChange={handleChange.bind(this)} />
      </FormCard>
    </Flex>
  )

}

export { RegisterPage }
