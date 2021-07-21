import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Flex,
  Tag,
  HStack,
  Progress,
} from '@chakra-ui/react';
import { FiFeather } from 'react-icons/fi';
import CoursePopOver from './CoursePopOver';
import Link from 'next/link';

interface Props {
  id: string;
  title: string;
  shortDescription: string;
  category: {
    title: string;
  };
  teacher: {
    name: string;
  };
  image: string;
  language: string;
  price: number;
  discountPrice: number;
  slug: string;
  createdAt: string;
  video: string;
}

const LearnCard = (props: Props) => {
  return (
    <Link
      href={{
        pathname: '/me/learn/[id]',
        query: { id: props.id },
      }}
    >
      <Center py={6}>
        <Box
          w={'sm'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'md'}
          rounded={'md'}
          p={4}
          overflow={'hidden'}
          minHeight="340"
          alignContent="space-between"
        >
          <Box>
            <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
              <Image
                height="170"
                alt={props.title}
                src={props.image}
                objectFit={'cover'}
              />
            </Box>
            <Tag mb={3} variant="subtle" colorScheme="cyan">
              {props.category.title}
            </Tag>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'md'}
              fontFamily={'body'}
            >
              {props.title}
            </Heading>
            <Stack
              mt={2}
              direction={'row'}
              fontSize="sm"
              spacing={2}
              align={'center'}
            >
              <FiFeather />
              <Text fontWeight={400}>{props.teacher.name}</Text>
            </Stack>
          </Box>
          <Box>
            <Text mt={2} mb={2} fontWeight="semibold" textColor="green">
              پیشرفت دوره
            </Text>
            <Progress hasStripe value={64} colorScheme="green" />
          </Box>
        </Box>
      </Center>
    </Link>
  );
};

export default LearnCard;
