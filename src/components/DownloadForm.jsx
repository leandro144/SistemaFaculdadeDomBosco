// components/DownloadForm.js
import { Box, Button, Input, Center, VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const DownloadForm = () => {
    const [number, setNumber] = useState('');
    

  return (
    <Center h="76.7vh" bg={'#053057'}>
      <VStack spacing={4}>
        <Box color='#fff'>
            <Text fontSize={'sm'} py={4}>*Digite o código atrás do diploma para ter acesso ao PDF</Text>
          <Input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Digite o token"
          />
        </Box>
        <Button colorScheme="teal">
          Baixar
        </Button>
      </VStack>
    </Center>
  );
};

export default DownloadForm;
