import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function CallToAction2() {
  return (
    <Flex
      w={'full'}
      h={'30vh'}
      rounded="md"
      backgroundImage={
        'url(https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)'
      }
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
        <Stack maxW={'full'} align={'flex-start'} spacing={4}>
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
          <Stack direction={'row'}>
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
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
