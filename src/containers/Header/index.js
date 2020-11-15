import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Flex, List, ListItem, Box, Heading, Text, Link, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/core'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import ReactCountryFlag from 'react-country-flag'
import { setLocale } from 'react-redux-i18n'

import useTranslation from 'hooks/useTranslation'

const LinkWithStyle = styled(Link)`
  :hover {
    color: gray;
  }
`

const NavItem = ({ children, to }) => (
  // TODO alignment needs to happen here
  <Text mt={{xs: 0, sm: 0, md: 0}} pr={{xs: '3px', sm: '4px', md: '5px'}} display='block' cursor='pointer'>
    <LinkWithStyle as={RouterLink} to={to}>
      { children }
    </LinkWithStyle>
  </Text>
)

function Header(props) {

  const [translation, locale] = useTranslation()
  const [language, setLanguage] = useState(locale)
  const [show, setShow] = useState(false)
  const [on, toggle] = useState(false)

  // redux hooks
  const dispatch = useDispatch()

  const handleToggle = () => setShow(!show)

  const animprops1 = useSpring({ delay: 300, opacity: 1, from: { opacity: 0 } })

  const handleLanguage = ev => {
    setLanguage(ev.target.name.substr(0, 2))

    let lng = ev.target.name.substr(0, 2).toLowerCase()

    if (lng === 'mx') {
      lng = 'es'
    }

    // switch language
    dispatch(setLocale(lng))
    // save to local storage
    localStorage.setItem('defaultLanguage', lng)
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
      flexDirection={{
        xs: 'column',
        sm: 'row',
        md: 'row'
      }}
      {...props}
    >
      <Flex align='center' mr={5}>

          <Heading as='h1' size='lg' onClick={() => toggle(!on)}>
            nooklistings
          </Heading>

      </Flex>

      <Box display={{ xs: 'flex', sm: 'none', md: 'none' }} onClick={handleToggle}>
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
        display={{
          xs: show ? 'flex' : 'none',
          sm: 'flex',
          md: 'flex' 
        }}
        width={{ xs: 'auto', sm: 'auto', md: 'auto' }}
        alignItems='center'
        flexGrow={1}
        userSelect='none'
      >
        <NavItem to='/'>
          {translation.home}
        </NavItem>
        <NavItem to='/login'>
          {translation.login}
        </NavItem>
        <NavItem to='/list'>
          {translation.newlist}
        </NavItem>
      </Box>

      <Box
        alignItems='center'
        display={{
          xs: 'flex',
          sm: 'flex',
          md: 'flex'
        }}
        flexDirection={{
          xs: 'column',
          sm: 'row',
          md: 'row'
        }}
      >
        <animated.span style={animprops1}>
          <Flex as={Menu} mr={5} cursor='pointer' alignItems='center' boxShadow='lg'>
            <MenuButton>
              <Text mr={5}>
                <ReactCountryFlag countryCode={
                  language === 'en' ? 'US': language
                } style={{ height: '2rem', width: '2rem' }} svg />
              </Text>
            </MenuButton>
            <MenuList color='black'>
              <MenuItem name='jpn' onClick={handleLanguage}>
                日本語
              </MenuItem>
              <MenuItem name='en' onClick={handleLanguage}>
                EN
              </MenuItem>
              <MenuItem name='mx' onClick={handleLanguage}>
                ES
              </MenuItem>
            </MenuList>
          </Flex>
        </animated.span>

          <Button as={RouterLink} to='/register' bg='transparent' border='1px' boxShadow='lg' rounded='lg'
            _hover={{ bg: 'blue.500', opacity: 1, color: 'white' }} >
            {translation.register}
          </Button>
      </Box>
    </Flex>
  )

}

export default Header
