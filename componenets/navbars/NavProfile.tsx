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
import Link from 'next/link';

interface Props {}

const NavProfile = (props: Props) => {
  const router = useRouter();

  const { loading, error, data } = useQuery(ME);
  console.log(data);

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh-token');
    router.push('/landing');
  };

  if (loading) {
    return null;
  }

  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          bgColor="transparent"
          rightIcon={<ChevronDownIcon />}
        >
          <Flex direction="row-reverse" alignItems="center">
            <Avatar
              shadow="lg"
              // name={data.me.firstName + data.me.lastName}
              src={data.me.avatar}
            />
            <Text
              display={{ base: 'none', md: 'unset' }}
              fontSize={{ base: '12px', md: '14px' }}
              pl={2}
            >
              {data.me.firstName} {data.me.lastName}
            </Text>
          </Flex>
        </MenuButton>
        <MenuList>
          <Link href="/me/profile">
            <MenuItem icon={<FiUser />}>حساب کاربری</MenuItem>
          </Link>
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
