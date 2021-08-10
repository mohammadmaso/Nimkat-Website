import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Center,
  Text,
  Box,
  Spinner,
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import TextLogo from '../../componenets/logos/TextLogo';
import Link from 'next/link';

import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../../graphql/mutations/auth';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const [signIn, { loading, error, data }] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      if (data) {
        localStorage.setItem('token', data.tokenAuth.token as string);
        localStorage.setItem(
          'refresh-token',
          data.tokenAuth.refreshToken as string
        );
        router.push('/');
      }
    },
  });

  function onSubmit(e: any) {
    e.preventDefault();
    signIn({
      variables: { tokenAuthUsername: username, tokenAuthPassword: password },
    });
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Head>
        <title>نیمکت آکادمی | ورود</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex p={8} flex="1" align={'center'} justify={'center'} zIndex={100}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <TextLogo height="100" width="200" />
          <Heading fontWeight="medium" fontSize={'xl'}>
            ورود به حساب کاربری
          </Heading>
          {error ? <Text>{error.message}</Text> : null}

          <form onSubmit={onSubmit}>
            <FormControl id="phone">
              <FormLabel>شماره موبایل</FormLabel>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                type="phone"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>رمزعبور</FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
                mt="2"
              >
                <Link href="/auth/signup">ثبت نام</Link>
                <Link href="/auth/forgot-password">فراموشی رمز عبور</Link>
              </Stack>
              <Button
                colorScheme="primary"
                rounded="full"
                variant={'solid'}
                type="submit"
              >
                {loading ? <Spinner /> : 'ورود'}
              </Button>

              <Button
                w={'full'}
                maxW={'md'}
                rounded="full"
                variant={'outline'}
                leftIcon={<FcGoogle />}
                disabled
              >
                <Center>
                  <Text>ورود با گوگل</Text>
                </Center>
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>

      <Flex flex="1">
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={'/images/photo-1454165804606-c3d57bc86b40.jpeg'}
        />
      </Flex>
    </Stack>
  );
}
