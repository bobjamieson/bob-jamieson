import Head from 'next/head'
import Hero from '@/src/components/Hero/Hero.component'
import CaseStudies from '@/src/components/CaseStudies/CaseStudies.component'
import ChatBox from '@/src/components/ChatBox/ChatBox.component'
import React from 'react'
import { getStaticProps } from './data/index.data'
export { getStaticProps }
import { HomeProps } from 'src/types'
import { NextPage } from 'next'

const Home: NextPage<HomeProps> = (props) => {
  return (
    <main>
      <Head>
        <title>Bob Jamieson</title>
        <meta name='description' content="A React dev's portfolio." />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero {...props.hero} />
      <CaseStudies caseStudies={props.caseStudies as any} />
      <ChatBox />
    </main>
  )
}

export default Home
