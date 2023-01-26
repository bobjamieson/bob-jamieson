import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import RandomColour from '@/utils/RandomColour'
import Hero from '@/components/Hero/Hero.component'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bob Jamieson</title>
        <meta name="description" content="A React dev's portfolio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
    </>
  )
}
