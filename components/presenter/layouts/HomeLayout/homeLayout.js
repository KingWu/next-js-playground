import PropTypes from 'prop-types'
import Header from 'components/presenter/navigation/Header'
import Footer from 'components/presenter/navigation/Footer'

const HomeLayout = ({ children }) => (
  <>
    <Header />
    <main className="main">
      {children}
    </main>
    <Footer />    
  </>
)

HomeLayout.propTypes = {
  children: PropTypes.element.isRequired
}
export default HomeLayout