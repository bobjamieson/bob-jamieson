import styles from './CaseStudies.module.scss'
import colorForIndex from '@/src/utils/ColorForIndex'

const CaseStudies = () => {
  // DUMMY DATA -- to be replaced with CMS
  const caseStudies = [
    {
      number: '001',
      title: 'Nation Energie',
    },
    {
      number: '002',
      title: 'Killik Handcrafted Rum',
    },
    {
      number: '003',
      title: 'GinFinity',
    },
    {
      number: '004',
      title: 'Test 1',
    },
    {
      number: '005',
      title: 'Test 2',
    },
  ]

  return (
    <div className='container'>
      <div className='content'>
        {caseStudies?.map((caseStudy, index) => (
          <div className={styles.CaseStudy}>
            <p
              className={styles.CaseStudy__number}
              style={{ color: colorForIndex(index) }}
            >
              {`Case study ${caseStudy.number}`}
            </p>
            <p className={styles.CaseStudy__title}>{caseStudy.title}</p>
            <hr className={styles.CaseStudy__line} />
            <div
              className={styles.CaseStudy__box}
              style={{ background: colorForIndex(index) }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CaseStudies
