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
  Icon,
  Tooltip,
} from '@chakra-ui/react';

import { FiLogOut, FiUser, FiBookOpen } from 'react-icons/fi';

import React from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import NavProfile from '../componenets/navbars/NavProfile';
import NavButtons from '../componenets/navbars/NavButtons';
import { useMeQuery } from '../graphql/generated/types';
import { BiError } from 'react-icons/bi';

interface Props {}

const NavBarUserView = (props: Props) => {
  const router = useRouter();

  const { loading, error, data } = useMeQuery();
  if (error)
    return (
      <Tooltip
        label="خطا در دریافت پروفایل/ ورود دوباره"
        aria-label="A tooltip"
        placement="bottom-end"
      >
        <Icon
          onClick={() => router.push('/auth/signin')}
          as={BiError}
          color="red.300"
        />
      </Tooltip>
    );
  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh-token');
    router.push('/');
  };

  if (loading) {
    return null;
  }

  if (data.me == null) {
    return <NavButtons />;
  }

  return (
    <>
      <NavProfile {...data} signOut={signOut} />
    </>
  );
};

export default NavBarUserView;
