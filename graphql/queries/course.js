
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

export const GET_LEARN_COURSE = gql`query Query($secureBougthCourseId: String) {
  secureBougthCourse(id: $secureBougthCourseId) {
    completeLessons {
      edges {
        node {
          id
        }
      }
    }
    course {
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
}

`




export const GET_MY_COURSES = gql`
query Query {
  myBoughtCourses {
    edges {
      node {
        id
        paymentStatus
        course {
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
}
`









