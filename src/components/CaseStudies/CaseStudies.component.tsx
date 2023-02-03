import styles from './CaseStudies.module.scss'
import colorForIndex from '@/src/utils/ColorForIndex'
import dummyData from './dummy.json'
import { useState } from 'react'

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index)
  }

  return (
    <div className='container'>
      <div className='content'>
        {dummyData.data?.map((caseStudy, index) => (
          <div className={styles.CaseStudy} onClick={() => handleClick(index)}>
            {/* Case Study Number is generated automatically based on index */}
            <p
              className={styles.CaseStudy__number}
              style={{ color: colorForIndex(index) }}
            >
              {`Case study ${index >= 10 ? '0' : '00'}${index + 1}`}
            </p>
            {/* Case Study Title */}
            <p
              className={`${styles.CaseStudy__title} ${
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
            <div
              className={`${styles.CaseStudy__box} ${
                activeIndex === index ? styles.ActiveBox : ''
              }`}
              style={{ borderColor: colorForIndex(index) }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default CaseStudies
