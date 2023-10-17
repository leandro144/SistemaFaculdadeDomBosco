import { Image, Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Main = () => {
  return (
    <>
        <Box
        bgImage="url('./assets/main.jpg')"
        bgSize='cover'
        maxWw='100%'
        h={{base: '60vh', md: '95vh', sm: '45vh'}}
        display='flex'
        alignItems='center'
        >
            <Image w='100%' maxW='1200px' m='0 auto' src='./assets/submain.jpg' alt='submain' />
        </Box>
    </>
  )
}

export default Main