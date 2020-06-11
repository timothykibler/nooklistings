import React, { useState } from 'react'
import { Flex, List, ListItem, ListIcon, Divider, Text } from '@chakra-ui/core'
import styled from 'styled-components'

const FlexContainer = styled(Flex)`

  overflow-y: scroll;
`

function RecentLists() {

  return (
    <FlexContainer bg='gray.800' boxShadow='lg' justify='center' rounded='lg'
      mt={5} p={5} height={[ 'sm' ]} width={['sm', 'lg', 'xl']}
    >
      <List spacing={4} width='full'>
        <ListItem mx={5} lineHeight={'2rem'} color='white'>
          <ListIcon color='white' icon='bell' />
          Takkun has created a new list! https://villagerjp.com/xY32zh3
        </ListItem>
        <Divider />
        <ListItem mx={5} lineHeight={'2rem'} color='white'>
          <ListIcon color='white' icon='bell' />
          lilmoney has created a new list! https://villagerjp.com/y37HHp
        </ListItem>
        <Divider />
      </List>
    </FlexContainer>
  )

}

export { RecentLists }
