import React from 'react';
import CategoryCarousal from '../../componenets/carousals/CategoryCarousal';
import CourseCarousal from '../../componenets/carousals/CourseCarousal';
import { appName } from '../../constants';

import BaseLayout from '../../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout title={appName}>
      <CategoryCarousal />
      <CourseCarousal />
    </BaseLayout>
  );
}
