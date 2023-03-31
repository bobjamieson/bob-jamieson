import { ImageModel } from './index.model'

export interface CaseStudyModel {
  id: string
  currentIndex: number
  attributes: {
    title: string
    snippet: string
    body: string
    slug: string
    techlist: string
    link: string
    image: ImageModel
  }
}

export interface CaseStudyProps {
  currentIndex: number
  caseStudies: CaseStudyModel[]
}
