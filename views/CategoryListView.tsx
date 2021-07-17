import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../graphql/queries/course';

import React from 'react';
import { Spinner } from '@chakra-ui/react';
import CategoryCarousal from '../componenets/carousals/CategoryCarousal';

const CategoryListView = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  if (loading) return <Spinner mt={3} color="primary" />;

  return <CategoryCarousal {...data} />;
};

export default CategoryListView;
