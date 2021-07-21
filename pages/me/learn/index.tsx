import React from 'react';
import { appName } from '../../../constants';

import BaseLayout from '../../../layouts/BaseLayout';
import MyLearnsView from '../../../views/MyLearnsView';

export default function Home() {
  return (
    <BaseLayout title={appName}>
      <MyLearnsView />
    </BaseLayout>
  );
}
