import styles from './Button.module.scss'
import colorForIndex from '@/src/utils/ColorForIndex'
import { ButtonProps } from './Button.model'
import Link from 'next/link'

const Button: React.FC<ButtonProps> = ({ colorIndex }) => {
  return (
    <Link href='#' className={styles.Button}>
      {'Read More >'}
    </Link>
  )
}

export default Button
