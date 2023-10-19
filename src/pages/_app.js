import { CSSReset, ChakraProvider, theme } from '@chakra-ui/react';
import '../style.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;