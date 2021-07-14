
import { gql } from '@apollo/client';


export const ME = gql`query Query {
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