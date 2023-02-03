import styles from './Hero.module.scss'
import RandomColour from '@/src/utils/RandomColour'
import PrimaryNav from '../PrimaryNav/PrimaryNav.component'

// Image imports
import Image from 'next/image'
import heroImage from 'public/images/hero-image.png'

const Hero = () => {
  return (
    <>
      <div className='container'>
        {/* Primary Nav */}
        <PrimaryNav />
        {/* Hero image */}
        <div className={styles.HeroImage}>
          <Image
            src={heroImage}
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
          <h1 className='h1'>
            React developer.
            <br />
            Designer.
            <br />
            <RandomColour>
              <span>Bob.</span>
            </RandomColour>
          </h1>
          <a href='#' className={styles.HeroText__link}>
            Other things.
          </a>
        </div>
      </div>
    </>
  )
}

export default Hero
