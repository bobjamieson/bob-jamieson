import styles from './CaseStudies.module.scss'
import colorForIndex from '../../utils/ColorForIndex'
import Button from '../Button/Button.component'
import { useState } from 'react'
import { CaseStudyProps } from '@/src/types'

const CaseStudies: React.FC<CaseStudyProps> = (caseStudies) => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index)
    if (index !== activeIndex) {
      setTimeout(() => {
        const element = document.getElementById(`case-study-${index}`)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        }
      }, 650)
    }
  }

  return (
    <div className={styles.CaseStudies} id='CaseStudies'>
      {caseStudies?.caseStudies?.map((caseStudy: any, index: number) => (
        <article
          className={styles.CaseStudy}
          id={`case-study-${index}`}
          key={index}
          onClick={() => handleClick(index)}
        >
          {/* Case Study Number is generated automatically based on index */}
          <p
            className='P__CaseStudy__Number'
            style={{ color: colorForIndex(index) }}
          >
            {`Case study ${index >= 10 ? '0' : '00'}${index + 1}`}
          </p>
          {/* Case Study Title */}
          <p
            className={`P__CaseStudy__Title ${
              activeIndex === index ? styles.ActiveTitle : ''
            }`}
          >
            {caseStudy?.attributes.title}
          </p>
          {/* Line */}
          <hr
            className={`${styles.CaseStudy__Line} ${
              activeIndex === index ? styles.CaseStudy__Line__Active : ''
            }`}
          />
          {/* Box */}
          <div className={styles.BoxContainer}>
            <div
              className={
                activeIndex === index
                  ? styles.CaseStudy__Box__Active
                  : styles.CaseStudy__Box
              }
              style={{ background: colorForIndex(index) }}
            >
              {/* Box Content */}
              <>
                {/* Collapse Button */}

                <div className={styles.CollapseContainer}>
                  <hr
                    className={
                      activeIndex === index
                        ? styles.CaseStudy__Box__Collapse__Active
                        : styles.CaseStudy__Box__Collapse
                    }
                  />
                </div>

                <div
                  className={
                    activeIndex === index
                      ? styles.CaseStudy__Box__Content__Active
                      : styles.CaseStudy__Box__Content
                  }
                >
                  <p className={styles.CaseStudy__Box__Content__Title}>
                    {caseStudy?.attributes.title}
                  </p>
                  <p className='P__CaseStudy__Snippet'>
                    {caseStudy?.attributes.snippet}
                  </p>
                  <div className={styles.ButtonContainer}>
                    <Button
                      link={{
                        href: '/case-studies/[slug]',
                        as: `/case-studies/${caseStudy?.attributes.slug}`,
                      }}
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
