import { AtSignIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Divider,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import { BiLocationPlus } from 'react-icons/bi';
import { FiPhone, FiLink } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import { SocialButtons } from '../componenets/SocialButtons';

import BaseLayout from '../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout title="تماس‌ با ما">
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing="5">
        <Center p="4" rounded="lg" shadow="lg">
          <Stack fontSize="sm">
            <Wrap justify="space-between">
              <Wrap align="center">
                <FiPhone />
                <Text fontWeight="bold">شماره تلفن</Text>
              </Wrap>
              <Link href="tel:+989380374660" dir="ltr">
                +۹۸۹۳۸۰۳۷۴۶۶۰
              </Link>
            </Wrap>
            <Divider />
            <Wrap justify="space-between">
              <Wrap align="center">
                <HiLocationMarker />
                <Text fontWeight="bold">آدرس</Text>
              </Wrap>
              <Text dir="ltr">ایران، تهران، چیتگر، بلوار امیرکبیر</Text>
            </Wrap>
            <Divider />
            <Wrap justify="space-between">
              <Wrap align="center">
                <AtSignIcon />
                <Text fontWeight="bold">ایمیل</Text>
              </Wrap>
              <Link dir="ltr">support@nimcatacademy.ir</Link>
            </Wrap>
            <Divider />
            <Wrap justify="center">
              <SocialButtons />
            </Wrap>
          </Stack>
        </Center>
        <Link href="https://www.google.com/maps/dir/?api=1&destination=شرکت+شهریار+ترابر+آسیا%E2%80%AD/">
          <Box p="0" rounded="lg" shadow="lg">
            <Image src="images/map.png" objectFit="cover" alt="Map" />
          </Box>
        </Link>
      </SimpleGrid>
    </BaseLayout>
  );
}
