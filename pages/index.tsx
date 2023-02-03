import Head from 'next/head'
import Hero from '@/src/components/Hero/Hero.component'
import CaseStudies from '@/src/components/CaseStudies/CaseStudies.component'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bob Jamieson</title>
        <meta name='description' content="A React dev's portfolio." />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <CaseStudies />
    </>
  )
}
