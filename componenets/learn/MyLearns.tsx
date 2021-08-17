import { Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import LearnCard from '../cards/LearnCard';

interface Props {}

const MyLearns = (props: any) => {
  return (
    <div>
      <div>
        <Heading colorScheme="primary" size="lg" fontWeight="400" pb="10">
          دوره‌های من
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing={8}>
          {props.myBoughtCourses.edges.map((item: any) => (
            <LearnCard key={item.node.id} {...item.node} />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default MyLearns;
