import React from 'react'
import {Button, Flex, Text} from '@chakra-ui/core'
import PropTypes from 'prop-types'

import {ContentCard} from 'components/ContentCard'

function FormCard({ buttonText = 'Button', buttonHandler, children, description,
  flash, title = 'Title', valid, ...props}) {

  return (
    <ContentCard
      boxShadow='lg'
      color='white'
      bg='gray.800'
      direction='column'
      height={['sm', 'md']}
      width={['sm', 'lg', 'xl']}
      spacing={4}
      rounded='lg'
      justify='center'
      {...props}
    >
      { description &&
        // Show description if provided
        <Flex justify='center' flex={1}>
          <p>{description}</p>
        </Flex>
      }

      <Flex direction='column' flex={3}>
        {children}
      </Flex>

      {/* Bottom row */ }
      <Flex flex={1}>

        <Flex justify='space-between' mx={10} width='100%'>
          {/* Flash messages */}
          <Flex color='red.200'>
            {flash}
          </Flex>

          {/* action button */}
          <Flex>
            <Button variantColor='blue' onClick={buttonHandler} disabled={!valid}>
              {buttonText}
            </Button>
          </Flex>
          
        </Flex>

      </Flex>
    </ContentCard>
  )

}

FormCard.propTypes = {
  buttonText: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonHandler: PropTypes.func.isRequired
}

export { FormCard }
