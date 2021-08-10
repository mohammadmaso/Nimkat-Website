import React from 'react';
import { Spinner } from '@chakra-ui/react';
import TeacherList from '../componenets/TeacherList';
import { useAllTeacherQuery } from '../graphql/generated/types';

const TeachersListView = () => {
  const { loading, error, data } = useAllTeacherQuery();
  if (loading) return <Spinner mt={3} color="primary" />;
  if (error) return <p>خطا</p>;
  return <>{data && <TeacherList {...data} />}</>;
};

export default TeachersListView;
