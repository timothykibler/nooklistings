import React from 'react'
import { Heading, Flex, Text, Stack } from '@chakra-ui/core'

import { InfoCard } from 'components/InfoCard'
import useTranslation from 'hooks/useTranslation'

function HomePage() {

  const [translation] = useTranslation()

  return (
    <Flex direction='column' align='center'>
      <Heading as='h1' mt={5}>nooklistings</Heading>
      <Text>
        {translation.homedescription}
      </Text>
      <Stack borderBox='lg' direction='row' justify='center' spacing={'16'} mt={10} wrap='wrap' >
        <InfoCard />
      </Stack>
    </Flex>
  )

}

export { HomePage }
