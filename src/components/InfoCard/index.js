import React from 'react'
import { Flex, Text } from '@chakra-ui/core'
import { useTranslation } from 'react-i18next'

function InfoCard() {

  const { t } = useTranslation('translation')

  return (
    <Flex bg='gray.300' direction='column' minW={150} minH={250} rounded={'md'} boxShadow={'lg'} mb={10} mx={'2rem'}>
      <Flex alignSelf='flex-start' justify='flex-start' align='center' bg='cyan.900' width='full' height='10' rounded={'md'}>
        <Text p={5} color='white' align='left'>
          {t('translation:news')}
        </Text>
      </Flex>
      <Flex alignSelf='flex-start' flex={2}>
        <Text p={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Flex>
    </Flex>
  )
}

export { InfoCard }
