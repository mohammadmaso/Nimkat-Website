import React from 'react';

import BaseLayout from '../../../layouts/BaseLayout';
import MyLearnsView from '../../../views/MyLearnsView';

export default function Home() {
  return (
    <BaseLayout title={'دوره‌های من'}>
      <MyLearnsView />
    </BaseLayout>
  );
}
