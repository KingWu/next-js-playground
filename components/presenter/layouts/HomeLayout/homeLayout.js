import Header from 'components/presenter/navigation/Header'
import Footer from 'components/presenter/navigation/Footer'

const HomeLayout = ({ children }) => (
  <>
    <Header/>
    <div>Home</div>
    <div className="main">
      {children}
    </div>
    <Footer/>    
  </>
);

export default HomeLayout;