import styles from './Hero.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import { HeroProps } from './Hero.model'

const Hero: FunctionComponent<HeroProps> = (props) => {
  console.log(props)
  return (
    <>
      <div className='Container'>
        <div className={styles.HeroTop__Container}>
          {/* Hero image */}
          <div className={styles.HeroTop}>
            <Image
              src={props?.attributes?.image?.data[0]?.attributes?.url}
              alt=''
              width='747'
              height='522'
              className={styles.HeroTop__Image}
              priority
            />
          </div>
        </div>
      </div>

      {/* Full width line */}
      <div className={styles.Line} />

      {/* Hero text */}
      <div className='Container'>
        <div className={styles.HeroBottom__Container}>
          <div className={styles.HeroBottom}>
            <h1 className='H1 H1__Hero' id='HeroText'>
              <div
                dangerouslySetInnerHTML={{ __html: props?.attributes?.title }}
              />
            </h1>
            <Link href='/about' className='HeroSubtitle'>
              <p
                dangerouslySetInnerHTML={{
                  __html: props?.attributes?.subtitle,
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
