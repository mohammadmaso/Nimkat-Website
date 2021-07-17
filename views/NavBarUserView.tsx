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
import { ME } from '../graphql/queries/user';
import Link from 'next/link';
import NavProfile from '../componenets/navbars/NavProfile';

interface Props {}

const NavBarUserView = (props: Props) => {
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
    <>
      <NavProfile {...data} signOut={signOut} />
    </>
  );
};

export default NavBarUserView;
