import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import MainFooter from '../componenets/footers/MainFooter';
import NavBarView from '../views/NavBarView';

interface Props {
  children: React.ReactNode;
  title: string;
}

const BaseLayout = (props: Props): ReactElement => {
  return (
    <>
      <Head>
        <title>{`نیمکت آکادمی | ${props.title} `}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarView />
      <Box height="12vh" />
      <Box minHeight="67vh" px={[2, 2, 120]} mb="10">
        {props.children}
      </Box>
      <MainFooter />
      {/* <LargeFooter /> */}
    </>
  );
};

export default BaseLayout;
