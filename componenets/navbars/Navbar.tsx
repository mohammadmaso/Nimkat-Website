import React, { useState } from 'react';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useEventListener,
  DrawerCloseButton,
  DrawerOverlay,
  Divider,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  DrawerFooter,
  HStack,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import Logo from '../logos/TextLogo';
import Image from 'next/image';
import {
  IoLogoInstagram,
  IoLogoSoundcloud,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMenuOutline as MenuIcon,
} from 'react-icons/io5';

import Link from 'next/link';

import { ImMagicWand } from 'react-icons/im';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BiBed, BiBook } from 'react-icons/bi';
import { MdFlightTakeoff } from 'react-icons/md';
import { RiRoadMapLine } from 'react-icons/ri';
import { FiShoppingBag, FiBookOpen } from 'react-icons/fi';
import { HiOutlineLightBulb } from 'react-icons/hi';

export default function WithSubnavigation() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const [stickyNav, setStickyNav] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      if (!stickyNav) {
        setStickyNav(true);
      }
    } else {
      if (stickyNav) {
        setStickyNav(false);
      }
    }
  };
  useEventListener('scroll', handleScroll);

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={[5, 124, 124]}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        position="fixed"
        w="100%"
        shadow="lg"
        zIndex={2}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            <Logo
              darkLogo
              height={stickyNav ? 50 : 50}
              width={stickyNav ? 120 : 120}
            />
          </Box>

          <Flex
            align="center"
            justify="space-between"
            wrap="wrap"
            display={{ base: 'none', md: 'flex' }}
            ml={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            // href={'signup'}
          >
            <Link href="/signip">Sign In</Link>
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'primary'}
            rounded="3xl"
            size="sm"
          >
            <Link href="/signup">ثبت‌‌نام</Link>
          </Button>
        </Stack>
      </Flex>

      <MobileNav isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Flex align="center">
                {navItem.icon}
                <ChakraLink
                  p={2}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={useColorModeValue('gray.600', 'gray.200')}
                  _hover={{
                    textDecoration: 'none',
                    color: useColorModeValue('gray.800', 'white'),
                  }}
                >
                  <Link href={navItem.href ?? '#'}>{navItem.label}</Link>
                </ChakraLink>
              </Flex>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={useColorModeValue('white', 'gray.800')}
                p={4}
                rounded={'md'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, icon }: NavItem) => {
  return (
    <ChakraLink
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        {icon}
        <Box>
          <Flex align="center">
            <Link href={href ?? '#'}>
              <Text
                transition={'all .3s ease'}
                _groupHover={{ color: 'green.400' }}
                fontWeight={500}
              >
                {label}
              </Text>
            </Link>
          </Flex>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'green.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </ChakraLink>
  );
};

const MobileNav = ({ onClose, isOpen }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            <Image
              src="/HeaderLogo.svg"
              height={50}
              width={120}
              layout="intrinsic"
            />
            <Divider />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={5} align="flex-start">
              {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
              ))}
            </VStack>
          </DrawerBody>
          <Divider />

          <DrawerFooter justifyContent="center">
            <HStack spacing="10px">
              <IoLogoSoundcloud />
              <IoLogoInstagram />
              <IoLogoSoundcloud />
              <IoLogoYoutube />
              <IoLogoTwitter />
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

const MobileNavItem = ({ label, children, href, icon }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={ChakraLink}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        {icon}
        <Link href={href ?? '#'}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            {label}
          </Text>
        </Link>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <ChakraLink key={child.label} py={2} href={child.href}>
                <Flex>
                  {child.icon}
                  {child.label}
                </Flex>
              </ChakraLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label?: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  icon?: React.ReactNode;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Travel wizard',
    icon: <ImMagicWand />,
    href: '/wizard/',
  },
  {
    label: 'Travel solutions',
    icon: <AiOutlineAppstore />,
    children: [
      {
        label: 'Travelogues',
        subLabel: 'Explore among exiting travelogues',
        href: '#',
        icon: <RiRoadMapLine size="20" />,
      },
      {
        label: 'Transport',
        subLabel: 'Book AirPlan, Train and etc.',
        href: '#',
        icon: <MdFlightTakeoff size="20" />,
      },
      {
        label: 'Accomodation',
        subLabel: 'Book hotels, rooms and etc.',
        href: '#',
        icon: <BiBed size="20" />,
      },
      {
        label: 'Accessories',
        subLabel: 'Buy what any trip need.',
        href: '#',
        icon: <FiShoppingBag size="20" />,
      },
      {
        label: 'Wiki',
        subLabel: 'Read our articles to know more.',
        href: '#',
        icon: <BiBook size="20" />,
      },
    ],
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
];
