import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Flex, List, ListItem, Box, Heading, Text, Link, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/core'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { animated, useSpring } from 'react-spring'
import ReactCountryFlag from 'react-country-flag'

const LinkWithStyle = styled(Link)`
  :hover {
    color: gray;
  }
`

const NavItem = ({ children, to }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display='block' cursor='pointer'>
    <LinkWithStyle as={RouterLink} to={to}>
      { children }
    </LinkWithStyle>
  </Text>
)

function Header(props) {

  const [ language, setLanguage ] = useState('JP')
  const [ show, setShow ] = useState(false)
  const { t, i18n } = useTranslation('translation')
  const [ on, toggle ] = useState(false)

  const handleToggle = () => setShow(!show)

  const animprops1 = useSpring({ opacity: 1, from: { opacity: 0 } })
  const animprops2 = useSpring({ delay: 200, opacity: 1, from: { opacity: 0 } })
  const animprops3 = useSpring({ delay: 300, opacity: 1, from: { opacity: 0 } })
  const animprops4 = useSpring({ delay: 400, opacity: 1, from: { opacity: 0 } })
  const animprops5 = useSpring({ delay: 500, opacity: 1, from: { opacity: 0 } })
  const animprops6 = useSpring({ delay: 600, opacity: 1, from: { opacity: 0 } })

  const handleLanguage = ev => {
    setLanguage(ev.target.name.substr(0, 2))

    let lng = ev.target.name.substr(0, 2).toLowerCase()

    if (lng === 'mx') {
      lng = 'es'
    }

    i18n.changeLanguage(lng)
  }

  return (
    <Flex
      as='nav'
      alignSelf='left'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding='1.5rem'
      bg='blue.700'
      width='full'
      color='white'
      boxShadow='md'
      {...props}
    >
      <Flex align='center' mr={5}>
        <animated.div style={animprops1}>
          <Heading as='h1' size='lg' onClick={() => toggle(!on)}>
            nooklistings
          </Heading>
        </animated.div>
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>nooklistings</title>
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems='center'
        flexGrow={1}
        userSelect='none'
      >
        <NavItem to='/'>
          <animated.span style={animprops2}>{t('translation:home')}</animated.span>
        </NavItem>
        <NavItem to='/login'>
          <animated.span style={animprops3}>{t('translation:login')}</animated.span>
        </NavItem>
        <NavItem to='/list'>
          <animated.span style={animprops4}>{t('translation:newlist')}</animated.span>
        </NavItem>
      </Box>

      <Box
        alignItems='center'
        display={{ sm: show ? 'flex' : 'none', md: 'flex' }}
        mt={{ base: 4, md: 0 }}
      >
        <animated.span style={animprops3}>
          <Flex as={Menu} mr={5} cursor='pointer' alignItems='center' boxShadow='lg'>
            <MenuButton>
              <Text mr={5}>
                <ReactCountryFlag countryCode={
                  language === 'EN' ? 'US': language
                } style={{ height: '2rem', width: '2rem' }} svg />
              </Text>
            </MenuButton>
            <MenuList color='black'>
              <MenuItem name='JPN' onClick={handleLanguage}>
                日本語
              </MenuItem>
              <MenuItem name='EN' onClick={handleLanguage}>
                EN
              </MenuItem>
              <MenuItem name='MX' onClick={handleLanguage}>
                ES
              </MenuItem>
            </MenuList>
          </Flex>
        </animated.span>

        <animated.span style={animprops1}>
          <Button as={RouterLink} to='/register' bg='transparent' border='1px' boxShadow='lg' rounded='lg'
            _hover={{ bg: 'blue.500', opacity: 1, color: 'white' }} >
            {t('translation:register')}
          </Button>
        </animated.span>
      </Box>
    </Flex>
  )

}

export { Header }
