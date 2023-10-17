import { useState } from 'react';
import { Box, Link, Flex, ListItem, UnorderedList, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useBreakpointValue } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi'; 


const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      {isMobile && (
        <IconButton
          icon={<FiMenu />}
          bg='none'
          color='#000'
          w='50px'
          h='50px'
          onClick={toggleMenu}
        />
      )}
      <Drawer placement="right" onClose={toggleMenu} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="#053057">
            <DrawerCloseButton color="#fff" />
            <DrawerBody>
                <Flex 
                w="100%"
                h='100vh'
                justifyContent='center'
                alignItems='center'
                fontSize="1rem"
                color='#fff'
            > 
                <UnorderedList 
                display='flex' 
                gap={'4rem'}
                flexDir={'column'}
                textAlign={'center'}
                textTransform='uppercase' 
                fontSize='.825rem' 
                fontFamily='montserrat'
                fontWeight='500'
                lineHeight='24px'
                color="#fff">
                    <ListItem>
                        <Link>home</Link>
                    </ListItem>
                    <ListItem>
                        <Link>insitucional</Link>
                    </ListItem>
                    <ListItem>
                        <Link>acadêmico</Link>
                    </ListItem>
                    <ListItem>
                        <Link>biblioteca</Link>
                    </ListItem>
                    <ListItem>
                        <Link>processo seletivo</Link>
                    </ListItem>
                    <ListItem>
                        <Link>radio db</Link>
                    </ListItem>
                    <ListItem>
                        <Link>contato</Link>
                    </ListItem>
                </UnorderedList>
                </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Mobile;