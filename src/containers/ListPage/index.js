import React, {useState, useEffect} from 'react'
import {Divider, Heading, Flex} from '@chakra-ui/core'

import {FormCard} from 'containers/FormCard'
import {SearchResultList} from 'containers/SearchResultList'

import {FieldInput} from 'components/FieldInput'

import {useSearch} from 'hooks/useSearch'
import useTranslation from 'hooks/useTranslation'

function ListPage() {

  const [translation, locale] = useTranslation()

  const [language, setLanguage] = useState()

  useEffect(() => {
    setLanguage(locale)
  }, [locale, setLanguage])

  const [data, setData] = useState()
  const [query, setQuery] = useState('')
  const [error] = useSearch({ setData, query, language })

  const [inputbordercolor, setInputBorderColor] = useState('gray.500')

  useEffect(() => {
    if (error) {
      console.log(error)
    }
  }, [ error ])

  useEffect(() => {
    console.log(data)
  }, [ data ])

  function handleChange(ev) {
    setQuery(ev.target.value)
  }

  function handleClick() {
    console.log('click handled')
  }

  return (
    <Flex justify='center' direction='column' alignItems='center'>

      <Flex justify='center' flex={1} fontSize={[ 24, 32 ]} >
        <Heading mt={5}>{translation.newlist}</Heading>
      </Flex>

      <FormCard
        buttonText={translation.save}
        clickHandler={handleClick}
        minH='xs'
      >

        <FieldInput
          backgroundColor='gray.900'
          border='1px'
          borderColor={inputbordercolor}
          onBlur={() => setInputBorderColor('gray.500') }
          onFocus={() => setInputBorderColor('blue.800') }
          mx={['.8rem']}
          my={['1rem']}
          minH='50px'
          name='search'
          type='text'
          placeholder={translation.search}
          onChange={handleChange.bind(this)}
        />

        <Divider color='gray.500' />

        <Flex direction='column'>
          <Flex
            boxSizing='content-box'
            pr={17}
            w='100%'
            h='100%'
            direction='column'
            overflowY='scroll'
            height='200px'
          >
            <SearchResultList data={data} language={language} />
          </Flex>
        </Flex>

      </FormCard>

    </Flex>
  )

}

export { ListPage }
