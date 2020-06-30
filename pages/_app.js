import Head from 'next/head'
import { DefaultSeo } from 'next-seo';
import 'styles/base.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="theme-dark">
      <DefaultSeo
          title='Hello World'
          description='This nextjs example.'
          canonical='https://www.canonical.ie/'
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://www.url.ie/',
            site_name: 'SiteName',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}