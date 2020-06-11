import React, { useState, useEffect } from 'react'
import { Heading, Flex, Text, Stack } from '@chakra-ui/core'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { RecentLists } from 'containers/RecentLists'
import { FormCard } from 'containers/FormCard'
import { SearchResultList } from 'containers/SearchResultList'

import { FieldInput } from 'components/FieldInput'

import { useSearch } from 'hooks/useSearch'

const ListBox = styled(FormCard)`
`

function ListPage() {

  const { t, i18n } = useTranslation('translation')

  console.log(i18n)

  const [ language, setLanguage ] = useState()

  useEffect(() => {
    setLanguage(i18n.languages[0])
  }, [ i18n.languages, setLanguage ])

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
        <Heading mt={5}>{ t('translation:newlist') }</Heading>
      </Flex>

      <ListBox
        buttonText={t('translation:save')}
        clickHandler={handleClick}
        minH='xs'
      >

        <FieldInput minH={'75px'} name='search' type='text' placeholder={t('translation:search')} onChange={handleChange.bind(this)} />
        <Flex direction='column' minH='0px' overflow='hidden'>
          <Flex boxSizing='content-box' pr={17} w='100%' h='100%' direction='column' overflowY='scroll' height='200px'>
            <SearchResultList data={data} language={language} />
          </Flex>
        </Flex>

      </ListBox>

    </Flex>
  )

}

export { ListPage }
