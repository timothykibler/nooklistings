import React from 'react'
import { Heading, Flex, Text, Stack } from '@chakra-ui/core'
import { useTranslation } from 'react-i18next'

import { InfoCard } from 'components/InfoCard'

function HomePage() {

  const { t } = useTranslation('translation')

  return (
    <Flex direction='column' align='center'>
      <Heading as='h1' mt={5}>villagerjp</Heading>
      <Text>
        {t('translation:homedescription')}
      </Text>
      <Stack borderBox='lg' direction='row' justify='center' spacing={'16'} mt={10} wrap='wrap' >
        <InfoCard />
      </Stack>
    </Flex>
  )

}

export { HomePage }
