import React from 'react';
import {
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
import Image from 'next/image';
import {
  IoLogoInstagram,
  IoLogoSoundcloud,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io5';
import { MobileSubNav } from './MobileSubNav';
import { NAV_ITEMS } from './NAV_ITEMS';

export const MobileNav = ({ onClose, isOpen }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            <Divider />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={5} align="flex-start">
              {NAV_ITEMS.map((navItem) => (
                <MobileSubNav key={navItem.label} {...navItem} />
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
