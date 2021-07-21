/* eslint-disable @next/next/link-passhref */
import { useQuery } from '@apollo/client';
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
  Spinner,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import CourseCard from './cards/CourseCard';

interface Teacher {
  id: string | string[] | undefined;
  user: {
    avatar: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  shortDescription: string;
  title: string;
  name: string;
  videoId: string;
  coursemodelSet: {
    edges: [
      {
        node: {
          id: string;
          title: string;
          createdAt: string;
          shortDescription: string;
          category: {
            title: string;
          };
          image: string;
          language: string;
          price: string;
          discountPrice: string;
          slug: string;
          teacher: {
            name: string;
          };
        };
      }
    ];
  };
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
  enName: string;
}

const TeacherDetail = (props: any) => {
  return (
    <>
      <Center py={1}>
        <Stack
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          p={3}
        >
          <Avatar
            shadow="lg"
            size="2xl"
            src={props.teacher.user.avatar}
            alt={props.teacher.title}
          />
          <Text fontWeight={600} fontSize="large" color={'primary'} p="1">
            {props.teacher.user.firstName + ' ' + props.teacher.user.lastName}
          </Text>
          <Text fontWeight={300} color={'primary'} p="1">
            {props.title}
          </Text>
          {props.teacher.categories.edges.map((item: any) => (
            <Tag key={item.node.id} colorScheme="cyan">
              {item.node.title}
            </Tag>
          ))}
        </Stack>
      </Center>
      <Tabs colorSchema="primary" align="center">
        <TabList>
          <Tab>معرفی و رزومه</Tab>
          <Tab>دوره‌ها</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>{props.teacher.shortDescription}</Text>
          </TabPanel>
          <TabPanel>
            <Flex>
              {props.teacher.coursemodelSet.edges.map((item: any) => (
                <Box key={item.node.id} flex={{ base: 1, md: 2 }}>
                  <CourseCard {...item.node} />
                </Box>
              ))}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default TeacherDetail;
