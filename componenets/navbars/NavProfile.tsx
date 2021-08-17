import { ChevronDownIcon, MoonIcon, AtSignIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorMode,
} from '@chakra-ui/react';

import { FiLogOut, FiUser, FiBookOpen } from 'react-icons/fi';

import React from 'react';

import Link from 'next/link';

interface Props {}

const NavProfile = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

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
              src={props.me.avatar}
            />
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem icon={<AtSignIcon />} fontWeight="light">
            {props.me?.username}
          </MenuItem>
          <Link href="/me/profile" passHref>
            <MenuItem icon={<FiUser />}>حساب کاربری</MenuItem>
          </Link>
          <Link href="/me/learn" passHref>
            <MenuItem icon={<FiBookOpen />}>دوره‌های من</MenuItem>
          </Link>
          <MenuItem onClick={toggleColorMode} icon={<MoonIcon />}>
            حالت شب
          </MenuItem>
          <MenuItem onClick={props.signOut} icon={<FiLogOut />}>
            خروج
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default NavProfile;
