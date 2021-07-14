
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

