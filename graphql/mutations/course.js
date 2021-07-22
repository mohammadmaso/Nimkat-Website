
export const COMPLETE_LESSON = gql`
  mutation Mutation($completeLessonCourseId: String!, $completeLessonLessonId: String!) {
  completeLesson(courseId: $completeLessonCourseId, lessonId: $completeLessonLessonId) {
    success
    complete
  }
}

`;