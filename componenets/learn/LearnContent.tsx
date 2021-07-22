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
import { FiBook, FiMap, FiVideo } from 'react-icons/fi';
import { BiChart } from 'react-icons/bi';
interface Props {}

const LearnContent = (props: any) => {
  return (
    <>
      <Flex
        flex={{ base: 'flex', md: 'flex' }}
        flexDirection={{ base: 'column', md: 'row' }}
        display={{ base: 'flex', md: 'flex' }}
        // bgColor={useColorModeValue('gray.100', 'gray.700')}
        borderRadius="md"
        mt="2"
      >
        <Tabs width="full" align="center" pt={5}>
          <TabList>
            <Tab>
              <FiVideo />
              <Text mr="1">ویدیو</Text>
            </Tab>
            <Tab>
              <FiBook />
              <Text mr="1">درسنامه</Text>
            </Tab>
            <Tab>
              <FiMap />
              <Text mr="1">نقشه ذهنی</Text>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <AspectRatio maxW="full" ratio={16 / 9}>
                <iframe title={props.title} src={props.video} allowFullScreen />
              </AspectRatio>
            </TabPanel>
            <TabPanel>
              <p>{props.shortDescription}</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export default LearnContent;
