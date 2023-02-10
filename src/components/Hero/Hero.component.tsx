import styles from './Hero.module.scss'
import Link from 'next/link'
import { isBrowser } from '@/src/utils/isBrowser'
// @ts-ignore
import { Markup } from 'react-render-markup'

const Hero = ({ hero }: any) => {
  let heroTitle
  if (isBrowser()) {
    heroTitle = document.getElementsByClassName('.H1__hero')
  }
  return (
    <div className={styles.Hero}>
      <div className='container'>
        {/* Hero image */}
        <div className={styles.HeroImage}>
          <img
            src={`${hero?.data?.attributes?.image.data.attributes.url}`}
            alt='hero image'
            className={styles.HeroImage__Image}
          />
        </div>
      </div>

      {/* Full width line */}
      <div className={styles.Line} />

      {/* Hero text */}
      <div className='container'>
        <div className={styles.HeroText}>
          <h1 className='H1__hero' id='HeroText'>
            <Markup markup={hero?.data?.attributes?.title} />
          </h1>
          <Link href='/about' className={styles.HeroText__link}>
            Other things.
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
