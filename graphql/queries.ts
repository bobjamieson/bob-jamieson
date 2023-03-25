import { gql } from '@apollo/client'

const GET_ALL_CASESTUDIES = gql`
  query {
    casestudies {
      data {
        id
        attributes {
          slug
          title
          snippet
          body
          techlist
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

const GET_HERO = gql`
  query {
    hero {
      data {
        attributes {
          title
          image {
            data {
              attributes {
                name
                url
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
