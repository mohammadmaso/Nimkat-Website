
import { gql } from '@apollo/client';


export const ME = gql`query Query {
  me {
    firstName
    lastName
    email
    avatar
    verified
  }
}`

export const ME_DETAIL = gql`
    query Query {
  me {
    firstName
    lastName
    email
    avatar
    verified
    lastLogin
    username
    dateJoined
    profilemodel {
      about
    }
  }
}
`

export const MY_COURSES = gql`
query Query {
  me {
    verified
    boughtcoursesmodelSet {
      edges {
        node {
          refId
          paymentStatus
          createdAt
          course {
            id
            slug
            title
            shortDescription
            image
            category {
              title
            }
            price
            language
          }
        }
      }
    }
  }
}`
