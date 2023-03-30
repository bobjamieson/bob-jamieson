import { ApolloClient, InMemoryCache } from '@apollo/client'
import {
  GET_PAGE_HOME,
  GET_ALL_CASESTUDIES,
  GET_HERO,
  GET_CHATBOX,
} from '@/graphql/queries'

export const getStaticProps = async ({ params }: any) => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  })

  const [pagehomeResult, caseStudiesResult, heroResult, chatBoxResult] =
    await Promise.all([
      client.query({ query: GET_PAGE_HOME }),
      client.query({ query: GET_ALL_CASESTUDIES }),
      client.query({ query: GET_HERO }),
      client.query({ query: GET_CHATBOX }),
    ])

  const pagehomeData = pagehomeResult?.data?.pagehome?.data
  const heroData = heroResult?.data?.hero?.data
  const caseStudyData = caseStudiesResult?.data?.casestudies?.data
  const chatBoxData = chatBoxResult?.data?.chatbox?.data

  return {
    props: {
      pageHome: pagehomeData,
      hero: heroData,
      caseStudies: caseStudyData,
      chatBox: chatBoxData,
    },
  }
}
