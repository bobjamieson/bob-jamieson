import styles from './CaseStudies.module.scss'
import colorForIndex from '../../utils/ColorForIndex'
import Button from '../Button/Button.component'
import { FunctionComponent, useRef, useState, useEffect } from 'react'
import { CaseStudyProps } from './CaseStudies.model'
import { isBrowser } from '@/src/utils/isBrowser'

const CaseStudies: FunctionComponent<CaseStudyProps> = (props) => {
  // State to track the active index of case studies
  const [activeIndex, setActiveIndex] = useState(-1)
  // State to track whether the user has scrolled past the top
  const [scrolledPastTop, setScrolledPastTop] = useState(false)
  const caseStudyRefs = useRef<(HTMLElement | null)[]>([])

  // Function to scroll a specific case study into the viewport
  const scrollIntoViewport = (index: number) => {
    if (isBrowser()) {
      const breakpoint = window.matchMedia('(max-width: 768px)')

      if (breakpoint.matches) {
        if (index !== activeIndex) {
          setTimeout(() => {
            const element = caseStudyRefs.current[index]
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              })
            }
          }, 650)
        }
      }
    }
  }

  // Function to handle click events on case study elements
  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index)
    scrollIntoViewport(index)
  }

  // Handles scroll events and control the fade-in and fade-out of the case studies section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && !scrolledPastTop) {
        setScrolledPastTop(true)
      } else if (window.scrollY <= 20 && scrolledPastTop) {
        setScrolledPastTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolledPastTop])

  return (
    <div
      className={`${styles.CaseStudies} ${
        scrolledPastTop ? styles.CaseStudies__Scroll : ''
      }`}
      id='CaseStudies'
    >
      {/*
       * Maps over case studies and returns a card article
       */}
      {props?.caseStudies?.map((caseStudy, index) => (
        <article
          className={styles.CaseStudy}
          ref={(el) => (caseStudyRefs.current[index] = el)}
          key={index}
          onClick={() => handleClick(index)}
        >
          {/*
           * Case Study Number is based on case study index + 1
           * (start at 1 instead of 0)
           */}
          <p className='SubTitle' style={{ color: colorForIndex(index) }}>
            {`Case study ${index >= 10 ? '0' : '00'}${index + 1}`}
          </p>
          {/* Case Study Title */}
          <p
            className={`H2 ${styles.CaseStudy__Title} ${
              activeIndex === index ? styles.ActiveTitle : ''
            }`}
          >
            {caseStudy?.attributes?.title}
          </p>
          {/* Line ----------------------*/}
          <hr
            className={`${styles.CaseStudy__Line} 
            ${activeIndex === index ? styles.CaseStudy__Line__Active : ''}`}
          />
          {/* Box ------------------------*/}
          <div className={styles.BoxContainer}>
            <div
              className={`${styles.CaseStudy__Box} ${
                activeIndex === index ? styles.CaseStudy__Box__Active : ''
              }`}
              style={{ background: colorForIndex(index) }}
            >
              {/* Box Content */}
              <>
                {/* Collapse Button */}

                <div className={styles.CollapseContainer}>
                  <hr
                    className={`${styles.CaseStudy__Box__Collapse} ${
                      activeIndex === index
                        ? styles.CaseStudy__Box__Collapse__Active
                        : ''
                    }`}
                  />
                </div>

                <div
                  className={`${styles.CaseStudy__Box__Content} ${
                    activeIndex === index
                      ? styles.CaseStudy__Box__Content__Active
                      : ''
                  }`}
                >
                  <p className='H2__Card'>{caseStudy?.attributes?.title}</p>
                  <p className='P__Card'>{caseStudy?.attributes?.snippet}</p>
                  <div className={styles.ButtonContainer}>
                    <Button
                      link={{
                        href: '/case-studies/[slug]',
                        as: `/case-studies/${caseStudy?.attributes?.slug}`,
                      }}
                      variant='card'
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
export default CaseStudies
