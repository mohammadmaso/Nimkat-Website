import { CloseIcon, HamburgerIcon, MoonIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  IconButton,
  Text,
  useColorMode,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import LearnContent from './LearnContent';
import { LearnSidebar } from './LearnSidebar';

interface Props {
  sidebarData: any;
  sideBarLoading: any;
  sideBarError: any;
}

const LearnPage = (props: Props) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      {/* <LearnContent {...props.content} /> */}
      <Flex
        flex={{ base: 'flex', md: 'flex' }}
        flexDirection={{ base: 'column', md: 'row' }}
        display={{ base: 'flex', md: 'flex' }}
        bgColor={useColorModeValue('gray.100', 'gray.700')}
        borderRadius="md"
        justify="space-between"
        align="center"
        p="2"
      >
        <Button
          // position="fixed"
          // right="0"
          onClick={onToggle}
          leftIcon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          borderRadius="0"
          colorScheme="telegram"
          variant="ghost"
          aria-label={'Toggle Navigation'}
        >
          فهرست مطالب
        </Button>
        <Text fontWeight="semibold">
          {props.sidebarData.secureCourse.title}
        </Text>
        <Button
          rightIcon={<MoonIcon w={4} h={4} />}
          colorScheme="telegram"
          variant="ghost"
          aria-label={'Night Mode'}
          onClick={toggleColorMode}
        >
          حالت شب
        </Button>
      </Flex>
      <LearnContent
        video={props.sidebarData.secureCourse.video}
        sideBarLoading={props.sideBarLoading}
        sideBarError={props.sideBarError}
      />
      <LearnSidebar
        sidebarData={props.sidebarData}
        sideBarLoading={props.sideBarLoading}
        sideBarError={props.sideBarError}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
};

export default LearnPage;
