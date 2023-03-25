import styles from './Hero.module.scss'
import Link from 'next/link'
import { isBrowser } from '@/src/utils/isBrowser'
// @ts-ignore
import { Markup } from 'react-render-markup'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import { HeroProps } from '@/src/types'

const Hero: FunctionComponent<HeroProps> = (props) => {
  const heroImage = props?.attributes.image.data.attributes.url
  let heroTitle
  if (isBrowser()) {
    heroTitle = document.getElementsByClassName('.H1__Hero')
  }
  return (
    <div className={styles.Hero}>
      <div className='Container'>
        <div className={styles.HeroImageContainer}>
          {/* Hero image */}
          <div className={styles.HeroImage}>
            <Image
              src={heroImage}
              alt='hero image'
              width='550'
              height='384'
              className={styles.HeroImage__Image}
            />
          </div>
        </div>
      </div>

      {/* Full width line */}
      <div className={styles.Line} />

      {/* Hero text */}
      <div className='Container'>
        <div className={styles.HeroTextContainer}>
          <div className={styles.HeroText}>
            <h1 className='H1 H1__Hero' id='HeroText'>
              <Markup markup={props?.attributes?.title} />
            </h1>
            <Link href='/about' className='HeroSubtitle'>
              Other things.
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
