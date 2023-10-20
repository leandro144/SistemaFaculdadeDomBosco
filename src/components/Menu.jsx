import { Box, Flex, Image, Icon, Text, Heading, Link, UnorderedList, ListItem } from '@chakra-ui/react'
import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import Mobile from './Mobile'

const Menu = () => {
  return (
    <>
        <Flex 
        maxW='1200px'
        m='0 auto'
        justifyContent={'space-between'}
        alignItems={'center'}
        py={6}>
            <Box>
                <Image w='182px' h='44px' src='./assets/logo.png' alt='logo' />
            </Box>
            <Mobile />
                <Flex
                display={{base: 'none', md: 'flex'}}
                gap={8}>
                    <Flex alignItems='center' gap={4}>
                            <Icon as={BiPhone} boxSize={9} color='#FF7702' border='1px solid #005b72'/>
                        <Box>
                            <Text fontSize='11px' lineHeight='13px' color="#005b72">ATENDIMENTO</Text>
                            <Heading 
                            fontSize='14px' 
                            lineHeight='19px' 
                            color='#005b72' 
                            fontWeight='700'>(43) 99130-0090</Heading>
                        </Box>
                    </Flex>
                    <Flex alignItems='center' gap={4}>
                            <Icon as={BsFillPersonFill} boxSize={9} color='#FF7702' border='1px solid #005b72'/>
                        <Box>
                            <Text fontSize='11px' lineHeight='13px' color="#005b72">ACESSE</Text>
                            <Link 
                            fontSize='14px' 
                            lineHeight='19px' 
                            color='#005b72' 
                            fontWeight='700'>ACESSO AO DIPLOMA</Link>
                        </Box>
                    </Flex>
                </Flex>
        </Flex>
        <Flex bg='#005B72' w='100%' py='.625rem' display={{base: 'none', md: 'flex'}}>
            <Flex maxW='1200px' m='0 auto' alignItems='center' justifyContent='center'>
                <UnorderedList 
                display={{base: 'none', md: 'flex'}} 
                gap={{base: '1rem', lg: "4rem"}}
                textTransform='uppercase' 
                fontSize='.825rem' 
                fontFamily='montserrat'
                fontWeight='500'
                lineHeight='24px'
                color="#fff">
                    <ListItem>
                        <Link>home</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://faculdadesdombosco.com.br/categorias-de-cursos/graduacao/'>Cursos</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://iegp.portalava.com.br/login'>Portal AVA</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/access'>Acesso ao diploma</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://www.domboscoradio.com/'>radio db</Link>
                    </ListItem>
                    <ListItem>
                        <Link>contato</Link>
                    </ListItem>
                </UnorderedList>
            </Flex>
        </Flex>
    </>
  )
}

export default Menu