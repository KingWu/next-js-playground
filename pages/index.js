import { NextSeo } from 'next-seo';
import Home from 'components/container/page/home'

export default () => (
  <>
    <NextSeo
      title="Home Page2"
      description="A short description goes here."
    />
    <Home />
  </>
)
