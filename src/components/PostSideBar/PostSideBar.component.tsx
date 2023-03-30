import Button from '../Button/Button.component'
import colorForIndex from '@/src/utils/ColorForIndex'
import styles from './PostSideBar.module.scss'
import { CaseStudyProps } from '../CaseStudies/CaseStudies.model'
import { FunctionComponent } from 'react'

const PostSideBar: FunctionComponent<CaseStudyProps> = ({
  caseStudies,
  currentIndex,
}) => {
  return (
    <div>
      {caseStudies?.map((caseStudy: any, index: number) => (
        <div key={index}>
          {currentIndex !== index && (
            <Button
              link={{
                href: '/case-studies/[slug]',
                as: `/case-studies/${caseStudy?.attributes.slug}`,
              }}
              variant='sidebar'
            >
              <div style={{ background: colorForIndex(index) }}>
                {/* Box Content */}

                <div>
                  <p>{caseStudy?.attributes.title}</p>
                  <p className={styles.Arrow}>▶</p>
                </div>
              </div>
            </Button>
          )}
        </div>
      ))}
    </div>
  )
}

export default PostSideBar
