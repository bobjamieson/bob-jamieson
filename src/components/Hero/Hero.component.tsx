import styles from './Hero.module.scss'
import RandomColour from '@/src/utils/RandomColour'
import PrimaryNav from '../PrimaryNav/PrimaryNav.component'
import Link from 'next/link'

// Image imports
import Image from 'next/image'
import heroImage from 'public/images/hero-image.png'

const Hero = () => {
  return (
    <div className={styles.Hero}>
      {/* Primary Nav */}
      <PrimaryNav />
      <div className='container'>
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
          <Link href='/about' className={styles.HeroText__link}>
            Other things.
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
