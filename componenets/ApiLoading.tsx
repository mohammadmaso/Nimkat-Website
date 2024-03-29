import { Center, Spinner } from '@chakra-ui/react';
import React from 'react';

interface Props {}

const ApiLoading = (props: Props) => {
  return (
    <Center my="5">
      <Spinner p="3" color="primary.600" />
    </Center>
  );
};

export default ApiLoading;
