export interface CaseStudy {
  data: {
    attributes: {
      title: string
      [key: string]: any
    }
    [key: string]: any
  }
}

export interface CaseStudyPageProps {
  caseStudy: CaseStudy
  currentIndex: number
}
