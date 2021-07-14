import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Center,
  Text,
  Box,
  Spinner,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import TextLogo from '../../componenets/logos/TextLogo';
import Image from 'next/image';

import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../../graphql/mutations/auth';
import { useRouter } from 'next/router';

export default function SignIn() {
  const [email, setEmail] = useState('');
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
      variables: { tokenAuthEmail: email, tokenAuthPassword: password },
    });
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex
        p={8}
        flex={1}
        align={'center'}
        justify={'center'}
        zIndex={100}
        bgColor="white"
      >
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <TextLogo height="100" width="200" />
          <Heading fontWeight="medium" fontSize={'xl'}>
            ورود به حساب کاربری
          </Heading>
          {error ? <Text>{error.message}</Text> : null}

          <form onSubmit={onSubmit}>
            <FormControl id="email">
              <FormLabel>ایمیل</FormLabel>
              <Input onChange={(e) => setEmail(e.target.value)} type="email" />
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
              >
                <Checkbox>بخاطر سپاری ورود</Checkbox>
                <Link color={'primary'}>فراموشی رمز عبور</Link>
              </Stack>
              <Button
                bgColor="primary"
                color="white"
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
              >
                <Center>
                  <Text>ورود با گوگل</Text>
                </Center>
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={2}>
        <Box>
          <Image
            alt={'Login Image'}
            layout="fill"
            src={'/images/photo-1454165804606-c3d57bc86b40.jpeg'}
          />
        </Box>
      </Flex>
    </Stack>
  );
}
