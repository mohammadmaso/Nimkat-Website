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
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import TextLogo from '../../componenets/logos/TextLogo';
import BeatLoader from 'react-spinners/BeatLoader';

import { useMutation } from '@apollo/client';
import {
  VERIFY_ACCOUNT_SMS,
  RESEND_ACTIVATION_SMS,
} from '../../graphql/mutations/auth';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function SignIn() {
  const [code, setCode] = useState('');

  const [result, setResult] = useState('');
  const router = useRouter();
  const [displayResend, setDisplayResend] = useState(true);
  const [count, setCount] = useState(0);

  const [
    verify,
    {
      loading: verificationLoading,
      error: verificationError,
      data: verificationData,
    },
  ] = useMutation(VERIFY_ACCOUNT_SMS, {
    onCompleted: (data) => {
      if (data) {
        if (data && data.verifySms.success) {
          router.push('/auth/signin');
        }
      }
    },
  });

  const [
    resend,
    { loading: resendLoading, error: resendError, data: resendData },
  ] = useMutation(RESEND_ACTIVATION_SMS, {
    onCompleted: (data) => {
      if (data) {
        if (data && data.resendSms.success) {
          setResult('کد با موفقیت ارسال شد');
        }
      }
    },
  });

  function onSubmit(e: any) {
    e.preventDefault();
    verify({
      variables: { verifySmsCode: code, verifySmsUsername: router.query.phone },
    });
  }

  function handleResendButton() {
    setDisplayResend(false);
    setCount(60);
    var counter = setInterval(timer, 1000);
    function timer() {
      setCount((prevCount) => prevCount - 1);
      if (count <= 0) {
        clearInterval(counter);
        setDisplayResend(true);
        return;
      }
    }
  }

  function handleResendCode(e: any) {
    // handleResendButton();
    setResult('');
    e.preventDefault();
    resend({
      variables: { resendSmsUsername: router.query.phone },
    });
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Head>
        <title>نیمکت آکادمی | تایید ثبت ‌نام</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex p={8} flex={1} align={'center'} justify={'center'} zIndex={100}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <TextLogo height="100" width="200" />
          <Heading fontWeight="medium" fontSize={'xl'}>
            فعالسازی‌ حساب ‌کاربری
          </Heading>
          {verificationError ? <Text>{verificationError.message}</Text> : null}

          <form onSubmit={onSubmit}>
            <FormControl id="code">
              <FormLabel>کد ارسال شده</FormLabel>
              <Input onChange={(e) => setCode(e.target.value)} />
            </FormControl>

            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
                mt={2}
              >
                <Button
                  spinner={<BeatLoader size={8} color="#215970" />}
                  colorScheme="primary"
                  isLoading={resendLoading}
                  onClick={handleResendCode}
                  variant="link"
                  fontSize="medium"
                >
                  ارسال دوباره کد
                </Button>

                <Text>{result}</Text>
              </Stack>
              <Button
                colorScheme="primary"
                rounded="full"
                variant={'solid'}
                type="submit"
                isLoading={verificationLoading}
              >
                فعالسازی‌ حساب
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
