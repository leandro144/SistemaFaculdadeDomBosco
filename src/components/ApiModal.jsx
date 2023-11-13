// ApiModal.js
import React from 'react';
import {Box, Link, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Text, Image } from '@chakra-ui/react';

const ApiModal = ({ isOpen, onClose, apiData }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="45%" maxH="90%">
        <ModalHeader>
            <Image src='../../assets/logo.png' alt='' />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>

          {apiData && (
            <>
            
            <Box w={'100%'} maxW={'1024px'} margin={'0 auto'} py={'1rem'} >
                <Flex color={'#656565'} fontWeight={700} gap='5px'>Código validação:<Text fontWeight={'normal'}> {apiData.id}</Text></Flex>
                <Flex color={'#656565'} fontWeight={700} gap='5px'>Status do diploma:<Text fontWeight={'normal'}> Válido</Text></Flex>
                <Flex color={'#656565'} fontWeight={700} gap='5px'>Nome:<Text fontWeight={'normal'}> {apiData.nome}</Text></Flex>
            </Box>
              
            <Box  py={'1rem'}>
                <Box w="100%" mx="auto" h="1px" bg="black" />
            </Box>
              
            <Box w={'100%'} maxW={'1024px'} margin={'0 auto'}>
                <Text fontSize={'1.5rem'} color={'#808080'} >Downloads</Text>
                <Flex flexDir={'column'} color={'#1B72E2'}>
                  <Link href={apiData.xml_data} download={'xml-diplomq'}>diploma original assinado (XML)</Link>
                  <Link href={apiData.pdf} download={apiData.file_name}>RVDD (Representação visual - PDF)</Link>
                </Flex>
            </Box>
        
            <Box  py={'1rem'}>
                <Box w="100%" mx="auto" h="1px" bg="black" />
            </Box>
    
            <Box w={'100%'} maxW={'1024px'} margin={'0 auto'}>
                <Text fontSize={'1.5rem'} color={'#808080'} >Validações:</Text>
                <Flex flexDir={'column'} color={'#1B72E2'}>
                  <Link href="https://validadordiplomadigital.mec.gov.br/diploma" download={'xml-diploma'}>Clique aqui e acesse o Verificador de conformidade de diplomas do MEC</Link>
                  <Link href="https://verificador.iti.gov.br/" download={"pdf-diploma"}>Clique aqui para acessar o Verificador de conformidade do ITI (assinaturas)</Link>
                </Flex>
            </Box>
            </>
                
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ApiModal;
