import Hero from '@/src/components/Hero/Hero.component'
import CaseStudies from '@/src/components/CaseStudies/CaseStudies.component'
import ChatBox from '@/src/components/ChatBox/ChatBox.component'
import React from 'react'
import { HomeProps } from '../src/types/index.model'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import {
  GET_PAGE_HOME,
  GET_ALL_CASESTUDIES,
  GET_HERO,
  GET_CHATBOX,
} from '@/graphql/queries'

const Home: NextPage<HomeProps> = (props) => {
  return (
    <>
      <NextSeo
        title={props.pageHome?.attributes?.title}
        description={props.pageHome?.attributes?.description}
      />
      <main>
        {props.hero && <Hero {...props.hero} />}
        {props.caseStudies && (
          <CaseStudies
            caseStudies={props.caseStudies}
            currentIndex={props.caseStudies[0].currentIndex}
          />
        )}

        <ChatBox {...props.chatBox} />
      </main>
    </>
  )
}

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

export default Home
