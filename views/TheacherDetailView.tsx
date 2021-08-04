/* eslint-disable @next/next/link-passhref */
import { useQuery } from '@apollo/client';
import { Spinner } from '@chakra-ui/react';
import React from 'react';
import TeacherDetail from '../componenets/TeacherDetail';
import { useTeacherDetailQuery } from '../graphql/generated/types';
import { GET_TEACHER_BY_ID } from '../graphql/queries/teacher';

interface Props {
  id: any;
}

const TheacherDetailView = (props: Props) => {
  const { loading, error, data } = useTeacherDetailQuery({
    variables: { teacherId: props.id },
  });
  if (loading) return <Spinner mt={3} color="primary" />;
  return (
    <>
      <TeacherDetail {...data} />
    </>
  );
};

export default TheacherDetailView;
