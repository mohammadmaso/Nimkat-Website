import React from 'react';
import { Heading, Box, Flex } from '@chakra-ui/react';

import { FiEdit } from 'react-icons/fi';

interface Props {}

const ProfileHeader = (props: Props) => {
  return (
    <Box>
      <Flex align="center">
        <Heading size="lg" fontWeight="medium">
          محمد مسعودی
        </Heading>
        <Box pr="2">
          <FiEdit />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfileHeader;
