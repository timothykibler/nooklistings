import React, { useState, useEffect } from 'react'
import { Heading, Flex, Text, Stack } from '@chakra-ui/core'

import { FormCard } from 'containers/FormCard'
import { SearchResultList } from 'containers/SearchResultList'

import { FieldInput } from 'components/FieldInput'

import { useSearch } from 'hooks/useSearch'
import useTranslation from 'hooks/useTranslation'

function ListPage() {

  const [translation, locale] = useTranslation()

  const [ language, setLanguage ] = useState()

  useEffect(() => {
    setLanguage(locale)
  }, [ locale, setLanguage ])

  console.log(language)

  const [ data, setData ] = useState()
  const [ query, setQuery ] = useState('')
  const [ error ] = useSearch({ setData, query, language })

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

        <FieldInput minH={'75px'} name='search' type='text' placeholder={translation.search} onChange={handleChange.bind(this)} />
        <Flex direction='column' minH='0px' overflow='hidden'>
          <Flex boxSizing='content-box' pr={17} w='100%' h='100%' direction='column' overflowY='scroll' height='200px'>
            <SearchResultList data={data} language={language} />
          </Flex>
        </Flex>

      </FormCard>

    </Flex>
  )

}

export { ListPage }
