import styles from './PrimaryNav.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'public/logo.svg'
import RandomColour from '@/src/utils/RandomColour'
import { useState } from 'react'
import TopBar from '../TopBar/TopBar.component'
import { isBrowser } from '@/src/utils/isBrowser'

const PrimaryNav = () => {
  // Menu Burger State
  const [burger, setBurger] = useState(false)

  // Hovered Menu Item
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  /* 
  When mouse hovers on menu item, the state is set to string of of the items ID.
  If the ID of the hovered item matches the mapped item, it returns the string wrapped in the RandomColour util.
  */
  const handleMouseEnter = (itemId: string): void => {
    setHoveredItem(itemId)
  }

  const handleMouseLeave = (): void => {
    setHoveredItem(null)
  }

  if (isBrowser()) {
    window.addEventListener('scroll', () =>
      burger ? setBurger(!burger) : null
    )
  }

  // Stores menu items
  const menuItems = [
    {
      id: 'case-studies',
      text: 'Case Studies',
      href: '/#CaseStudies',
    },
    { id: 'about', text: 'About', href: '/about' },
    { id: 'github', text: 'GitHub', href: 'https://github.com/bobjamieson' },
    { id: 'contact', text: 'Contact', href: '#Contact' },
  ]

  return (
    <>
      <div className={styles.NavSpacer} />
      <div className={styles.PrimaryNavContainer}>
        <TopBar />
        <div className={`${styles.PrimaryNav} Container`}>
          <Link href='/'>
            <Image src={logo} alt='logo' className={styles.Logo} priority />
          </Link>

          <nav className={styles.Nav}>
            <ul className='P__Nav'>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    <span
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {hoveredItem === item.id ? (
                        <RandomColour>{item.text}</RandomColour>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.NavBurger}>
            <div className={styles.BurgerContainer}>
              <Image
                className={styles.Burger}
                src={
                  burger
                    ? '/icons/hamburger-active.svg'
                    : '/icons/hamburger-inactive.svg'
                }
                onClick={() => setBurger(!burger)}
                alt='burger'
                width='100'
                height='100'
              />
            </div>
          </div>
          {burger && (
            <nav className={styles.NavBurger__ItemsContainer}>
              <ul
                className={`${styles.NavBurger__ItemsContainer__Items} P__Nav`}
              >
                {menuItems.map((item) => (
                  <li key={item.id} onClick={() => setBurger(!burger)}>
                    <Link href={item.href}>
                      <span
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {hoveredItem === item.id ? (
                          <RandomColour>{item.text}</RandomColour>
                        ) : (
                          <span>{item.text}</span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </>
  )
}

export default PrimaryNav
