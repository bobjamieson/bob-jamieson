import Head from 'next/head'
import Hero from '@/src/components/Hero/Hero.component'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bob Jamieson // ABOUT</title>
        <meta name='description' content='Get to know me.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
    </>
  )
}

// ALL PLACEHOLDER //////////////////////
