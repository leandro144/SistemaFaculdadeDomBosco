import { Box, Image, Flex, Text, VStack, HStack, Spacer, Center, ChakraProvider, theme, Button, useDisclosure } from "@chakra-ui/react";
import React from 'react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useState } from "react";

const Diploma = () => {

  const { isOpen, onToggle } = useDisclosure();
  const [isFront, setIsFront] = useState(true);

  const flipCard = () => {
    setIsFront(!isFront);
  };

  return (
    <>
      <ChakraProvider theme={theme}>
      <Center h="100vh">
        <Box
          w="100vw"
          h="100vh"
          bg="white"
          borderRadius="8px"
          boxShadow="lg"
          overflow="hidden"
          transform={isOpen && !isFront ? "rotateY(180deg)" : ""}
          transition="transform 0.5s"
        >
          <VStack h="100%" justifyContent="space-between">
            {isFront ? (
              <Center h="100%">
                <Image 
                 src="../../../../assets/diplomas/geovanna.jpeg"
                 alt="imagem"
                 w="100%"
                 h="100%"
                 objectFit="contain"
                />
              </Center>
            ) : (
              <Center h="100%">
                <Image 
                 src="../../../../assets/diplomas/geovanna-verso.jpeg"
                 alt="imagem"
                 w="100%"
                 h="100%"
                 objectFit="contain"
                />
              </Center>
            )}
          </VStack>
        </Box>
      </Center>
      <Button
        position="fixed"
        bottom="20px"
        right="20px"
        leftIcon={isFront ? <ArrowBackIcon /> : <ArrowForwardIcon />}
        onClick={flipCard}
      >
        Virar
      </Button>
    </ChakraProvider>
    </>
  )
}

export default Diploma