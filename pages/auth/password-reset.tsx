// import {
//   Button,
//   Checkbox,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Link,
//   Stack,
//   Center,
//   Text,
//   Box,
//   useDisclosure,
//   Link as ChakraLink,
//   Image,
// } from '@chakra-ui/react';
// import React, { useContext, useState } from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import TextLogo from '../../componenets/logos/TextLogo';
// import { useRouter } from 'next/router';
// import { useFormikContext, Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// import Head from 'next/head';
// import TermOfUseModal from '../../componenets/portals/TermOfUseModal';
// import {
//   useRegisterSmsMutation,
//   useResetPasswordSmsMutation,
// } from '../../graphql/generated/types';

// export default function SingUp() {
//   const router = useRouter();

//   const [phone, setPhone] = useState('');

//   const modal = useDisclosure();

//   const [resetPassword, { loading, data }] = useResetPasswordSmsMutation({
//     onCompleted: (data) => {
//       if (data && data.resetPasswordSms?.success) {
//         router.push({
//           pathname: '/auth/login',
//           query: { toast: 'passwod-changed' },
//         });
//       }
//     },
//   });

//   return (
//     <>
//       <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
//         <Head>
//           <title> نیمت‌آکادمی | تغییر رمزعبور</title>
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
//         <Flex p={8} flex={1} align={'center'} justify={'center'} zIndex={100}>
//           <Stack spacing={4} w={'full'} maxW={'md'}>
//             <TextLogo height="100" width="200" />
//             <Heading fontWeight="medium" fontSize={'xl'}>
//               تغییر رمز عبور
//             </Heading>

//             <Formik
//               initialValues={{
//                 phoneNumber: router.query.phone,
//                 password1: '',
//                 password2: '',
//                 code: '',
//               }}
//               onSubmit={(values, { setSubmitting }) => {
//                 resetPassword({
//                   variables: {
//                     resetPasswordSmsCode: values.code,
//                     resetPasswordSmsNewPassword1: values.password1,
//                     resetPasswordSmsNewPassword2: values.password2,
//                     resetPasswordSmsPhoneNumber: router.query.phone as string,
//                   },
//                 });
//                 if (data && data.resetPasswordSms?.success) {
//                   setSubmitting(false);
//                 }
//               }}
//             >
//               {({ isSubmitting }) => (
//                 <Form>
//                   <Field name="code">
//                     {({ field, form }: { field: any; form: any }) => (
//                       <FormControl>
//                         <FormLabel>کد ارسال شده</FormLabel>
//                         <Input id="code" {...field} type="number" />
//                         {data?.resetPasswordSms?.errors.code && (
//                           <Text mt="1" color="red">
//                             {data?.resetPasswordSms?.errors.code[0].message}
//                           </Text>
//                         )}
//                       </FormControl>
//                     )}
//                   </Field>
//                   <Field name="password1">
//                     {({ field, form }: { field: any; form: any }) => (
//                       <FormControl>
//                         <FormLabel>رمزعبور جدید</FormLabel>
//                         <Input {...field} id="password1" type="password" />
//                         {data?.resetPasswordSms?.errors.password1 && (
//                           <Text mt="1" color="red">
//                             {
//                               data?.resetPasswordSms?.errors.password1[0]
//                                 .message
//                             }
//                           </Text>
//                         )}
//                       </FormControl>
//                     )}
//                   </Field>
//                   <Field name="password2">
//                     {({ field, form }: { field: any; form: any }) => (
//                       <FormControl>
//                         <FormLabel>تکرار رمزعبور</FormLabel>
//                         <Input {...field} id="password2" type="password" />
//                         {data?.resetPasswordSms?.errors.password2 && (
//                           <Text mt="1" color="red">
//                             {
//                               data?.resetPasswordSms?.errors.password2[0]
//                                 .message
//                             }
//                           </Text>
//                         )}
//                       </FormControl>
//                     )}
//                   </Field>
//                   <Stack spacing={6} mt="2">
//                     <Button
//                       colorScheme="primary"
//                       rounded="full"
//                       variant={'solid'}
//                       type="submit"
//                       isLoading={loading}
//                     >
//                       تغییر رمز ورود
//                     </Button>
//                   </Stack>
//                 </Form>
//               )}
//             </Formik>
//           </Stack>
//         </Flex>
//         <Flex flex="1">
//           <Image
//             alt={'Login Image'}
//             objectFit={'cover'}
//             src={'/images/angelo-pantazis-zXVk8mNl9M0-unsplash.jpg'}
//           />
//         </Flex>
//       </Stack>
//       <TermOfUseModal {...modal} />
//     </>
//   );
// }
import React from 'react';

interface Props {}

const passwordforgot = (props: Props) => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default passwordforgot;
