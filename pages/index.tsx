import Hero from '@/src/components/Hero/Hero.component'
import CaseStudies from '@/src/components/CaseStudies/CaseStudies.component'
import ChatBox from '@/src/components/ChatBox/ChatBox.component'
import React from 'react'
import { getStaticProps } from './data/index.data'
import { HomeProps } from './index.model'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

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

export { getStaticProps }
export default Home
