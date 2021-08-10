import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

interface Props {}

const LandingCallToAction1 = (props: Props) => {
  return (
    <Box py="10">
      <Flex
        align="center"
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        justify="space-between"
      >
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
            colorScheme="primary"
            variant="solid"
            leftIcon={<FiSearch />}
          >
            جستجو میان دوره‌ها
          </Button>
        </Stack>
        <Box flex="1" py="4">
          <Image
            objectFit={'cover'}
            src={'/images/Landing1.svg'}
            alt={'Landing image'}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingCallToAction1;
