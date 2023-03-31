import { ImageModel } from '@/src/types/index.model'

export interface HeroProps {
  attributes: {
    title: string
    subtitle: string
    image: ImageModel
  }
}
