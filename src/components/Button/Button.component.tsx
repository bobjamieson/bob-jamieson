import styles from './Button.module.scss'
import { ButtonProps } from './Button.model'
import Link from 'next/link'

const Button: React.FC<ButtonProps> = ({ children, link }) => {
  return (
    <Link href={link.href} as={link.as} className={styles.Button}>
      {children}
    </Link>
  )
}

export default Button
