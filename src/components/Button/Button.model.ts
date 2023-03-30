export interface ButtonProps {
  link: {
    href: string
    as: string
  }
  variant?: 'card' | 'sidebar' | 'caseLink'
  children?: React.ReactNode
  style?: React.CSSProperties
}
