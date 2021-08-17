import React from 'react';
import { Spinner } from '@chakra-ui/react';
import CategoryCarousal from '../componenets/carousals/CategoryCarousal';
import { useAllCategoriesQuery } from '../graphql/generated/types';
import ApiLoading from '../componenets/ApiLoading';
import ApiError from '../componenets/ApiError';

const CategoryListView = () => {
  const { loading, error, data } = useAllCategoriesQuery();
  if (loading) return <ApiLoading />;
  if (error) return <ApiError />;
  return <CategoryCarousal {...data} />;
};

export default CategoryListView;
