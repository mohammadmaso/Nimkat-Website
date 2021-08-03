import React from 'react';

import CourseCarousal from '../componenets/carousals/CourseCarousal';
import { Spinner } from '@chakra-ui/react';
import { useAllCourseQuery } from '../graphql/generated/types';

const CourseListView = () => {
  const { loading, error, data } = useAllCourseQuery();
  if (loading) return <Spinner mt={3} color="primary" />;
  return (
    <>
      <CourseCarousal {...data} />
    </>
  );
};

export default CourseListView;
