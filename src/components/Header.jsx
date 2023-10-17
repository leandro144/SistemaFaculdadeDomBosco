import { Box, UnorderedList, ListItem, Link, Icon, Flex, Center } from '@chakra-ui/react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi';
import React from 'react'

const Header = () => {
  return (
    <>
       <Box
          w='100%'
          py='.625rem'
          bg='#053057'>
        <Flex 
        maxW='1200px'
        margin='0 auto'
        alignItems='center'
        >
          <UnorderedList 
          display='flex'
          gap={10}
          >
            <ListItem>
              <Link href='https://www.facebook.com/Faculdade-Dom-Bosco-Paran%C3%A1-104100978613080/'>
                <Icon as={BiLogoFacebook} boxSize={5} color='#fff'/>
              </Link>
            </ListItem>
            <ListItem>
            <Link href='https://www.instagram.com/faculdadedomboscoparana/'>
                <Icon as={BiLogoInstagram} boxSize={5} color='#fff' />
              </Link>
            </ListItem>
            <ListItem>
            <Link href='https://www.domboscoradio.com/'>
                <Icon as={BiLogoYoutube} boxSize={5} color='#fff' />
              </Link>
            </ListItem>
            <ListItem>
              <Link
              color='#fff'
              fontFamily='lato'
              fontSize='12px'
              fontWeight='700'
              lineHeight='19.5ox'
              >OUVIDORIA</Link>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Box>
     
    </>
  )
}

export default Header