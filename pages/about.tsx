import Head from 'next/head'
import styles from '/src/styles/About.module.scss'
import colorForIndex from '@/src/utils/ColorForIndex'
import Image from 'next/image'

export default function Home() {
  // tags array looped over to create <li> items to apply colorForIndex()
  const tags: Array<string> = [
    'React',
    'Next.Js',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Wordpress',
    'GraphQL',
  ]

  return (
    <>
      <Head>
        <title>Bob Jamieson // About</title>
        <meta name='description' content='Get to know me.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={`${styles.AboutContainer} Container`}>
        <div className={styles.Header}>
          <Image
            src='/images/bob-photo.jpg'
            className={styles.Header__Image}
            alt='Photo of Bob Jamieson'
            width='200'
            height='200'
          />
          <div className={styles.Header__Text}>
            <p className='SubTitle'>A little bit about</p>
            <h1 className='H1'>Bob Jamieson</h1>
          </div>
        </div>

        <hr className={styles.Line} />

        <div className={`${styles.Body} P`}>
          <p className='P'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            mauris nibh, ullamcorper eu orci eget, gravida blandit nibh.
            Maecenas et augue augue. Sed ut tellus bibendum, suscipit tortor in,
            imperdiet quam. Fusce congue massa turpis, id lobortis urna pharetra
            in.
          </p>

          <h2 className='H2'>Skills and Technologies</h2>

          <div className={`${styles.Skills} Tags P__Tags`}>
            <ul>
              {tags.map((tag, index) => {
                return (
                  <li style={{ background: colorForIndex(index) }}>{tag}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
