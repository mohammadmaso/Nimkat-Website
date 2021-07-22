/* eslint-disable @next/next/link-passhref */
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
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface Props {
  user: {
    firstName: string;
    lastName: string;
    avatar: string;
  };
  name: string;
  shortDescription: string;
  title: string;
  id: string;
  enName: string;
  categories: {
    edges: [
      {
        node: {
          title: string;
          id: string;
        };
      }
    ];
  };
}

const TeacherCard = (props: Props) => {
  return (
    <Link
      href={{
        pathname: '/teachers/[name]',
        query: { name: props.enName, id: props.id },
      }}
    >
      <Center py={6} m={2}>
        <Box
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'lg'}
          rounded={'md'}
          w="sm"
          transition={'all .3s ease'}
          _hover={{ transform: 'scale(1.1,1.1)' }}
        >
          <Stack
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            p={3}
          >
            <Avatar
              shadow="lg"
              size="2xl"
              src={props.user.avatar}
              alt={props.title}
            />
            <Text fontWeight={600} fontSize="large" color={'primary'} p="1">
              {props.name}
            </Text>
            <Text fontWeight={300} color={'primary'} p="1">
              {props.title}
            </Text>
            {props.categories.edges.map((item: any) => (
              <Tag key={item.node.id} colorScheme="cyan">
                {item.node.title}
              </Tag>
            ))}
          </Stack>
        </Box>
      </Center>
    </Link>
  );
};

export default TeacherCard;
