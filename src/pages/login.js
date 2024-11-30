import Header from '@/components/Header';
import Menu from '@/components/Menu';
import { Flex, Box, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const router = useRouter();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitLogin = async () => {
    try {
      if (!login.username || !login.password) {
        setError('Por favor, preencha todos os campos.');
        return;
      }

      const res = await axios.post('https://api-faculdade.onrender.com/api/auth/login', {
        username: login.username, 
        password: login.password,
      });


      if (res.data && res.data.token) {
        const { token } = res.data;

        Cookies.set('auth_token', token, { expires: 1 / 72 });

        router.push('/RegistrationDiplomas');
      } else {
        setError('Erro: Não foi possível obter o token.');
      }
    } catch (error) {
      setError('Username e senha não conferem.');
    }
  };

  return (
    <>
      <Header />
      <Menu />
      <Flex justify="center" align="center" padding="6rem 0">
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
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username" 
              value={login.username} 
              onChange={handleOnChange}
              mb={4}
              placeholder="Digite seu username"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              name="password"
              value={login.password}
              onChange={handleOnChange}
              mb={4}
              placeholder="Digite sua senha"
            />
          </FormControl>
          {error && <Text color="red.500" mb={4}>{error}</Text>}
          <Button colorScheme="blue" width="full" onClick={handleSubmitLogin}>
            Login
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
