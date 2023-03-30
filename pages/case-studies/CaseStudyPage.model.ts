export interface ImageModel {
  data: {
    attributes: {
      url: string
    }
  }[]
}

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