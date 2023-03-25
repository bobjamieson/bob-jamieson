import styles from './Button.module.scss'
import { ButtonProps } from '@/src/types'
import Link from 'next/link'
import { FunctionComponent } from 'react'

const Button: FunctionComponent<ButtonProps> = ({
  children,
  link,
  variant,
}) => {
  return (
    <Link
      href={link.href}
      as={link.as}
      className={
        variant === 'card'
          ? styles.Card
          : variant === 'sidebar'
          ? styles.SideBar
          : ''
      }
    >
      {children}
    </Link>
  )
}

export default Button
