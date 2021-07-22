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
  Badge,
} from '@chakra-ui/react';
import { FiFeather } from 'react-icons/fi';
import CoursePopOver from './CoursePopOver';
import Link from 'next/link';

interface Props {}

const LearnCard = (props: any) => {
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
              {props.course.category.title}
            </Tag>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'md'}
              fontFamily={'body'}
            >
              {props.course.title}
            </Heading>
            <Stack
              mt={2}
              direction={'row'}
              fontSize="sm"
              spacing={2}
              align={'center'}
            >
              <FiFeather />
              <Text fontWeight={400}>{props.course.teacher.name}</Text>
            </Stack>
          </Box>
          <Box>
            {props.paymentStatus ? (
              <Badge colorScheme="green">پرداخت شده</Badge>
            ) : (
              <Badge colorScheme="red">پرداخت نشده</Badge>
            )}
          </Box>
        </Box>
      </Center>
    </Link>
  );
};

export default LearnCard;
