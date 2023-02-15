import 'src/styles/globals.scss'
import type { AppProps } from 'next/app'
import PrimaryNav from '@/src/components/PrimaryNav/PrimaryNav.component'
import Footer from '@/src/components/Footer/Footer.component'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PrimaryNav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
