export interface CaseStudyProps {
  data: {
    id: string
    attributes: {
      title: string
      snippet: string
      body: string
      slug: string
    }
  }
}

export interface HeroProps {
  title: string
  image: {
    url: string
    name: string
    hash: string
    caption: string
    formats: {
      thumbnail: {
        url: string
      }
    }
  }
}
