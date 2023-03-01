import React from 'react'
import axios from 'axios'
import styles from './CaseStudyPage.module.scss'
import { CaseStudyPageProps } from './CaseStudyPage.model'
import colorForIndex from '@/src/utils/ColorForIndex'
// @ts-ignore
import { Markup } from 'react-render-markup'
import Button from '@/src/components/Button/Button.component'
import PostSideBar from '@/src/components/PostSideBar/PostSideBar.component'
import { useEffect, useRef } from 'react'
import { isBrowser } from '@/src/utils/isBrowser'

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  caseStudy,
  currentIndex,
}) => {
  const currentCaseStudy = caseStudy?.data[currentIndex]

  return (
    <>
      <div className={`${styles.CaseStudy__Container} Container`}>
        <div className={styles.CaseStudy__Header}>
          <div className={styles.CaseStudy__Header__Title}>
            <p className='P__CaseStudyPage__Number'>
              {`Case study ${currentIndex >= 10 ? '0' : '00'}${
                currentIndex + 1
              }`}
            </p>
            <h1
              className='H1 H1__CaseStudyPage'
              style={{ color: colorForIndex(currentIndex) }}
            >
              {currentCaseStudy?.attributes.title}
            </h1>
            <hr className={styles.CaseStudy__Header__Line} />

            <div
              className={`${styles.CaseStudy__Header__List} P__CaseStudyPage__List`}
            >
              <Markup markup={currentCaseStudy?.attributes.techlist} />
            </div>
          </div>

          {currentCaseStudy.attributes.image.data && (
            <div className={styles.CaseStudy__Header__Image}>
              <img
                src={currentCaseStudy?.attributes.image?.data[0].attributes.url}
              />
            </div>
          )}
        </div>

        <div className={`${styles.ContentContainer}`}>
          {/* Body */}
          <div className={styles.CaseStudy__Body}>
            <Markup
              markup={`<div className='P__CaseStudyPage__Body'>${currentCaseStudy?.attributes.body}</div>`}
            />
          </div>
          <div className={styles.CaseStudy__SideBar}>
            <PostSideBar caseStudies={caseStudy} currentIndex={currentIndex} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudyPage

//Async for current page data
export async function getStaticProps({ params }) {
  const caseStudiesRes = await axios.get(
    'http://localhost:1337/api/casestudies?populate=*'
  )

  const caseStudyData = caseStudiesRes.data.data

  let currentIndex
  //determines index of the individual case study data based on slug
  caseStudyData.forEach((caseStudy, index) => {
    if (caseStudy.attributes.slug === params.slug) {
      currentIndex = index
    }
  })

  return {
    props: {
      caseStudy: caseStudiesRes.data,
      currentIndex,
    },
  }
}

export async function getStaticPaths() {
  const caseStudiesRes = await axios.get(
    'http://localhost:1337/api/casestudies?populate=*'
  )

  const paths = caseStudiesRes.data.data.map((caseStudy) => {
    return {
      params: {
        slug: caseStudy.attributes.slug.toString(),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
