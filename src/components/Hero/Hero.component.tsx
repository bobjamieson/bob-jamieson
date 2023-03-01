import styles from './Hero.module.scss'
import Link from 'next/link'
import { isBrowser } from '@/src/utils/isBrowser'
// @ts-ignore
import { Markup } from 'react-render-markup'

const Hero = ({ hero }: any) => {
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
            <img
              src={`${hero?.attributes.image.data.attributes.url}`}
              alt='hero image'
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
              <Markup markup={hero?.attributes?.title} />
            </h1>
            <Link href='/about' className={styles.HeroText__Link}>
              Other things.
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
