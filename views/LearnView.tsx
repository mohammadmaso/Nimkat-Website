import React from 'react';
import LearnPage from '../componenets/learn/LearnPage';

import { useQuery } from '@apollo/client';

import { GET_LEARN_COURSE } from '../graphql/queries/course';
import { Spinner } from '@chakra-ui/react';

interface Props {
  id: string | string[] | undefined;
}

const LearnView = (props: Props) => {
  const {
    loading: sidebarLoading,
    error: sideBarError,
    data: sideBarData,
  } = useQuery(GET_LEARN_COURSE, {
    variables: { courseId: props.id },
  });
  if (sidebarLoading) return <Spinner mt={3} color="primary" />;
  if (sideBarError) return <p>خطا</p>;
  if (!sideBarData) return <p>یافت نشد</p>;
  return (
    <div>
      <LearnPage
        // contentData={null}
        sidebarData={sideBarData}
        sideBarLoading={sidebarLoading}
        sideBarError={sideBarError}
      />
    </div>
  );
};

export default LearnView;
