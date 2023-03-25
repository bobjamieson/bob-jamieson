export interface CaseStudyProps {
  currentIndex: number
  caseStudies: [
    data: {
      id: string
      attributes: {
        title: string
        snippet: string
        body: string
        slug: string
        techlist: string
        image: {
          data: {
            attributes: {
              url: string
            }
          }
        }
      }
    }
  ]
}

export interface HeroProps {
  hero: {
    attributes: {
      title: string
      image: {
        data: {
          attributes: {
            url: string
          }
        }
      }
    }
  }
}

export type HomeProps = {
  caseStudies: CaseStudyProps
  hero: HeroProps
}

export interface ButtonProps {
  link: {
    href: string
    as: string
  }
  variant?: 'card' | 'sidebar'
  children?: React.ReactNode
  style?: React.CSSProperties
}
