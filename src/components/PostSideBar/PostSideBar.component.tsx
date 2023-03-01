import Button from '../Button/Button.component'
import styles from './PostSideBar.module.scss'
import colorForIndex from '@/src/utils/ColorForIndex'

const PostSideBar = ({ caseStudies, currentIndex }) => {
  return (
    <div className={styles.RelatedPosts}>
      {caseStudies?.data?.map((caseStudy: any, index: number) => (
        <div className={`${styles.RelatedPostsContainer}`} key={index}>
          {currentIndex !== index && (
            <Button
              link={{
                href: '/case-studies/[slug]',
                as: `/case-studies/${caseStudy?.attributes.slug}`,
              }}
            >
              <div
                className={styles.RelatedPosts__Post}
                style={{ background: colorForIndex(index) }}
              >
                {/* Box Content */}

                <div className={styles.ButtonContent}>
                  <p className='P__CaseStudy__WhiteTitle__PostPage'>
                    {caseStudy?.attributes.title}
                  </p>
                  <p
                    className={`${styles.Arrow} P__CaseStudy__WhiteTitle__PostPage`}
                  >
                    ▶
                  </p>
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
