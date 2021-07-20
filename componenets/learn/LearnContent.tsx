import React from 'react';
import {
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Link as ChakraLink,
  useColorModeValue,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  AspectRatio,
} from '@chakra-ui/react';
interface Props {}

const LearnContent = (props: any) => {
  return (
    <div>
      <Flex
        flex={{ base: 'flex', md: 'flex' }}
        flexDirection={{ base: 'column', md: 'row' }}
        display={{ base: 'flex', md: 'flex' }}
        // bgColor={useColorModeValue('gray.100', 'gray.700')}
        borderRadius="md"
        mt="2"
      >
        <Tabs width="full" align="center" isLazy pt={5}>
          <TabList>
            <Tab>ویدیو</Tab>
            <Tab>درسنامه</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <AspectRatio maxW="full" ratio={16 / 9}>
                <iframe title="naruto" src={props.video} allowFullScreen />
              </AspectRatio>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </div>
  );
};

export default LearnContent;
