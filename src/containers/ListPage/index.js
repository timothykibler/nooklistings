import React from 'react'
import { Heading, Flex, Text, Stack } from '@chakra-ui/core'
import { useTranslation } from 'react-i18next'

import { RecentLists } from 'containers/RecentLists'

function ListPage() {

  const { t } = useTranslation('translation')

  return (
    <Flex direction='column' align='center'>
      <Heading alignSelf='center' as='h1' mt={5}>
        { t('translation:list') }
      </Heading>
      <RecentLists />
    </Flex>
  )

}

export { ListPage }
