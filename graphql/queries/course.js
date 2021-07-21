
import { gql } from '@apollo/client';


export const GET_CATEGORIES = gql`query Query {
  allCourseCategories {
    edges {
      node {
        id
        title
        shortDescription
        image
        
      }
    }
  }
}
`

export const GET_COURSES = gql`query Query {
  allCourses {
    edges {
      node {
        id
        title
        createdAt
        shortDescription
        category {
          title
        }
        image
        language
        price
        discountPrice
        slug
        teacher {
          name
        }
      }
    }
  }
}
`

export const GET_LEARN_COURSE = gql`query Query($courseId: String!) {
  secureCourse(id: $courseId) {
    teacher {
      name
    }
    title
    category {
      title
    }
    video
    sections {
      edges {
        node {
          id
          title
          shortDescription
          video
          slug
          lessons {
            edges {
              node {
                title
                id
                video
                shortDescription
              }
            }
          }
        }
      }
    }
  }
}
`



export const GET_MY_COURSES = gql`
query Query {
  myCourses {
    edges {
      node {
        id
        teacher {
          name
        }
        title
        category {
          title
        }
        image
        language
      }
    }
  }
}
`



