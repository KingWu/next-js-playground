import 'styles/base.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Component {...pageProps} />
    </div>
  )
}