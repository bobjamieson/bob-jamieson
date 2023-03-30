import styles from './Footer.module.scss'
import Image from 'next/image'
import logo from '@/public/logo.svg'

const Footer = () => {
  return (
    <footer className={styles.FooterContainer}>
      <div className={styles.Footer}>
        <div className={styles.Footer__Content}>
          <Image
            src={logo}
            alt='logo'
            className={styles.Footer__Content__Logo}
          />
          <div className={styles.Footer__Content__Contact} id='Contact'>
            <p className='H2'>Get in touch</p>
            <a
              className={`${styles.Footer__Content__Contact__Email} P`}
              href='mailto:ahoy@bob.contact'
            >
              ahoy@bob.contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
