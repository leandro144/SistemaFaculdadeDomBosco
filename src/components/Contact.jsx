import React from 'react';
import { ChakraProvider, Box, Container, FormControl, FormLabel, Input, Textarea, Button, Flex, Heading } from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
        <Flex w={'100%'} bg={'#08134A'} py={4}>
            <Flex maxW={'1200px'} margin={'0 auto'} color={'#fff'}>
                <Box>
                    <Heading py={4} color={'#fff'}>Entre em contato</Heading>
                <FormControl w={'100%'} isRequired>
                    <FormLabel>Nome Completo</FormLabel>
                    <Input py={6} type="text" placeholder="Digite seu nome completo" />
                </FormControl>
                <FormControl mt={4} isRequired>
                    <FormLabel>E-mail</FormLabel>
                    <Input py={6} type="email" placeholder="Digite seu e-mail" />
                </FormControl>
                <FormControl mt={4} isRequired>
                    <FormLabel>Telefone</FormLabel>
                    <Input py={6} type="tel" placeholder="Digite seu número de telefone" />
                </FormControl>
                <FormControl mt={4} isRequired>
                    <FormLabel>Mensagem</FormLabel>
                    <Textarea placeholder="Digite sua mensagem" />
                </FormControl>
                <Button mt={4} colorScheme="teal" type="submit">
                Enviar
                </Button>
            </Box>
            </Flex>
            
    </Flex>
    </>
  )
}

export default Contact