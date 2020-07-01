import PropTypes from 'prop-types'
import Header from 'components/presenter/navigation/Header'
import Footer from 'components/presenter/navigation/Footer'

const DefaultLayout = ({ children }) => (
  <>
    <Header />
    <main className="main">{children}</main>
    <Footer />    
  </>
)

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default DefaultLayout