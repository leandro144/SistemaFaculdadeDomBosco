import { Image, Box} from '@chakra-ui/react'
import React from 'react'

const Diploma = () => {
  return (
    <>
      <Box maxW={'1100px'} m={'0 auto'}>
        <Image w={'100%'} h={'100vh'} src='./assets/diplomas/guilhermemog.jpeg' alt='imagem' />
      </Box>
    </>
  )
}

export default Diploma