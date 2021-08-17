import React from 'react';
import LearnPage from '../componenets/learn/LearnPage';

import { Spinner } from '@chakra-ui/react';
import MyLearns from '../componenets/learn/MyLearns';
import EmptyResult from '../componenets/EmptyResult';
import { useMyBoughtCoursesQuery } from '../graphql/generated/types';
import ApiLoading from '../componenets/ApiLoading';
import ApiError from '../componenets/ApiError';

interface Props {}

const MyLearnsView = (props: Props) => {
  const { loading, error, data } = useMyBoughtCoursesQuery();
  if (loading) return <ApiLoading />;
  if (error) return <ApiError />;

  if (data.myBoughtCourses?.edges?.length == 0) return <EmptyResult />;
  return (
    <div>
      <MyLearns {...data} />
    </div>
  );
};

export default MyLearnsView;
