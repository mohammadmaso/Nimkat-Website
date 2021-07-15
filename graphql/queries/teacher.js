import { gql } from '@apollo/client';

export const GET_TEACHERS = gql`query Query {
  allTechears {
    edges {
      node {
        user {
          firstName
          lastName
          avatar
        }
        shortDescription
        title
        id
        categories {
          edges {
            node {
              title
              id
            }
          }
        }
      }
    }
  }
}`