import styles from './Footer.module.scss'
import Image from 'next/image'
import logo from '@/public/logo.svg'

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.Footer}>
        <div className={`${styles.Footer__Content} Container`}>
          <Image
            src={logo}
            alt='logo'
            className={styles.Footer__Content__Logo}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
