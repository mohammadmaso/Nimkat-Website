import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiBook, FiServer, FiUsers, FiLoader } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('primary.600', 'white')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box
          pl={{ base: 2, md: 4 }}
          textColor={useColorModeValue('primary.600', 'white')}
        >
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('primary.600', 'white')}
          alignContent={'center'}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} py="10" px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        py={10}
        fontSize={48}
        fontWeight={'light'}
        color={useColorModeValue('gray.700', 'gray.50')}
      >
        تو نیمکت چه خبره؟
      </chakra.h1>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, lg: 8 }}
        fontWeight="light"
      >
        <StatsCard
          title={'دانشجو'}
          stat={'۱۲'}
          icon={<FiUsers size={'3em'} />}
        />
        <StatsCard
          title={'دوره‌آموزشی'}
          stat={'۳'}
          icon={<FiBook size={'3em'} />}
        />
        <StatsCard
          title={'دوره در دست ساخت'}
          stat={'۷'}
          icon={<FiLoader size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  );
}
