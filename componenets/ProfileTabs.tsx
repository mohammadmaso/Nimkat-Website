import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ProfileDetailTab from './ProfileDetailTab';

interface Props {}

const ProfileTabs = (props: Props) => {
  return (
    <Tabs isLazy pt={5}>
      <TabList>
        <Tab>دوره‌های من</Tab>
        <Tab>دوره‌های نشان‌شده</Tab>
        <Tab>پروفایل من</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <ProfileDetailTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ProfileTabs;
