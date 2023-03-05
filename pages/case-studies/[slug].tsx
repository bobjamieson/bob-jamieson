import React from 'react'
import axios from 'axios'
import styles from './CaseStudyPage.module.scss'
import { CaseStudyPageProps } from './CaseStudyPage.model'
import colorForIndex from '@/src/utils/ColorForIndex'
// @ts-ignore
import { Markup } from 'react-render-markup'
import PostSideBar from '@/src/components/PostSideBar/PostSideBar.component'
import { useEffect } from 'react'
import Head from 'next/head'

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  caseStudy,
  currentIndex,
}) => {
  const currentCaseStudy = caseStudy?.data[currentIndex]

  useEffect(() => {
    const techListItems = document.querySelectorAll(
      '.TechList li'
    ) as NodeListOf<HTMLElement>

    if (techListItems) {
      techListItems.forEach((item) => {
        item.style.background = colorForIndex(currentIndex)
      })
    }
  }, [currentIndex])

  return (
    <>
      <Head>
        <title>{`Bob Jamieson // ${currentCaseStudy?.attributes.title}`}</title>
        <meta
          name='description'
          content={`A case study of the ${currentCaseStudy?.attributes.title} project.`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={`${styles.CaseStudy__Container} Container`}>
        <div className={styles.CaseStudy__Header}>
          <div className={styles.CaseStudy__Header__Title}>
            <p className='SubTitle'>
              {`Case study ${currentIndex >= 10 ? '0' : '00'}${
                currentIndex + 1
              }`}
            </p>
            <h1 className='H1' style={{ color: colorForIndex(currentIndex) }}>
              {currentCaseStudy?.attributes.title}
            </h1>
            <hr className={styles.CaseStudy__Header__Line} />

            <div className={`Tags P__Tags`}>
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
              markup={`<div className='P'>${currentCaseStudy?.attributes.body}</div>`}
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
