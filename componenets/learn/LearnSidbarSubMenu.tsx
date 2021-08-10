import {
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Divider,
  Link as ChakraLink,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useRouter } from 'next/router';

export const LearnSidbarSubMenu = (props: any) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  const router = useRouter();
  return (
    <Stack spacing={1} width="full">
      <Flex
        py={1}
        as={ChakraLink}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
        onClick={props.lessons && onToggle}
      >
        <Text
          pr={3}
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {props.title}
        </Text>
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
              <ChakraLink key={item.node.id}>
                <Link
                  passHref
                  href={{
                    pathname: '/me/learn/[id]',
                    query: { lesson: item.node.id, id: router.query.id },
                  }}
                >
                  <Flex align="center">
                    {props.completeLessonData
                      .map((a) => a.node.id)
                      .includes(item.node.id) ? (
                      <FiEye color="green" />
                    ) : (
                      <FiEyeOff />
                    )}

                    <Text mr="2">{item.node.title}</Text>
                  </Flex>
                </Link>
              </ChakraLink>
            ))}
        </Stack>
      </Collapse>
      <Divider />
    </Stack>
  );
};
