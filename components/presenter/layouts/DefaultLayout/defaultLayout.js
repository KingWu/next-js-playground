import Header from 'components/presenter/navigation/Header'
import Footer from 'components/presenter/navigation/Footer'

const DefaultLayout = ({ children }) => (
  <>
    <Header/>
    <div className="main">{children}</div>
    <Footer/>    
  </>
);

export default DefaultLayout;