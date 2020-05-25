import React, { useState } from 'react'
import { Flex, List, ListItem, ListIcon, Divider, Text } from '@chakra-ui/core'

function RecentLists() {

  return (
    <Flex boxShadow='lg' overflowY='scroll' justify='center' bg='gray.900' rounded='lg' mt={5} p={5} width={['sm', 'lg', 'xl']} height={[ 'sm' ]}>
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
    </Flex>
  )

}

export { RecentLists }
