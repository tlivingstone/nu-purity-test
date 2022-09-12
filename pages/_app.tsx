import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Footer from '@components/footer';
import { Meta } from '@components/Meta';

/* Theming */
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#FBEFCB',
        fontFamily: "'Times New Roman', Times, serif",
      },
      a: {
        color: 'blue.700',
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
    components: {
      Checkbox: {
        baseStyle: {
          border: '1px solid black',
          borderColor: 'black',
          defaultBgColor: "white",
          _control: {
            borderColor: 'black',
          }
        },
      },
    }
  },
})


function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Meta />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default App
