import React, { useState } from 'react';
import LearnPage from '../componenets/learn/LearnPage';

import { Spinner } from '@chakra-ui/react';
import { useSecureBougthCourseQuery } from '../graphql/generated/types';

interface Props {
  id: any;
  lesson: any;
}

const LearnView = (props: Props) => {
  const [percent, setPercent] = useState(0);
  const { loading, error, data } = useSecureBougthCourseQuery({
    variables: { secureBougthCourseId: props.id },
    onCompleted: (data) => {
      setPercent(
        calculateComplitnessPercent(
          data.secureBougthCourse.course,
          data.secureBougthCourse.completeLessons
        )
      );
      console.log(percent);
    },
  });

  const calculateComplitnessPercent = (course: any, completeLessons: any) => {
    let lessonsCount = 0;
    course.sections.edges.forEach((element) => {
      element.node.lessons.edges.forEach(() => {
        lessonsCount++;
      });
    });
    let CompleteLessonsCount = completeLessons.edges.length;
    console.log(CompleteLessonsCount, lessonsCount);
    return (CompleteLessonsCount / lessonsCount) * 100;
  };

  if (loading) return <Spinner mt={3} color="primary" />;
  if (error) return <p>خطا</p>;
  return (
    <div>
      <LearnPage
        courseData={data}
        lessonData={
          props.lesson
            ? data.secureBougthCourse.course.sections.edges
                .map((a: any) =>
                  a.node.lessons.edges.filter(
                    (e: any) => e.node.id == props.lesson
                  )
                )
                .filter((e: any) => e.length != 0)[0][0]
            : null
        }
        loading={loading}
        error={error}
        completeLessonData={data.secureBougthCourse.completeLessons.edges}
        complitnessPercent={percent}
      />
    </div>
  );
};

export default LearnView;
