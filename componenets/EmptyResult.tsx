import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {}

const EmptyResult = (props: Props) => {
  return (
    <Flex justify="center" align="center">
      <Text>موردی جهت نمایش وجود ندارد!</Text>
    </Flex>
  );
};

export default EmptyResult;
