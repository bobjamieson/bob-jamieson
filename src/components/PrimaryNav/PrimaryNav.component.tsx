import styles from './PrimaryNav.module.scss'

import Image from 'next/image'
import logo from 'public/logo.svg'

const PrimaryNav = () => {
  return (
    // Imported to Hero.component
    <>
      <div className={styles.PrimaryNav}>
        <Image src={logo} alt='logo' className={styles.Logo} />
      </div>
    </>
  )
}

export default PrimaryNav
