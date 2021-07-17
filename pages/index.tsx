import React from 'react';
import LandingCallToAction1 from '../componenets/callToActions/LandingCallToAction1';

import BaseLayout from '../layouts/BaseLayout';
import CategoryListView from '../views/CategoryListView';
import CourseListView from '../views/CourseListView';

export default function Home() {
  return (
    <BaseLayout title={'نیمکت آکادمی'}>
      <LandingCallToAction1 />
      <CategoryListView />
      <CourseListView />
    </BaseLayout>
  );
}
