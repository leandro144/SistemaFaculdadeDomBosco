import Header from '@/components/Header';
import Menu from '@/components/Menu';
import axios from 'axios';
import React, { useState } from 'react';
import { 
  Button, 
  Input, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  useDisclosure, 
  Text 
} from '@chakra-ui/react';

const SearchDiplomas = () => {
  const [code, setCode] = useState("");
  const [data, setData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure(); // Modal control

  const handleSearch = async () => {
    try {
      const res = await axios.get(`https://api-faculdade.onrender.com/api/diploma/${code}`);
      setData(res.data);
      onOpen(); // Abrir modal após a busca
    } catch (error) {
      console.error("Erro ao buscar diploma:", error);
    }
  };

  return (
    <>
      <Header />
      <Menu />
      {/* Conteúdo principal com fundo estilizado */}
      <div style={{ backgroundColor: '#053057', height: 'calc(100vh - 100px)', color: 'white', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
          <Input
            type="search"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Pesquise pelo código"
            backgroundColor="white"
            borderRadius="8px"
            padding="10px"
            width="300px"
            focusBorderColor="blue.500"
            boxShadow="0px 2px 6px rgba(0, 0, 0, 0.2)"
          />
          <Button colorScheme="blue" onClick={handleSearch}>
            Enviar
          </Button>
        </div>
      </div>

      {/* Modal para exibir os dados */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Diploma Encontrado</ModalHeader>
          <ModalBody>
            {data ? (
              <div style={{ textAlign: 'center' }}>
                <Text fontSize="lg" fontWeight="bold">Informações do Diploma</Text>
                <Text mt="2">Nome: {data.name}</Text>
                <Text>E-mail: {data.email}</Text>
                <Text>CPF: {data.cpf}</Text>
                <Button 
                  colorScheme="green" 
                  as="a" 
                  href={data.fileUrl} 
                  download 
                  mt="4"
                >
                  Baixar Diploma
                </Button>
              </div>
            ) : (
              <Text>Nenhum diploma encontrado.</Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchDiplomas;
