import {
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Link as ChakraLink,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export const LearnSidbarSubMenu = (props: any) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  return (
    <Stack spacing={4} onClick={props.lessons && onToggle}>
      <Flex
        py={2}
        as={ChakraLink}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Link href={'#'}>
          <Text
            pr={3}
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            {props.title}
          </Text>
        </Link>
        {props.lessons && (
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
        <Stack>
          {props.lessons &&
            props.lessons.edges.map((item: any) => (
              <ChakraLink key={item.node.id} py={2}>
                <Flex align="center">
                  <FiEyeOff />
                  <Text mr="2">{item.node.title}</Text>
                </Flex>
              </ChakraLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
