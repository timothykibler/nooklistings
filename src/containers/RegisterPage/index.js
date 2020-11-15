import React, {useEffect, useState, useRef} from 'react'
import { Flex, Heading } from '@chakra-ui/core'

import { FieldInput } from 'components/FieldInput'
import { FormCard } from 'containers/FormCard'

import useTranslation from 'hooks/useTranslation'

function RegisterPage({ children }) {

  const [error, setError] = useState({})
  const [userinfo, setUserInfo] = useState({})

  const initialrender = useRef(true)

  const [valid, setValid] = useState(false)

  const [translation] = useTranslation()

  useEffect(() => {
    setError(validate(userinfo))
  }, [userinfo, setError])

  useEffect(() => {

    if (initialrender.current) {
      initialrender.current = false
      return
    }

    if (error.message !== null) {
      setValid(false)
    } else {
      setValid(true)
    }

  }, [error, setValid])

  function handleChange(ev) {
    ev.preventDefault()

    setUserInfo({ ...userinfo, [ev.target.name]: ev.target.value })
  }

  function handleSubmit() {
    // make the register call
    console.log(userinfo)
  }

  function validate(inputdata) {
    const { email, password1, password2 } = inputdata

    // check if email is valid email
    if (email) {
      const email_valid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      const message = email_valid ? undefined : `Email is invalid`

      if (message) {
        return {
          message,
          email_invalid: message
        }
      }

    }

    if (password2) {
      // check if passwords match
      const message = password1 === password2 ? undefined : `Passwords do not match`

      if (message) {
        return {
          message,
          password_mismatch: message
        }
      }

    } else if (password1) {
      // check if password meets criteria
      const validpw = password1.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{12,20}$/)
      const message = validpw ? undefined : `Password is invalid`

      if (message) {
        return {
          message,
          password_invalid: message
        }
      }

    }

    if (!email || !password1 || !password2) {
      return {message: ''}
    } else {
      // everything is valid, other hook will setValid
      return {message: null}
    }

  }

  return (
    <Flex justify='center' direction='column' alignItems='center'>

      {/* page title */}
      <Flex justify='center' flex={1} fontSize={[ 24, 32 ]} >
        <Heading mt={5}>{translation.register}</Heading>
      </Flex>

      {/* registration form */}
      <FormCard
        pt={'15px'}
        buttonText={translation.next}
        title={translation.register}
        buttonHandler={handleSubmit}
        flash={error.message}
        valid={valid}
        width={[
          '90%',
          '70%'
        ]}
      >
        <FieldInput
          mt={['2rem']} mx={10} name='name' placeholder={translation.name} onChange={handleChange.bind(this)} />
        <FieldInput mt={['2rem']} mx={10} name='email' placeholder={translation.email} onChange={handleChange.bind(this)} />
        <FieldInput mt={['2rem']} mx={10} name='password1' placeholder={translation.password} type='password' onChange={handleChange.bind(this)} />
        <FieldInput mt={['2rem']} mx={10} name='password2' placeholder={translation.retypepassword} type='password' onChange={handleChange.bind(this)} />
      </FormCard>
    </Flex>
  )

}

export { RegisterPage }
