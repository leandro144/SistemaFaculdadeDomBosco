import React from 'react';
import { ChakraProvider, Box, Container, FormControl, FormLabel, Input, Textarea, Button, Text, useToast, Heading } from "@chakra-ui/react";
import { useForm, Controller } from 'react-hook-form';
const Contact = () => {

    const { handleSubmit, control, formState: { errors } } = useForm();
    const toast = useToast();
  
    const onSubmit = (data) => {
      // Aqui, você pode adicionar lógica para processar o envio do formulário.
      console.log(data);
  
      // Exemplo de exibição de uma mensagem de sucesso usando o Toast do Chakra UI:
      toast({
        title: "Formulário Enviado",
        description: "Seus dados foram enviados com sucesso!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    };
  return (
    <>
    <Box bg='#011473' py={8} color={'#fff'}>
      <Heading textAlign={'center'} py={4}>Contato</Heading>
       <Container maxW="lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired>
          <FormLabel>Nome Completo</FormLabel>
          <Controller
            name="nomeCompleto"
            control={control}
            defaultValue=""
            rules={{
              required: "Campo obrigatório",
            }}
            render={({ field }) => (
              <Input {...field} type="text" placeholder="Digite seu nome completo" />
            )}
          />
          {errors.nomeCompleto && (
            <Text color="red.500">{errors.nomeCompleto.message}</Text>
          )}
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel>E-mail</FormLabel>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Campo obrigatório",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail inválido",
              },
            }}
            render={({ field }) => (
              <Input {...field} type="email" placeholder="Digite seu e-mail" />
            )}
          />
          {errors.email && (
            <Text color="red.500">{errors.email.message}</Text>
          )}
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel>Celular</FormLabel>
          <Controller
            name="celular"
            control={control}
            defaultValue=""
            rules={{
              required: "Campo obrigatório",
            }}
            render={({ field }) => (
              <Input {...field} type="tel" placeholder="Digite seu número de celular" />
            )}
          />
          {errors.celular && (
            <Text color="red.500">{errors.celular.message}</Text>
          )}
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel>Mensagem</FormLabel>
          <Controller
            name="mensagem"
            control={control}
            defaultValue=""
            rules={{
              required: "Campo obrigatório",
            }}
            render={({ field }) => (
              <Textarea {...field} placeholder="Digite sua mensagem" />
            )}
          />
          {errors.mensagem && (
            <Text color="red.500">{errors.mensagem.message}</Text>
          )}
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Enviar
        </Button>
      </form>
    </Container>
    </Box>
       
    </>
  )
}

export default Contact