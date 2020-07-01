import { NextSeo } from 'next-seo'
import Home from 'components/container/page/home'
import HomeLayout from 'components/presenter/layouts/HomeLayout'

const HomePage = () => (
  <>
    <NextSeo
      title="Home Page2"
      description="A short description goes here."
    />
    <Home />
  </>
)

HomePage.Layout = HomeLayout

export default HomePage
