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
} from '@chakra-ui/react';
import { FiFeather } from 'react-icons/fi';
import CoursePopOver from './CoursePopOver';

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

const CategoryCart = (props: Props) => {
  return (
    <CoursePopOver {...props}>
      <Center py={6} m={3}>
        <Box
          w={'full'}
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
          <Box textAlign="end" alignItems="baseline" textColor="primary">
            {props.price == 0 ? (
              <Text fontSize="md" fontWeight="semibold">
                رایگان
              </Text>
            ) : props.discountPrice ? (
              <Box>
                <Text fontSize="xs">تومان</Text>
                <Box display="inline-flex" alignItems="center">
                  <Text
                    fontSize="md"
                    color="gray.400"
                    as="s"
                    fontWeight="semibold"
                  >
                    {props.price.toLocaleString('ar-EG')}
                  </Text>
                  <Text
                    mr="2"
                    fontSize="large"
                    color="red.400"
                    fontWeight="semibold"
                  >
                    {props.discountPrice.toLocaleString('ar-EG')}
                  </Text>
                </Box>
              </Box>
            ) : (
              <>
                <Text fontSize="xs">تومان</Text>
                <Text fontSize="md" fontWeight="semibold">
                  {props.price.toLocaleString('ar-EG')}
                </Text>
              </>
            )}
          </Box>
        </Box>
      </Center>
    </CoursePopOver>
  );
};

export default CategoryCart;
