import Head from 'next/head'
import Hero from '@/src/components/Hero/Hero.component'
import CaseStudies from '@/src/components/CaseStudies/CaseStudies.component'
import ChatBox from '@/src/components/ChatBox/ChatBox.component'
import React from 'react'
import { getStaticProps } from './data/index.data'
/**
 * NOTE: Having your export here can get a little bit confusing, because the top of the file for JS modules is used for imports
 * Generally the bottom of the file is for exports to make it clear
 */
export { getStaticProps }
import { HomeProps } from 'src/types'
import { NextPage } from 'next'

/**
 * NOTE:
 * a general best practice is that you want your types to be co-located with where they're used
 */
const Home: NextPage<HomeProps> = (props) => {
  return (
    <main>
      <Head>
        {/* 
          * NOTE:
          * You _can_ hardcode these values, but it'd be more impressive to see these values come from the CMS as a SEO object
          */}
        <title>Bob Jamieson</title>
        <meta name='description' content="A React dev's portfolio." />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* 
        * NOTE:
        * You want to write guards so that your application doesn't crash if the variables aren't defined, such as below:
        * 
        * {props.hero && (
        *  <Hero {...props.hero} />
        * )}
        */}
      <Hero {...props.hero} />

      <CaseStudies {...props.caseStudies} />
      <ChatBox />
    </main>
  )
}

export default Home
