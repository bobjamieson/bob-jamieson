export interface SkillModel {
  skill: string
}

export interface PageAboutModel {
  attributes: {
    metatitle: string
    metadescription: string
    title: string
    subtitle: string
    body: string
    skillstitle: string
    skills: SkillModel[]
  }
}

export type AboutProps = {
  pageAbout: PageAboutModel
}
