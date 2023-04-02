import { ImageModel } from '@/src/types/index.model'

export interface FooterModel {
  attributes: {
    title: string
    email: string
    image: ImageModel
  }
}
