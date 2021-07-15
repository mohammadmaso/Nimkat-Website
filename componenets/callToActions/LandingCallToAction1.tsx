import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';

interface Props {}

const LandingCallToAction1 = (props: Props) => {
  return (
    <Box py="10">
      <Flex align="center" justify="space-between">
        <Stack flex={1}>
          <Heading color="primary" fontWeight="light" size="2xl">
            حرفه‌ای یاد بگیر!
          </Heading>
          <Text py="10">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </Text>
          <Button
            rounded="full"
            size="lg"
            bgColor="primary"
            textColor="white"
            leftIcon={<FiSearch />}
            width="sm"
          >
            جستجو میان دوره‌ها
          </Button>
        </Stack>
        <Box>
          <Image
            src={'/images/Landing1.svg'}
            height={500}
            width={500}
            layout="intrinsic"
            alt={'appName'}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingCallToAction1;
