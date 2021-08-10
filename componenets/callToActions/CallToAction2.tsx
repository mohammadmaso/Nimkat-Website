import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Wrap,
} from '@chakra-ui/react';

export default function CallToAction2() {
  return (
    <Flex
      w={'full'}
      rounded="md"
      backgroundImage={'url(/images/photo-1554415707-6e8cfc93fe23.jpeg)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      marginBottom={5}
    >
      <VStack
        w={'full'}
        justify={'center'}
        align="flex-start"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-l, blackAlpha.900, transparent)'}
        rounded="md"
      >
        <Stack
          align={'flex-start'}
          spacing={4}
          px={useBreakpointValue({ base: 4, md: 8 })}
          py="6"
        >
          <Stack>
            <Text
              color={'white'}
              fontWeight={400}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            >
              وقتشه حرفه‌ای بشی!{' '}
            </Text>
            <Text color={'white'}>دوره‌های استاندارد نیمکت آکادمی</Text>
          </Stack>
          <Wrap>
            <Button colorScheme="primary" rounded={'full'}>
              آخرین دوره‌ها
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
            >
              دوره‌های در دست تالیف
            </Button>
          </Wrap>
        </Stack>
      </VStack>
    </Flex>
  );
}
