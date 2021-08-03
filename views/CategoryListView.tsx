import React from 'react';
import { Spinner } from '@chakra-ui/react';
import CategoryCarousal from '../componenets/carousals/CategoryCarousal';
import { useAllCategoriesQuery } from '../graphql/generated/types';

const CategoryListView = () => {
  const { loading, error, data } = useAllCategoriesQuery();
  if (loading) return <Spinner mt={3} color="primary" />;

  return <CategoryCarousal {...data} />;
};

export default CategoryListView;
