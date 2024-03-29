import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import theme from '../theme/theme';
import Fonts from '../theme/Font';

import { ApolloProvider } from '@apollo/client';

import { PWAInstallPrompt } from '../componenets/PWAInstallPrompt';
import { client } from '../graphql/ApolloLink';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <PWAInstallPrompt />
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}
export default MyApp;
