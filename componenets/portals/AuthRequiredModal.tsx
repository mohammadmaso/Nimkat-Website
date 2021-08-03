import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function AuthRequiredModal() {
  const { isOpen, onOpen, onClose } = useDisclosure({ isOpen: true });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>مجوز دسترسی</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            برای دسترسی به این امکان نیاز دارید تا کابر سایت باشید. وارد شوید یا
            ثبت‌نام کنید.
          </ModalBody>

          <ModalFooter>
            <Button as={'a'} fontSize={'sm'} fontWeight={500}>
              <Link href="/auth/signin">ورود</Link>
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              colorScheme="primary"
              rounded="3xl"
              size="sm"
            >
              <Link href="/auth/signup">ثبت‌‌نام</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
