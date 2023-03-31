// Images
export interface ImageModel {
  data: {
    attributes: {
      url: string
    }
  }[]
}

// ChatBox
export interface ChatBoxModel {
  attributes: {
    subtitle: string
    title: string
    paragraph: string
    inputplaceholder: string
  }
}

export interface PageHomeModel {
  attributes: {
    title: string
    description: string
  }
}

export interface HeroModel {
  attributes: {
    title: string
    subtitle: string
    image: ImageModel
  }
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
    image: ImageModel
  }
}

export type HomeProps = {
  pageHome: PageHomeModel
  caseStudies: CaseStudyModel[]
  hero: HeroModel
  chatBox: ChatBoxModel
}
