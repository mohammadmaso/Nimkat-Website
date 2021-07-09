import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import NavBar from '../componenets/navbars/Navbar';

interface Props {
  children: React.ReactNode;
  title: string;
}

const BaseLayout = (props: Props): ReactElement => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Box height="15vh" />
      <Box minHeight="78vh" px={[2, 2, 120]}>
        {props.children}
      </Box>
      {/* <LargeFooter /> */}
    </>
  );
};

export default BaseLayout;
