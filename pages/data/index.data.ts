import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_ALL_CASESTUDIES, GET_HERO } from '@/graphql/queries'

export const getStaticProps = async ({ params }: any) => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  })

  const [caseStudiesResult, heroResult] = await Promise.all([
    client.query({ query: GET_ALL_CASESTUDIES }),
    client.query({ query: GET_HERO }),
  ])

  const heroData = heroResult?.data.hero.data
  const caseStudyData = caseStudiesResult?.data.casestudies.data

  return {
    props: {
      hero: heroData,
      caseStudies: caseStudyData,
    },
  }
}
