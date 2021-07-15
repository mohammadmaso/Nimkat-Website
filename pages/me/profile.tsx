import React from 'react';
import ProfileHeader from '../../componenets/ProfileHeader';
import ProfileTabs from '../../componenets/ProfileTabs';
import { appName } from '../../constants';

import BaseLayout from '../../layouts/BaseLayout';

export default function Profile() {
  return (
    <BaseLayout title={appName}>
      <ProfileHeader />
      <ProfileTabs />
    </BaseLayout>
  );
}
