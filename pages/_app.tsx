import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import theme from '../theme/theme';
import Fonts from '../theme/Font';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://nimkat-academy.herokuapp.com/api/',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}
export default MyApp;
