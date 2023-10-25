import { Box, Button, Center, Container, Flex, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    rg: '',
    cpf: '',
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('rg', formData.rg);
    formDataToSend.append('cpf', formData.cpf);
    formDataToSend.append('attachment', formData.attachment);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: formDataToSend,
      });
      if (response.ok) {
        console.log('Formulário enviado com sucesso!');
      } else {
        console.error('Erro ao enviar o formulário.');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <Flex 
    alignItems={'center'}
    w={'100%'}
    h={'76.8vh'}
    justifyContent={'center'}
    color={'#808080'}
    bg={'#053057'}>
        <Center>
            <Box p={4} border="1px solid #053057" borderRadius="md" boxShadow="md" w="400px" bg={'#fff'} py={8}>
                <Text fontSize="xl" fontWeight="semibold" mb={2} color={'#053057'}>
                Formulário
                </Text>
                <Input name="fullName" placeholder="Nome Completo" mb={4} onChange={handleChange} />
                <Input name="rg" placeholder="RG" mb={5} onChange={handleChange} />
                <Input name="cpf" placeholder="CPF" mb={5} onChange={handleChange} />
                <Input type="file" name="attachment" mb={5} onChange={handleFileChange} />
                <Flex justifyContent={'center'}>
                    <Button colorScheme="blue" onClick={handleSubmit} w={'md'}>Enviar</Button>
                </Flex>
                
            </Box>
    </Center>
    </Flex>
    
  );
}
