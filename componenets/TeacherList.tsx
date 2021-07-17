import React from 'react';

import TeacherCard from './cards/TeacherCard';

const TeacherList = (props: any) => {
  return (
    <>
      {props.allTechears.edges.map((item: any) => (
        <TeacherCard {...item.node} key={item.node.id} />
      ))}
    </>
  );
};

export default TeacherList;
