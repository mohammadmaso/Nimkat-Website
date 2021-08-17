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
  useDisclosure,
  Link as ChakraLink,
  Image,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import TextLogo from '../../componenets/logos/TextLogo';
import { useRouter } from 'next/router';
import { useFormikContext, Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../../graphql/mutations/auth';

import Head from 'next/head';
import TermOfUseModal from '../../componenets/portals/TermOfUseModal';

export default function SingUp() {
  const router = useRouter();

  const [phone, setPhone] = useState('');

  const modal = useDisclosure();

  const [signUp, { loading, data }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      if (data && data.registerSms.success) {
        router.push({
          pathname: '/auth/verification',
          query: { phone: phone },
        });
      }
    },
  });

  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Head>
          <title>نیمکت آکادمی | ثبت نام</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Flex p={8} flex={1} align={'center'} justify={'center'} zIndex={100}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <TextLogo height="100" width="200" />
            <Heading fontWeight="medium" fontSize={'xl'}>
              ثبت‌‌نام در آکادمی نیمکت
            </Heading>
            {data ? (
              <Text>{JSON.stringify(data.registerSms.errors)}</Text>
            ) : null}
            <Formik
              initialValues={{
                password1: '',
                password2: '',
                username: '',
                acceptTerms: false,
              }}
              validationSchema={Yup.object().shape({
                acceptTerms: Yup.bool().oneOf(
                  [true],
                  'پذیرش قوانین برای ثبت‌نام اجباری است!'
                ),
              })}
              onSubmit={(values, { setSubmitting }) => {
                signUp({
                  variables: {
                    registerSmsUsername: values.username,
                    registerSmsPassword1: values.password1,
                    registerSmsPassword2: values.password2,
                  },
                });
                setPhone(values.username);
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
                        <FormLabel>شماره موبایل</FormLabel>
                        <Input id="username" {...field} type="phone" />
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
                  <Stack spacing={6} mt="2">
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}
                    >
                      <Field name="acceptTerms">
                        {({ field, form }: { field: any; form: any }) => (
                          <FormControl>
                            <Checkbox {...field}>
                              پذیرش{' '}
                              <ChakraLink
                                textDecoration="underline"
                                onClick={modal.onOpen}
                              >
                                قوانین آکادمی نیمکت
                              </ChakraLink>
                            </Checkbox>
                            <Box textColor="red">
                              <ErrorMessage
                                name="acceptTerms"
                                component="div"
                              />
                            </Box>
                          </FormControl>
                        )}
                      </Field>

                      <Link href="/auth/signin">ورود</Link>
                    </Stack>
                    <Button
                      colorScheme="primary"
                      rounded="full"
                      variant={'solid'}
                      type="submit"
                      isLoading={loading}
                    >
                      ثبت نام
                    </Button>
                    {/* <Button
                      w={'full'}
                      maxW={'md'}
                      rounded="full"
                      variant={'outline'}
                      leftIcon={<FcGoogle />}
                      disabled
                    >
                      <Center>
                        <Text>ثبت‌نام با گوگل</Text>
                      </Center>
                    </Button> */}
                  </Stack>
                </Form>
              )}
            </Formik>
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
      <TermOfUseModal {...modal} />
    </>
  );
}
