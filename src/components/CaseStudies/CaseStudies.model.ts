import { ImageModel } from '@/src/types/index.model'

export interface CaseStudyModel {
  id: string
  currentIndex: number
  attributes: {
    title: string
    snippet: string
    body: string
    slug: string
    techlist: string
    image: ImageModel
  }
}

export interface CaseStudyProps {
  currentIndex: number
  caseStudies: CaseStudyModel[]
}
