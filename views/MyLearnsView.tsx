import React from 'react';
import LearnPage from '../componenets/learn/LearnPage';

import { useQuery } from '@apollo/client';

import { GET_MY_COURSES } from '../graphql/queries/course';
import { Spinner } from '@chakra-ui/react';
import MyLearns from '../componenets/learn/MyLearns';
import EmptyResult from '../componenets/EmptyResult';

interface Props {}

const MyLearnsView = (props: Props) => {
  const { loading, error, data } = useQuery(GET_MY_COURSES);

  if (loading) return <Spinner mt={3} color="primary" />;
  if (data.myCourses.edges.length == 0) return <EmptyResult />;
  return (
    <div>
      <MyLearns {...data} />
    </div>
  );
};

export default MyLearnsView;
