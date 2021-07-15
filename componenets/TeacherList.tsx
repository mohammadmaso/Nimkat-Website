import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_TEACHERS } from '../graphql/queries/teacher';
import TeacherCard from './cards/TeacherCard';

interface Teacher {
  node: {
    user: {
      firstName: string;
      lastName: string;
      avatar: string;
    };
    shortDescription: string;
    title: string;
    id: string;
    categories: {
      edges: {
        node: {
          title: string;
          id: string;
        };
      };
    };
  };
}

const TeacherList = () => {
  const { loading, error, data } = useQuery(GET_TEACHERS);

  return (
    <>
      {data &&
        data.allTechears.edges.map((item: any) => (
          <TeacherCard {...item.node} key={item.node.id} />
        ))}
    </>
  );
};

export default TeacherList;
