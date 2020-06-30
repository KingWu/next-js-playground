import Head from 'next/head'
import 'styles/base.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="theme-dark">
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}