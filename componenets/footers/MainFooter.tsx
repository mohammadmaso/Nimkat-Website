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
import { ReactNode } from 'react';
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

export default function LargeWithNewsletter() {
  return (
    <Box boxShadow="inner" bgColor={useColorModeValue('gray.100', 'gray.900')}>
      <Container as={Stack} maxW={'7xl'} py="10" colorScheme="primary">
        <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing={8}>
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
          <Flex>
            <Stack fontSize="sm" colorSchema="primary">
              <Link href="/course">دوره‌ها</Link>
              <Link href="/teachers">اساتید</Link>
              <Link href="/about">درباره‌ی نیمکت آکادمی</Link>
              <Text>مجله نیمکت</Text>
              <Link href="/support">پشتیبانی</Link>
            </Stack>
            <Spacer />
            <Stack fontSize="sm" colorSchema="primary">
              <Link href="/privacy"> سیاست حفظ حریم خصوصی</Link>
              <Link href="/term-of-use">قوانین و مقررات</Link>
              <Link href="https://jobvision.ir">فرصت شغلی</Link>
            </Stack>
          </Flex>
          <Flex
            justifyContent="flex-end"
            justifyItems="flex-end"
            direction="row"
          >
            <Stack>
              {/* <Box>
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
              </Box> */}
              <Grid
                templateColumns="repeat(5, 1fr)"
                gap={1}
                colorSchema="primary"
                fontSize="xl"
              >
                <AiOutlineTwitter />
                <AiOutlineWhatsApp />
                <AiOutlineYoutube />
                <AiOutlineInstagram />
              </Grid>
              <Text colorSchema="primary">
                تمامی حقوق برای اکادمی نیمکت محفوظ است. | ۱۴۰۰
              </Text>
            </Stack>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
