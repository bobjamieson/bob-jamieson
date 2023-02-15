import styles from './PrimaryNav.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'public/logo.svg'
import RandomColour from '@/src/utils/RandomColour'
import { useState } from 'react'

const PrimaryNav = () => {
  const [burger, setBurger] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  const menuItems = [
    {
      id: 'case-studies',
      text: 'Case Studies',
      href: '/#CaseStudies',
    },
    { id: 'about', text: 'About', href: '/about' },
    { id: 'github', text: 'GitHub', href: 'https://github.com/bobjamieson' },
  ]

  return (
    <>
      <div className={`${styles.PrimaryNavMd} container`}>
        <Link href='/'>
          <Image
            src={logo}
            alt='logo'
            className={styles.Logo}
            priority={true}
          />
        </Link>

        <div className={styles.Nav}>
          <ul className='P__PrimaryNav'>
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
        </div>

        <div className={styles.NavBurger}>
          <div className={styles.BurgerContainer}>
            <img
              className={styles.Hamburger}
              src={
                burger
                  ? '/icons/hamburger-active.svg'
                  : '/icons/hamburger-inactive.svg'
              }
              onClick={() => setBurger(!burger)}
            />
          </div>
        </div>
        {burger && (
          <div className={styles.NavBurger__ItemsContainer}>
            <ul
              className={`${styles.NavBurger__ItemsContainer__Items} P__PrimaryNav`}
            >
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
          </div>
        )}
      </div>
    </>
  )
}

export default PrimaryNav
