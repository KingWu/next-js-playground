import Header from 'components/presenter/navigation/Header'
import Footer from 'components/presenter/navigation/Footer'

const DefaultLayout = ({ children }) => (
  <>
    <Header/>
    <main className="main">{children}</main>
    <Footer/>    
  </>
);

export default DefaultLayout;