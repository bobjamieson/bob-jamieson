import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_ALL_CASESTUDIES } from '@/graphql/queries'

export const getStaticProps = async ({ params }: any) => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  })

  const [caseStudiesResult] = await Promise.all([
    client.query({ query: GET_ALL_CASESTUDIES }),
  ])

  const caseStudyData = caseStudiesResult?.data.casestudies.data

  //determines index of the individual case study data based on slug
  let currentIndex
  caseStudyData.forEach((caseStudy: any, index: number) => {
    if (caseStudy.attributes.slug === params.slug) {
      currentIndex = index
    }
  })

  return {
    props: {
      caseStudies: caseStudyData,
      currentIndex,
    },
  }
}

export const getStaticPaths = async () => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: GET_ALL_CASESTUDIES,
  })

  const paths = data.casestudies.data.map((caseStudy: any) => ({
    params: {
      slug: caseStudy.attributes.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
