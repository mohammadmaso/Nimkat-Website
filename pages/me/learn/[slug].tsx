import React from 'react';
import { appName } from '../../../constants';

import BaseLayout from '../../../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout title={appName}>
      <p>سلم</p>
    </BaseLayout>
  );
}
