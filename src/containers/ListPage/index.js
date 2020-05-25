import React from 'react'
import { Heading, Flex, Text, Stack } from '@chakra-ui/core'
import { useTranslation } from 'react-i18next'

import { RecentLists } from 'containers/RecentLists'

function ListPage() {

  const { t } = useTranslation('translation')

  return (
    <Flex justify='center' direction='column' alignItems='center'>
      <Flex justify='center' flex={1} fontSize={[ 24, 32 ]} >
        <Heading mt={5}>{ t('translation:list') }</Heading>
      </Flex>
      <RecentLists />
    </Flex>
  )

}

export { ListPage }
