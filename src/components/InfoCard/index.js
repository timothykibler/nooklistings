import React from 'react'
import { Flex, Text } from '@chakra-ui/core'

import useTranslation from 'hooks/useTranslation'

function InfoCard() {

  const [translation] = useTranslation()

  return (
    <Flex bg='gray.800' color='white' direction='column' size={['sm']} rounded={'md'} boxShadow={'lg'}>

      <Flex alignSelf='flex-start' justify='flex-start' align='center' bg='blue.700' width='full' height='10' rounded={'md'}>
        <Text p={5} color='white' align='left'>
          {translation.news}
        </Text>
      </Flex>

      <Flex alignSelf='flex-start' flex={2}>
        <Text p={5}>
          {translation.currentnews}
        </Text>
      </Flex>

    </Flex>
  )
}

export { InfoCard }
