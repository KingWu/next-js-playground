import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { initStores, StoreProvider } from 'stores'
import Theme from 'components/container/theme/Theme'
import DefaultLayout from 'components/presenter/layouts/DefaultLayout'
import 'styles/base.css'

initStores()

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout || DefaultLayout

  return (
    <StoreProvider>
      <Theme>
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
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </StoreProvider>
  )
}

export default MyApp