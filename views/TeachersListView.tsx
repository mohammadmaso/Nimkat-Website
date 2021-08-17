import React from 'react';
import { Spinner } from '@chakra-ui/react';
import TeacherList from '../componenets/TeacherList';
import { useAllTeacherQuery } from '../graphql/generated/types';
import ApiLoading from '../componenets/ApiLoading';
import ApiError from '../componenets/ApiError';

const TeachersListView = () => {
  const { loading, error, data } = useAllTeacherQuery();

  if (loading) return <ApiLoading />;
  if (error) return <ApiError />;
  return <>{data && <TeacherList {...data} />}</>;
};

export default TeachersListView;
