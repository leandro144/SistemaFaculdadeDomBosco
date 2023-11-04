import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import { Flex, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';

const Validation = () => {
    const [inputData, setInputData] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        router.push(`/validator/${inputData}`);
    };

    return (
        <>
            <Header />
            <Menu />
            <Flex
                justifyContent={'center'}
                flexDir={'column'}
                alignItems={'center'}
                w={'100%'}
                h={'90vh'}
                bg={'#053057'}
            >
                <FormControl as={'fieldset'} maxW={'428px'} color={'#fff'} py={4}>
                    <FormLabel as={'legend'}>
                        <Text fontWeight={'700'} fontSize="1rem" color={'#fff'} textAlign='center'>Validador de Diploma Digital e Historico Escolar</Text>
                    </FormLabel>
                    <Flex gap={4}>
                        <Input
                            type='text'
                            placeholder='Digite o código'
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <Button onClick={handleSearch}>Enviar</Button>
                    </Flex>
                </FormControl>
            </Flex>
        </>
    );
}

export default Validation;
