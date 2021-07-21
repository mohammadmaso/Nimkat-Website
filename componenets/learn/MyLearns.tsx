import { Heading } from '@chakra-ui/react';
import React from 'react';
import LearnCard from '../cards/LearnCard';

interface Props {}

const MyLearns = (props: any) => {
  return (
    <div>
      <div>
        <Heading colorScheme="primary" size="lg" fontWeight="400">
          دوره‌های من
        </Heading>
        {props.myCourses.edges.map((item: any) => (
          <LearnCard key={item.node.id} {...item.node} />
        ))}
      </div>
    </div>
  );
};

export default MyLearns;
