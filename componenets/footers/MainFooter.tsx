import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Flex,
  VStack,
  Spacer,
  Grid,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
} from 'react-icons/ai';

import TextLogo from '../logos/TextLogo';
import { SocialButtons } from '../SocialButtons';

export default function LargeWithNewsletter() {
  return (
    <Box boxShadow="inner" bgColor={useColorModeValue('gray.100', 'gray.900')}>
      <Container maxW={'full'} py="10" px={[4, 4, 120]}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 3 }}
          spacing={8}
          alignItems="end"
        >
          <Box>
            <Stack>
              <TextLogo width="140" height="50" />
              <Text fontSize="sm" colorSchema="primary">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </Text>
            </Stack>
          </Box>
          <Flex columns={{ base: 1, sm: 1, md: 2 }} justify="space-around">
            <Stack fontSize="sm" colorSchema="primary">
              <Link href="/course">دوره‌ها</Link>
              <Link href="/teachers">اساتید</Link>
              <Link href="/about">درباره‌ی نیمکت آکادمی</Link>
              <Text>مجله نیمکت</Text>
              <Link href="/contact">تماس‌ با ما</Link>
            </Stack>
            <Spacer />
            <Stack fontSize="sm" colorSchema="primary">
              <Link href="/privacy"> سیاست حفظ حریم خصوصی</Link>
              <Link href="/term-of-use">قوانین و مقررات</Link>
              <Link href="https://jobvision.ir">فرصت شغلی</Link>
            </Stack>
          </Flex>
          <Stack
            justify={{
              base: 'center',
              sm: 'center',
              md: 'flex-end',
              lg: 'flex-end',
            }}
            alignItems={{
              base: 'center',
              sm: 'center',
              md: 'flex-end',
              lg: 'flex-end',
            }}
          >
            <Box>
              <Image
                src="/images/samandehi.png"
                layout="fixed"
                width={115 / 1.3}
                height={150 / 1.3}
                alt="samandehi"
              />
              <Image
                src="/images/enamad.png"
                layout="fixed"
                width={138 / 1.3}
                height={150 / 1.3}
                alt="enamad"
              />
            </Box>
            <SocialButtons />
            <Text fontSize="xs" textColor="primary">
              تمامی حقوق برای نیمکت‌ آکادمی محفوظ است. | ۱۴۰۰ ©
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
