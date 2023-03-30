import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_PAGE_ABOUT } from '@/graphql/queries'

export const getStaticProps = async ({ params }: any) => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  })

  const [pageaboutResult] = await Promise.all([
    client.query({ query: GET_PAGE_ABOUT }),
  ])

  const pageaboutData = pageaboutResult?.data?.pageabout?.data

  return {
    props: {
      pageAbout: pageaboutData,
    },
  }
}
