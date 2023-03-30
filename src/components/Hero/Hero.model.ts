export interface ImageModel {
  data: {
    attributes: {
      url: string
    }
  }
}

export interface HeroProps {
  attributes: {
    title: string
    subtitle: string
    image: ImageModel
  }
}
