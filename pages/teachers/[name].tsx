import React from 'react';

import BaseLayout from '../../layouts/BaseLayout';
import { useRouter } from 'next/router';
import TheacherDetailView from '../../views/TheacherDetailView';

export default function Teachers() {
  const router = useRouter();

  return (
    <BaseLayout title={'نیمکت | اساتید'}>
      <TheacherDetailView id={router.query.id} />
    </BaseLayout>
  );
}
