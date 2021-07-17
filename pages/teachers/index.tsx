import React from 'react';

import BaseLayout from '../../layouts/BaseLayout';
import TeachersListView from '../../views/TeachersListView';

export default function Teachers() {
  return (
    <BaseLayout title={'نیمکت | اساتید'}>
      <TeachersListView />
    </BaseLayout>
  );
}
