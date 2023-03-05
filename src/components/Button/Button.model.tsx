export interface ButtonProps {
  link: {
    href: string
    as: string
  }
  variant?: 'card' | 'sidebar'
  children?: React.ReactNode
  style?: React.CSSProperties
}
