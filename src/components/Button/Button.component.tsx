import styles from './Button.module.scss'
import { ButtonProps } from './Button.model'
import Link from 'next/link'

const Button: React.FC<ButtonProps> = ({ children, link, variant }) => {
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
