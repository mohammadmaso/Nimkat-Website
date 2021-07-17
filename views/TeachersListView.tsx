import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_TEACHERS } from '../graphql/queries/teacher';

import { Spinner } from '@chakra-ui/react';
import TeacherList from '../componenets/TeacherList';

const TeachersListView = () => {
  const { loading, error, data } = useQuery(GET_TEACHERS);
  if (loading) return <Spinner mt={3} color="primary" />;
  return <>{data && <TeacherList {...data} />}</>;
};

export default TeachersListView;
