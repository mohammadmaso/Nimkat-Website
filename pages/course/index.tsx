import React from 'react';

import BaseLayout from '../../layouts/BaseLayout';
import CategoryListView from '../../views/CategoryListView';
import CourseListView from '../../views/CourseListView';

export default function Home() {
  return (
    <BaseLayout title={'نیمکت | دوره‌ها'}>
      <CategoryListView />
      <CourseListView />
    </BaseLayout>
  );
}
