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
} from '@chakra-ui/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import TextLogo from '../../componenets/logos/TextLogo';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../../graphql/mutations/auth';

export default function SingUp() {
  const router = useRouter();

  const [signUp, { loading, data }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      if (data && data.register.success) {
        router.push('/auth/verification');
      }
    },
  });

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
            ثبت‌‌نام در آکادمی نیمکت
          </Heading>
          {data ? <Text>{JSON.stringify(data.register.errors)}</Text> : null}
          <Formik
            initialValues={{
              email: '',
              password1: '',
              password2: '',
              username: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              signUp({
                variables: {
                  registerEmail: values.email,
                  registerUsername: values.username,
                  registerPassword1: values.password1,
                  registerPassword2: values.password2,
                },
              });
              if (data && data.register.success) {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field name="username">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl>
                      <FormLabel>نام‌ کاربری</FormLabel>
                      <Input id="username" {...field} type="username" />
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl>
                      <FormLabel>ایمیل</FormLabel>
                      <Input id="email" {...field} type="email" />
                    </FormControl>
                  )}
                </Field>
                <Field name="password1">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl>
                      <FormLabel>رمزعبور</FormLabel>
                      <Input {...field} id="password1" type="password" />
                    </FormControl>
                  )}
                </Field>
                <Field name="password2">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl>
                      <FormLabel>تکرار رمزعبور</FormLabel>
                      <Input {...field} id="password2" type="password" />
                    </FormControl>
                  )}
                </Field>
                <Stack spacing={6}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <Checkbox>پذیرش قوانین آکادمی نیمکت</Checkbox>
                    <Link color={'primary'} href="/auth/signin">
                      ورود
                    </Link>
                  </Stack>
                  <Button
                    bgColor="primary"
                    color="white"
                    rounded="full"
                    variant={'solid'}
                    type="submit"
                  >
                    ثبت نام
                  </Button>
                  <Button
                    w={'full'}
                    maxW={'md'}
                    rounded="full"
                    variant={'outline'}
                    leftIcon={<FcGoogle />}
                  >
                    <Center>
                      <Text>ثبت‌نام با گوگل</Text>
                    </Center>
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Flex>
      <Flex flex={2}>
        <Image
          alt={'Login Image'}
          layout="fill"
          src={'/images/photo-1454165804606-c3d57bc86b40.jpeg'}
        />
      </Flex>
    </Stack>
  );
}
