export interface ImageModel {
  data: {
    attributes: {
      url: string
    }
  }
}

export interface CaseStudyModel {
  data: {
    id: string
    attributes: {
      title: string
      snippet: string
      body: string
      slug: string
      techlist: string
      image: ImageModel
    }
  }
}

export interface CaseStudyProps {
  currentIndex: number
  caseStudies: CaseStudyModel[]
}

export interface HeroProps {
  attributes: {
    title: string
    image: ImageModel
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
