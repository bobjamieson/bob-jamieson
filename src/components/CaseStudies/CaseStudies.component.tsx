import styles from './CaseStudies.module.scss'
import colorForIndex from '../../utils/ColorForIndex'
import Link from 'next/link'
import Button from '../Button/Button.component'
import { useState } from 'react'

const CaseStudies = (caseStudies: any) => {
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
      }, 650) //delay (ms) to account for animations
    }
  }

  return (
    <div className={styles.CaseStudies}>
      {caseStudies?.caseStudies?.map((caseStudy: any, index: number) => (
        <div
          className={styles.CaseStudy}
          id={`case-study-${index}`}
          onClick={() => handleClick(index)}
        >
          {/* Case Study Number is generated automatically based on index */}
          <p
            className='P__CaseStudy__number'
            style={{ color: colorForIndex(index) }}
          >
            {`Case study ${index >= 10 ? '0' : '00'}${index + 1}`}
          </p>
          {/* Case Study Title */}
          <p
            className={`P__CaseStudy__title ${
              activeIndex === index ? styles.ActiveTitle : ''
            }`}
          >
            {caseStudy?.attributes.title}
          </p>
          {/* Line */}
          <hr
            className={`${styles.CaseStudy__line} ${
              activeIndex === index ? styles.ActiveLine : ''
            }`}
          />
          {/* Box */}
          <div className={styles.BoxContainer}>
            <div
              className={
                activeIndex === index
                  ? styles.CaseStudy__box__active
                  : styles.CaseStudy__box
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
                        ? styles.CaseStudy__box__collapse__active
                        : styles.CaseStudy__box__collapse
                    }
                  />
                </div>

                <div className={styles.CaseStudy__box__content}>
                  <p className={styles.CaseStudy__box__content__title}>
                    {caseStudy?.attributes.title}
                  </p>
                  <p className='P__CaseStudy__content'>
                    {caseStudy?.attributes.snippet}
                  </p>
                </div>

                <div className={styles.ButtonContainer}>
                  <Button colorIndex={index} />
                </div>
              </>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default CaseStudies
