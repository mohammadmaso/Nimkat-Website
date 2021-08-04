import React from 'react';
import CallToAction2 from '../componenets/callToActions/CallToAction2';
import LandingCallToAction1 from '../componenets/callToActions/LandingCallToAction1';

import BaseLayout from '../layouts/BaseLayout';
import CategoryListView from '../views/CategoryListView';
import CourseListView from '../views/CourseListView';

export default function Home() {
  return (
    <BaseLayout title={'نیمکت آکادمی'}>
      <LandingCallToAction1 />
      <CategoryListView />
      <CallToAction2 />
      <CourseListView />
    </BaseLayout>
  );
}
