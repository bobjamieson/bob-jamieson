import React from 'react'
import styles from '@/src/styles/CaseStudyPage.module.scss'
import colorForIndex from '@/src/utils/ColorForIndex'
import PostSideBar from '@/src/components/PostSideBar/PostSideBar.component'
import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
// @ts-ignore
import { Markup } from 'react-render-markup'

import { getStaticProps, getStaticPaths } from 'pages/data/CaseStudyPage.data'
export { getStaticProps, getStaticPaths }

const CaseStudyPage = ({ caseStudies, currentIndex }: any) => {
  const currentCaseStudy = caseStudies[currentIndex]

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

      {/* Content */}

      <div className={`${styles.CaseStudy__Container} Container`}>
        {/* Header */}

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

          {currentCaseStudy?.attributes.image.data && (
            <div className={styles.CaseStudy__Header__Image}>
              <Image
                src={currentCaseStudy?.attributes.image?.data[0].attributes.url}
                alt={`Screenshot of ${currentCaseStudy?.attributes.title} website.`}
                width='786'
                height='438'
              />
            </div>
          )}
        </div>

        {/* 
        Body content
        Fetches body from rich text editor containing html markup
        */}

        <div className={`${styles.ContentContainer}`}>
          {/* Body */}
          <div className={styles.CaseStudy__Body}>
            <Markup
              markup={`<div className='P'>${currentCaseStudy?.attributes.body}</div>`}
            />
          </div>
          <div className={styles.CaseStudy__SideBar}>
            <PostSideBar
              caseStudies={caseStudies}
              currentIndex={currentIndex}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudyPage
