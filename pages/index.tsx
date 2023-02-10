import Head from 'next/head'
import Hero from '@/src/components/Hero/Hero.component'
import CaseStudies from '@/src/components/CaseStudies/CaseStudies.component'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_ALL_CASESTUDIES, GET_HERO } from '@/graphql/queries'

export default function Home({ caseStudies, hero }: any) {
  return (
    <>
      <Head>
        <title>Bob Jamieson</title>
        <meta name='description' content="A React dev's portfolio." />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero hero={hero} />
      <CaseStudies casesStudies={caseStudies} />
    </>
  )
}

// export async function getStaticProps() {
//   const heroRes = await axios.get('http://localhost:1337/api/hero?populate=*')
//   const caseStudiesRes = await axios.get(
//     'http://localhost:1337/api/casestudies?populate=*'
//   )

//   return {
//     props: {
//       heroData: heroRes.data,
//       caseStudiesData: caseStudiesRes.data,
//     },
//   }
// }
// -----------------------------
export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  })

  const [casestudies, hero] = await Promise.all([
    client.query({ query: GET_ALL_CASESTUDIES }),
    client.query({ query: GET_HERO }),
  ])

  return {
    props: {
      caseStudies: casestudies.data.casestudies.data,
      hero: hero.data.hero.data,
    },
  }
}
