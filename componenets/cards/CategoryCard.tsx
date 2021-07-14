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
} from '@chakra-ui/react';

interface Props {
  id: string;
  title?: string;
  shortDescription?: string;
  image?: string;
}

const CategoryCart = (props: Props) => {
  return (
    <Center py={6} m={2}>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        overflow={'hidden'}
        h={'150px'}
        w={'full'}
        position="relative"
        transition={'all .3s ease'}
        _hover={{ transform: 'scale(1.1,1.1)' }}
      >
        <Stack
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          p={3}
        >
          <Image width="20" src={props.image} alt={props.title} />
          <Text fontWeight={300} color={'primary'} p="3">
            {props.title}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};

export default CategoryCart;
