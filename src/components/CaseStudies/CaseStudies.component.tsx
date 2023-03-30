import styles from './CaseStudies.module.scss'
import colorForIndex from '../../utils/ColorForIndex'
import Button from '../Button/Button.component'
import { FunctionComponent, useRef, useState } from 'react'
import { CaseStudyProps } from './CaseStudies.model'

const CaseStudies: FunctionComponent<CaseStudyProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const caseStudyRefs = useRef<(HTMLElement | null)[]>([])

  const scrollIntoViewport = (index: number) => {
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

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index)
    scrollIntoViewport(index)
  }

  return (
    <div className={styles.CaseStudies} id='CaseStudies'>
      {props?.caseStudies?.map((caseStudy, index) => (
        <article
          className={styles.CaseStudy}
          ref={(el) => (caseStudyRefs.current[index] = el)}
          key={index}
          onClick={() => handleClick(index)}
        >
          {/* Case Study Number is based on case study index + 1 (start at 1 instead of 0) */}
          <p className='SubTitle' style={{ color: colorForIndex(index) }}>
            {`Case study ${index >= 10 ? '0' : '00'}${index + 1}`}
          </p>
          {/* Case Study Title */}
          <p
            className={`H2 ${activeIndex === index ? styles.ActiveTitle : ''}`}
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
