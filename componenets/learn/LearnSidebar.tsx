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
  Heading,
  Text,
  Progress,
  Box,
} from '@chakra-ui/react';
import Image from 'next/image';
import {
  IoLogoInstagram,
  IoLogoSoundcloud,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io5';
import { LearnSidbarSubMenu } from './LearnSidbarSubMenu';

interface Props {
  sidebarData: any;
  sideBarLoading: any;
  sideBarError: any;
  isOpen: any;
  onClose: any;
}

export const LearnSidebar = (props: Props) => {
  return (
    <Drawer isOpen={props.isOpen} placement="right" onClose={props.onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            <Text mb={2} fontWeight="semibold">
              {props.sidebarData.secureCourse.title}
            </Text>
            <Divider />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={1} align="flex-start">
              {props.sidebarData
                ? props.sidebarData.secureCourse.sections.edges.map(
                    (item: any) => (
                      <LearnSidbarSubMenu key={item.node.id} {...item.node} />
                    )
                  )
                : null}
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Box width="full">
              <Divider />

              <Text mt={2} mb={2} fontWeight="semibold" textColor="green">
                پیشرفت دوره
              </Text>
              <Progress hasStripe value={64} colorScheme="green" />
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
