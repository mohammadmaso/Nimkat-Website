import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme/theme';
import Fonts from '../theme/Font';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
