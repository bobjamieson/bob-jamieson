import { gql } from '@apollo/client'

const GET_PAGE_HOME = gql`
  query {
    pagehome {
      data {
        attributes {
          title
          description
        }
      }
    }
  }
`

const GET_PAGE_ABOUT = gql`
  query {
    pageabout {
      data {
        attributes {
          metatitle
          metadescription
          subtitle
          title
          body
          skillstitle
          skills {
            skill
          }
        }
      }
    }
  }
`

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
          link
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
          subtitle
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

const GET_CHATBOX = gql`
  query {
    chatbox {
      data {
        attributes {
          subtitle
          title
          paragraph
          inputplaceholder
        }
      }
    }
  }
`

export {
  GET_PAGE_HOME,
  GET_PAGE_ABOUT,
  GET_ALL_CASESTUDIES,
  GET_HERO,
  GET_CHATBOX,
}
