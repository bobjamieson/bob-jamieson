import styles from '@/src/styles/About.module.scss'
import colorForIndex from '@/src/utils/ColorForIndex'
import Image from 'next/image'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_PAGE_ABOUT } from '@/graphql/queries'
import { NextPage } from 'next'
import { AboutProps } from '../src/types/About.model'
import { NextSeo } from 'next-seo'

const About: NextPage<AboutProps> = (props) => {
  return (
    <>
      <NextSeo
        title={props.pageAbout?.attributes?.metatitle}
        description={props.pageAbout?.attributes?.metadescription}
      />

      <main className={`${styles.AboutContainer} Container`}>
        <div className={styles.About__Header}>
          <Image
            src='/images/bob-photo.jpg'
            className={styles.About__Header__Image}
            alt='Photo of Bob Jamieson'
            width='200'
            height='200'
          />
          <div>
            <p className='SubTitle'>{props?.pageAbout?.attributes?.subtitle}</p>
            <h1 className={`${styles.About__Header__Title} H1`}>
              {props?.pageAbout?.attributes?.title}
            </h1>
          </div>
        </div>

        <hr className={styles.Line} />

        <div className={styles.About__Content}>
          <div className={`${styles.About__Skills} Tags P__Tags`}>
            <ul>
              {props?.pageAbout?.attributes?.skills.map((skillObj, index) => {
                return (
                  <li style={{ background: colorForIndex(index) }} key={index}>
                    {skillObj.skill}
                  </li>
                )
              })}
            </ul>
          </div>
          <div
            className={styles.About__Content__Body}
            dangerouslySetInnerHTML={{
              __html: props?.pageAbout?.attributes?.body,
            }}
          />
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async ({ params }: any) => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  })

  const [pageaboutResult] = await Promise.all([
    client.query({ query: GET_PAGE_ABOUT }),
  ])

  const pageaboutData = pageaboutResult?.data?.pageabout?.data

  return {
    props: {
      pageAbout: pageaboutData,
    },
  }
}

export default About
