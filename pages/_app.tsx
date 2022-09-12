import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Footer from '@components/footer';

/* Theming */
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#FBEFCB',
      },
      a: {
        _hover: {
          textDecoration: 'underline',
        },
      },
      h1: {
        fontSize: '4xl',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '2xl',
        fontWeight: 'bold',
      },
      h3: {
        fontSize: 'lg'
      },
      h4: {
        fontSize: 'md'
      },
    },
  },
})


function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default App
