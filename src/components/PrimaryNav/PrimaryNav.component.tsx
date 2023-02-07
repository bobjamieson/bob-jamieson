import styles from './PrimaryNav.module.scss'
import Link from 'next/link'

import Image from 'next/image'
import logo from 'public/logo.svg'

const PrimaryNav = () => {
  return (
    // Imported to Hero.component

    <div className={styles.PrimaryNav}>
      <div className='container'>
        <Link href='/'>
          <Image src={logo} alt='logo' className={styles.Logo} />
        </Link>
      </div>
    </div>
  )
}

export default PrimaryNav
