import Head from 'next/head'
import styles from '/src/styles/About.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bob Jamieson // ABOUT</title>
        <meta name='description' content='Get to know me.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={`${styles.AboutContainer} Container`}>
        <div className={styles.Header}>
          <div className={styles.Header__Image} />
          <div className={styles.Header__Text}>
            <p className='SubTitle'>A little bit about</p>
            <h1 className='H1'>Bob Jamieson</h1>
          </div>
        </div>

        <hr className={styles.Line} />

        <div className='Tags P__Tags'>
          <ul>
            <li>React</li>
            <li>Next.Js</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Wordpress</li>
          </ul>
        </div>

        <div className={`${styles.Body} P`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            mauris nibh, ullamcorper eu orci eget, gravida blandit nibh.
            Maecenas et augue augue. Sed ut tellus bibendum, suscipit tortor in,
            imperdiet quam. Fusce congue massa turpis, id lobortis urna pharetra
            in. Praesent luctus blandit velit eu convallis. Cras volutpat auctor
            massa, sit amet pharetra dolor congue sed. Suspendisse et arcu
            tortor. Fusce mollis ligula vel elit efficitur, nec mattis libero
            suscipit. Donec rhoncus ipsum eget orci consequat ornare. Curabitur
            nec tempus magna, sed elementum dolor. Quisque quis faucibus felis.
            Vivamus imperdiet elementum turpis nec viverra. Vestibulum at
            vestibulum risus.
          </p>

          <p>
            Praesent pulvinar id nisl sed pellentesque. Sed imperdiet arcu sed
            lorem tristique, sed malesuada lectus facilisis. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Suspendisse sit
            amet tristique sapien. Vivamus in semper magna. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Suspendisse viverra dolor ac diam tincidunt
            facilisis. Duis massa magna, viverra id sem non, mattis dapibus
            metus. Nam laoreet iaculis egestas. Integer volutpat orci at
            vestibulum hendrerit. Fusce augue leo, feugiat vitae orci eget,
            varius elementum neque. Vestibulum feugiat felis nec sapien
            fermentum vulputate. Curabitur at augue odio.
          </p>

          <p>
            Praesent laoreet sem at vestibulum vestibulum. Mauris vitae ex
            egestas, elementum arcu nec, viverra dolor. Pellentesque sed urna
            velit. Aliquam vulputate eleifend magna et cursus. Donec lobortis
            mattis finibus. Fusce aliquet hendrerit nunc, ac convallis tortor.
            Quisque accumsan imperdiet molestie. Cras dapibus vulputate mauris,
            eu mollis nulla dictum aliquet. Phasellus lacinia eu augue id porta.
            Aenean interdum velit vehicula sem placerat rutrum.
          </p>
        </div>
      </main>
    </>
  )
}
