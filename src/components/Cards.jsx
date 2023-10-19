import { Flex, Box, Icon, Heading, Text, Card, CardBody, Image, Divider, Stack} from '@chakra-ui/react'
import React from 'react'
import { FaMedal } from 'react-icons/fa'
import { AiFillBook, AiFillStar } from 'react-icons/ai'

const Cards = () => {
  return (
    <>
      <Flex w='100%' py={8} maxW='1200px' m='0 auto' color='#fff' flexDirection={{base: "column", md: "row"}}>
        <Flex>
          <Flex flexDir='column' alignItems='center' gap='1rem' bg='#005B72' p={10} >
            <Box>
              <Icon as={FaMedal} boxSize={16} color='#fff' />
            </Box>
            <Box>
              <Heading>QUALIDADE</Heading>
            </Box>
            <Box>
              <Text>A qualidade dos nossos cursos é fruto da parceria com as melhores Faculdades, reconhecidas pelo MEC.</Text>
            </Box>
          </Flex>
        </Flex>
        <Flex>
          <Flex flexDir='column' alignItems='center' gap='1rem' bg='#00B2A6' p={10} >
            <Box>
              <Icon as={AiFillBook} boxSize={16} color='#fff' />
            </Box>
            <Box>
              <Heading>DIVERSOS CURSOS</Heading>
            </Box>
            <Box>
              <Text>Amplo leque de cursos nas mais variadas áreas do conhecimento e profissional. Escolha o seu e comece a escrever a sua história.</Text>
            </Box>
          </Flex>
        </Flex>
        <Flex>
          <Flex flexDir='column' alignItems='center' gap='1rem' bg='#005B72' p={10} >
            <Box>
              <Icon as={AiFillStar} boxSize={16} color='#fff' />
            </Box>
            <Box>
              <Heading>SATISFAÇÃO</Heading>
            </Box>
            <Box>
              <Text>Inovar e entender as necessidades dos alunos oferecendo sempre os melhores projetos pedagógicos e o melhor atendimento.</Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex maxW='1200px' m='0 auto' justifyContent='center' textAlign='center'>
          <Box>
            <Heading paddingBottom='.625rem'>CURSOS EM DESTAQUE</Heading>
            <Text>Conheça alguns dos nossos principais cursos</Text>
          </Box>
      </Flex>
      <Flex w='100%' maxW='1200px' m='0 auto' py={8} gap={4} flexDirection={{base: "column", md: "row"}} justifyContent='center' >
      <Card maxW='sm'>
        <CardBody>
          <Image
            src='./assets/graduação.jpg'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Ciências Contábeis</Heading>
            <Text>
            O curso de Ciências Contábeis, pretende dar uma contribuição à cidade de Londrina e a Região Metropolitana ...
            </Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src='./assets/grad1.jpg'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Administração Pública</Heading>
            <Text>
            O curso de graduação em Administração Pública foi concebido sob a ótica da multidisciplinaridade, objetivando compreender as ...
            </Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
      </Flex>
    </>
  )
}

export default Cards