import Button from '../Button/Button.component'
import colorForIndex from '@/src/utils/ColorForIndex'

const PostSideBar = ({ caseStudies, currentIndex }) => {
  return (
    <div>
      {caseStudies?.data?.map((caseStudy: any, index: number) => (
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
                  <p>▶</p>
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
