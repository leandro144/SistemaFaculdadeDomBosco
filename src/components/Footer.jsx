import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
        <Flex alignItems={'center'} py={4} justifyContent={'center'} gap={4} bg={'#08134A'} color={'#fff'}>
            <Heading fontSize={'sm'} textAlign={'center'}>&copy; 2023 - Leandro Castro</Heading>
            <Image src='./assets/logo.png' alt='logo' />
        </Flex>
    </>
  )
}

export default Footer