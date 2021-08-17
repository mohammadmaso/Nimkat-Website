/* eslint-disable @next/next/link-passhref */
import { useQuery } from '@apollo/client';
import { Spinner } from '@chakra-ui/react';
import React from 'react';
import TeacherDetail from '../componenets/TeacherDetail';
import { useTeacherDetailQuery } from '../graphql/generated/types';
import { GET_TEACHER_BY_ID } from '../graphql/queries/teacher';
import ApiLoading from '../componenets/ApiLoading';
import ApiError from '../componenets/ApiError';

interface Props {
  id: any;
}

const TheacherDetailView = (props: Props) => {
  const { loading, error, data } = useTeacherDetailQuery({
    variables: { teacherId: props.id },
  });

  if (loading) return <ApiLoading />;
  if (error) return <ApiError />;
  return (
    <>
      <TeacherDetail {...data} />
    </>
  );
};

export default TheacherDetailView;
