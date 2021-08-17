import React from 'react';
import { Box, Text, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function TextLogo(props: any) {
  const { colorMode } = useColorMode();
  return (
    <Box {...props} cursor="pointer">
      <Link href="/" passHref>
        <Image
          src={colorMode === 'light' ? '/logo-dark.svg' : '/logo-light.svg'}
          height={props.height ?? 100}
          width={props.width ?? 100}
          layout="intrinsic"
          alt={'آکادمی نیمکت'}
        />
      </Link>
    </Box>
  );
}
