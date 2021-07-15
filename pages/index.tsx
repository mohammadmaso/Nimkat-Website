import React from 'react';
import LandingCallToAction1 from '../componenets/callToActions/LandingCallToAction1';
import CategoryCarousal from '../componenets/carousals/CategoryCarousal';
import CourseCarousal from '../componenets/carousals/CourseCarousal';
import { appName } from '../constants';

import BaseLayout from '../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout title={appName}>
      <LandingCallToAction1 />
      <CategoryCarousal />
      <CourseCarousal />
    </BaseLayout>
  );
}
