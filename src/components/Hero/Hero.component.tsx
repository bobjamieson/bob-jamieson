import styles from './Hero.module.scss'
import Link from 'next/link'
import { isBrowser } from '@/src/utils/isBrowser'
// @ts-ignore
import { Markup } from 'react-render-markup'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import { HeroProps } from '@/src/types'

const Hero: FunctionComponent<HeroProps> = (props) => {
  /**
   * NOTE: It's better to do conditional chaining all the way through if you're not sure the props exist (and even if you are its a good practice)
   * e.g const heroImage = props?.attributes?.image?.data?.attributes?.url
   */
  const heroImage = props?.attributes.image.data.attributes.url

  
  /**
   * NOTE: Using let isn't wrong, but its usually indicating you're not approaching the problem in the correct way.
   * A way to maintain the const is like this:
   * 
   * const heroTitle = isBrowser()
   *   ? document.getElementsByClassName('.H1__Hero')
   *   : undefined
   */
  let heroTitle
  if (isBrowser()) {
    /**
     * NOTE: Don't access the DOM this way (it's not the _react_ way)
     */
    heroTitle = document.getElementsByClassName('.H1__Hero')
  }

  return (
    /**
     * NOTE:
     * As a post-deployment, cleanup task, you might want to adjust your naming convention to match that of (suitcss)[https://suitcss.github.io/]
     * 
     * It's a well documented and opinionated approach to naming classes that's easy to understand.
     */
    <div className={styles.Hero}>
      <div className='Container'>
        <div className={styles.HeroImageContainer}>
          {/* Hero image */}
          <div className={styles.HeroImage}>
            <Image
              src={heroImage}
              alt=''
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
            <h1 className='H1' id='HeroText'>
              {/* 
                * NOTE: Points for being security conscious, but I wouldn't worry about data coming from trusted sources (CMS is trusted since you have full control)
                * Since this adds weight to the final package sent the the user, i would remove it and replace it with dangerouslySetInnerHTML
               */}
              <Markup markup={props?.attributes?.title} />
            </h1>

            {/*
              * NOTE: Place in CMS (as you already will, but i love useless comments)
              * NOTE: 'HeroSubtitle' (imo) should be placed in your Hero Style file as its specific to the hero. Leave typography.scss for generic styles.
              */}
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
