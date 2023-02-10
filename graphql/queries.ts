import { gql } from '@apollo/client'

const GET_ALL_CASESTUDIES = gql`
  query CaseStudies {
    casestudies {
      data {
        id
        attributes {
          title
          snippet
          body
        }
      }
    }
  }
`

const GET_HERO = gql`
  query Hero {
    hero {
      data {
        attributes {
          title
          image {
            data {
              attributes {
                name
                hash
                caption
                formats
                createdAt
                updatedAt
              }
            }
          }
        }
      }
    }
  }
`

export { GET_ALL_CASESTUDIES, GET_HERO }
