import 'styles/base.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="theme-dark">
      <Component {...pageProps} />
    </div>
  )
}