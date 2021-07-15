import React from 'react';
import TeacherList from '../componenets/TeacherList';
import { appName } from '../constants';

import BaseLayout from '../layouts/BaseLayout';

export default function Teachers() {
  return (
    <BaseLayout title={appName}>
      <TeacherList />
    </BaseLayout>
  );
}
