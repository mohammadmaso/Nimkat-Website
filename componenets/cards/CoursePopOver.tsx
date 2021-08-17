import React, { Children } from 'react';
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
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

const CoursePopOver = (props: Props) => {
  return (
    <div>
      <Popover isLazy placement="auto" trigger="hover">
        <PopoverTrigger>{props.children}</PopoverTrigger>
        <PopoverContent shadow="lg">
          <PopoverArrow />
          <PopoverHeader fontSize="large" fontWeight="bold">
            <Flex justify="space-between">
              <Text> {props.title}</Text>

              <Button
                size="sm"
                variant="solid"
                rounded="full"
                colorScheme="primary"
                disabled={props.underConstruction}
              >
                ثبت‌نام
              </Button>
            </Flex>
          </PopoverHeader>
          <PopoverBody padding={5} fontSize="sm">
            {props.shortDescription}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CoursePopOver;
