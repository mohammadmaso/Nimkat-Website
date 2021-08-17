import React from 'react';

import CourseCarousal from '../componenets/carousals/CourseCarousal';
import { Spinner } from '@chakra-ui/react';
import { useAllCourseQuery } from '../graphql/generated/types';
import ApiLoading from '../componenets/ApiLoading';
import ApiError from '../componenets/ApiError';

const CourseListView = () => {
  const { loading, error, data } = useAllCourseQuery();
  if (loading) return <ApiLoading />;
  if (error) return <ApiError />;
  return (
    <>
      <CourseCarousal {...data} />
    </>
  );
};

export default CourseListView;
