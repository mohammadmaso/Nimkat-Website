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
  Wrap,
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
  underConstruction: boolean;
}

const CategoryCart = (props: Props) => {
  return (
    <CoursePopOver {...props}>
      <Center m="3">
        <Stack
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'md'}
          rounded={'md'}
          overflow={'hidden'}
          minHeight="350"
          justify="space-between"
        >
          <Stack p={4} textAlign="right" justify="flex-end">
            <Box bg={'gray.100'} mt={-6} mx={-5} mb={2} pos={'relative'}>
              <Image
                height="170"
                alt={props.title}
                src={props.image}
                objectFit={'cover'}
              />
            </Box>
            <Tag variant="subtle" colorScheme="cyan">
              {props.category.title}
            </Tag>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'md'}
              fontFamily={'body'}
            >
              {props.title}
            </Heading>
            <Wrap direction={'row'} fontSize="sm" spacing={2} align={'center'}>
              <FiFeather />
              <Text fontWeight={400}>{props.teacher.name}</Text>
            </Wrap>
          </Stack>
          {props.underConstruction == true ? (
            <Flex
              h="12"
              w="full"
              bg="primary.500"
              justifyContent="center"
              alignItems="center"
            >
              <Text textColor="white">در دست تألیف</Text>
            </Flex>
          ) : (
            <Box alignItems="baseline" colorSchema="primary" px="4">
              {props.price == 0 || props.price == null ? (
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
                      {props.price}
                    </Text>
                    <Text
                      ml="2"
                      fontSize="large"
                      color="red.400"
                      fontWeight="semibold"
                    >
                      {props.discountPrice}
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
          )}
        </Stack>
      </Center>
    </CoursePopOver>
  );
};

export default CategoryCart;
