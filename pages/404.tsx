import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

interface Props {}

const Page404 = (props: Props) => {
  return (
    <Flex direction="column" height="90vh" align="center" justify="center">
      <Head>
        <title>پیدا نکردیم!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={'/images/404.svg'}
        height={400}
        width={500}
        layout="intrinsic"
        alt={'آکادمی نیمکت'}
      />
      <Heading fontWeight="light">صفحه مورد نظر شما یافت نشد!</Heading>
    </Flex>
  );
};

export default Page404;
