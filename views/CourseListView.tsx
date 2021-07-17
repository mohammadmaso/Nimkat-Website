import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_COURSES } from '../graphql/queries/course';
import CourseCarousal from '../componenets/carousals/CourseCarousal';
import { Spinner } from '@chakra-ui/react';

const CourseListView = () => {
  const { loading, error, data } = useQuery(GET_COURSES);
  if (loading) return <Spinner mt={3} color="primary" />;
  return (
    <>
      <CourseCarousal {...data} />
    </>
  );
};

export default CourseListView;
