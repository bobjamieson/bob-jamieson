import React from 'react'
import styles from './CaseStudyPage.module.scss'
import colorForIndex from '@/src/utils/ColorForIndex'
import PostSideBar from '@/src/components/PostSideBar/PostSideBar.component'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { getStaticProps, getStaticPaths } from 'pages/data/CaseStudyPage.data'
import { NextSeo } from 'next-seo'
import { NextPage } from 'next'
import { CaseStudyProps } from './CaseStudyPage.model'
import Button from '@/src/components/Button/Button.component'

const CaseStudyPage: NextPage<CaseStudyProps> = (props) => {
  const currentCaseStudy = props?.caseStudies[props.currentIndex]

  const techListRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (techListRef.current) {
      const techListItems = techListRef.current.querySelectorAll('li')

      techListItems.forEach((item) => {
        item.style.background = colorForIndex(props?.currentIndex)
      })
    }
  }, [props?.currentIndex])

  return (
    <>
      <NextSeo
        title={`Bob Jamieson // ${currentCaseStudy?.attributes?.title}`}
        description={`A case study of the ${currentCaseStudy?.attributes?.title} project.`}
      />
      {currentCaseStudy && (
        <div className={`${styles.CaseStudy__Container} Container`}>
          {/*
           * Header
           */}

          <div className={styles.CaseStudy__Header}>
            <div className={styles.CaseStudy__Header__Title}>
              <p className='SubTitle'>
                {`Case study ${props?.currentIndex >= 10 ? '0' : '00'}${
                  props?.currentIndex + 1
                }`}
              </p>
              <h1
                className='H1'
                style={{ color: colorForIndex(props.currentIndex) }}
              >
                {currentCaseStudy?.attributes?.title}
              </h1>
              {currentCaseStudy?.attributes?.link && (
                <Button
                  link={{
                    href: `${currentCaseStudy?.attributes?.link}`,
                    as: `${currentCaseStudy?.attributes?.link}`,
                  }}
                  variant='caseLink'
                >
                  <div
                    className={styles.CaseStudy__Header__Button}
                    style={{ background: colorForIndex(props.currentIndex) }}
                  >
                    <p>Visit</p>
                    <Image
                      src='/icons/external-link.svg'
                      alt=''
                      width='20'
                      height='20'
                      className={styles.CaseStudy__Header__Button__Icon}
                    />
                  </div>
                </Button>
              )}

              <hr className={styles.CaseStudy__Header__Line} />

              <div className={`Tags P__Tags`}>
                <ul
                  ref={techListRef}
                  className='TechList'
                  dangerouslySetInnerHTML={{
                    __html: currentCaseStudy?.attributes?.techlist,
                  }}
                />
              </div>
            </div>

            {/*
             * Featured image
             */}
            {currentCaseStudy?.attributes?.image?.data && (
              <div className={styles.CaseStudy__Header__Image}>
                <Image
                  src={
                    currentCaseStudy?.attributes?.image?.data[0]?.attributes
                      ?.url
                  }
                  alt={`Screenshot of ${currentCaseStudy?.attributes?.title} website.`}
                  width='786'
                  height='438'
                />
              </div>
            )}
          </div>

          {/*
           * Content
           */}

          <div className={`${styles.ContentContainer}`}>
            {/* Body */}
            <div className={styles.CaseStudy__Body}>
              <div
                className='P'
                dangerouslySetInnerHTML={{
                  __html: currentCaseStudy?.attributes?.body,
                }}
              />
            </div>
            <div className={styles.CaseStudy__SideBar}>
              <PostSideBar
                caseStudies={props?.caseStudies}
                currentIndex={props?.currentIndex}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export { getStaticProps, getStaticPaths }
export default CaseStudyPage
