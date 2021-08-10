import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

interface Props {}

const Page404 = (props: Props) => {
  return (
    <Flex direction="column" height="100vh" align="center" justify="center">
      <Head>
        <title>پیدا نکردیم!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading fontWeight="light">خطای سمت سرور | ۵۰۰</Heading>
    </Flex>
  );
};

export default Page404;
