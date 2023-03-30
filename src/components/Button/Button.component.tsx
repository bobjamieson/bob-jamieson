import styles from './Button.module.scss'
import { ButtonProps } from './Button.model'
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
          : variant === 'caseLink'
          ? styles.CaseLink
          : ''
      }
    >
      {children}
    </Link>
  )
}

export default Button
