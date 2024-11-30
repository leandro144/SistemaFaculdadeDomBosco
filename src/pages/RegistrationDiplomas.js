import Header from '@/components/Header';
import Menu from '@/components/Menu';
import { Flex, Box, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Cookies from 'js-cookie'; // Para acessar o cookie onde o token está armazenado

const RegistrationDiplomas = () => {
  const [formData, setFormData] = useState({
    code: '',
    imageUrl: '',
    name: '',
    email: '',
    cpf: '',
  });

  const [error, setError] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const router = useRouter();

  const handleSubmit = async () => {
    if (!formData.code || !formData.imageUrl || !formData.name || !formData.email || !formData.cpf) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const token = Cookies.get('auth_token'); // Obtém o token do cookie

      // Verifica se o token existe
      if (!token) {
        setError('Você precisa estar autenticado para registrar um diploma.');
        return;
      }

      // Envia a requisição com o token no cabeçalho
      const res = await axios.post(
        'https://api-faculdade.onrender.com/api/diploma/add',
        {
          code: formData.code,
          fileUrl: formData.imageUrl,
          name: formData.name,
          email: formData.email,
          cpf: formData.cpf,
        },
        {
          headers: {
            'x-auth-token': token, // Envia o token no cabeçalho da requisição
          },
        }
      );

      console.log(res);
      alert("Diploma Registrado com sucesso!");
      router.push("/searchdiplomas");
    } catch (error) {
      console.log(error);
      setError('Erro ao registrar o diploma. Tente novamente.');
    }

    setError('');
  };

  return (
    <>
      <Header />
      <Menu />
      <Flex justify="center" align="center" height="100vh">
        <Box
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          width="100%"
          maxWidth="400px"
          bg="white"
          border="1px solid #e2e8f0"
        >
          <FormControl isRequired>
            <FormLabel>Código</FormLabel>
            <Input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleOnChange}
              mb={4}
              placeholder="Digite o código"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>URL da Imagem</FormLabel>
            <Input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleOnChange}
              mb={4}
              placeholder="Digite a URL da imagem"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Nome</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
              mb={4}
              placeholder="Digite seu nome"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              mb={4}
              placeholder="Digite seu e-mail"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>CPF</FormLabel>
            <Input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleOnChange}
              mb={4}
              placeholder="Digite seu CPF"
            />
          </FormControl>

          {error && <Text color="red.500" mb={4}>{error}</Text>}

          <Button colorScheme="blue" width="full" onClick={handleSubmit}>
            Registrar
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default RegistrationDiplomas;
