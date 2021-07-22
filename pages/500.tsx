import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

interface Props {}

const Page404 = (props: Props) => {
  return (
    <Flex direction="column" height="100vh" align="center" justify="center">
      <Heading>خطای سمت سرور | ۵۰۰</Heading>
    </Flex>
  );
};

export default Page404;