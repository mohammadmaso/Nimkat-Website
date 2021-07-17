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
        name
        enName
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

export const GET_TEACHER_BY_ID = gql`query Query($teacherId: ID!) {
  teacher(id: $teacherId) {
    user {
      firstName
      lastName
      avatar
      email
    }
    shortDescription
    title
    name
    videoId
    coursemodelSet {
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
    categories {
      edges {
        node {
          title
          id
        }
      }
    }
    enName
  }
}`