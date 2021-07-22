import { useRouter } from 'next/router';
import React from 'react';

import BaseLayout from '../../../layouts/BaseLayout';
import LearnView from '../../../views/LearnView';

export default function Learn() {
  const router = useRouter();
  return (
    <BaseLayout title="آکادمی نیمکت">
      <LearnView id={router.query.id} lesson={router.query.lesson} />
    </BaseLayout>
  );
}
