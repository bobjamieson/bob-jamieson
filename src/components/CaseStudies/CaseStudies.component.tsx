import styles from './CaseStudies.module.scss'
import colorForIndex from '@/src/utils/ColorForIndex'
import dummyData from './dummy.json'
import Button from '../Button/Button.component'
import { useState } from 'react'
import Image from 'next/image'

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index)
  }

  return (
    <div className={styles.CaseStudies}>
      <div className='container'>
        <div className='content'>
          {dummyData.data?.map((caseStudy, index) => (
            <div
              className={styles.CaseStudy}
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
                {caseStudy?.title}
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
                  className={`${styles.CaseStudy__box} ${
                    activeIndex === index ? styles.ActiveBox : ''
                  }`}
                  style={{ background: colorForIndex(index) }}
                >
                  {/* Box Content */}
                  <>
                    {/* Collapse Button */}
                    <hr
                      className={
                        activeIndex === index
                          ? styles.CaseStudy__box__collapse__active
                          : styles.CaseStudy__box__collapse
                      }
                    />

                    <div className={styles.CaseStudy__box__content}>
                      <p
                        className={`P__CaseStudy__title ${
                          activeIndex === index
                            ? 'P__CaseStudy__title__active'
                            : ''
                        }`}
                      >
                        {caseStudy?.title}
                      </p>
                      <p className='P__CaseStudy__content'>
                        {caseStudy?.snippet}
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
      </div>
    </div>
  )
}
export default CaseStudies
