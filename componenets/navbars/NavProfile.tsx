import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
} from '@chakra-ui/react';

import { FiLogOut, FiUser, FiBookOpen } from 'react-icons/fi';

import React from 'react';
import { useRouter } from 'next/router';

import { useQuery } from '@apollo/client';
import { ME } from '../../graphql/queries/user';

interface Props {}

const NavProfile = (props: Props) => {
  const router = useRouter();

  const { loading, error, data } = useQuery(ME);
  console.log(data);

  const signOut = () => {
    localStorage.removeItem('token');
    router.push('/landing');
  };

  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          bgColor="transparent"
          rightIcon={<ChevronDownIcon />}
        >
          <Flex direction="row-reverse" alignItems="center">
            <Avatar shadow="lg" name="" src="https://bit.ly/dan-abramov" />
            <Text
              display={{ base: 'none', md: 'unset' }}
              fontSize={{ base: '12px', md: '14px' }}
              pl={2}
            >
              محمد مسعودی
            </Text>
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem icon={<FiUser />}>حساب کاربری</MenuItem>
          <MenuItem icon={<FiBookOpen />}>دوره‌های من</MenuItem>
          <MenuItem onClick={signOut} icon={<FiLogOut />}>
            خروج
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default NavProfile;
