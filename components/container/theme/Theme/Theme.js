import PropTypes from 'prop-types'
import { useStore, themeStoreId } from 'store'
import { themeDarkMode } from 'store/theme'

const Theme = ({children}) => {
  const { state } = useStore(themeStoreId)
  const themeMode = state.mode === themeDarkMode ? 'theme-dark' : ''
  return (
    <div className={`app ${themeMode}`}>
      {children}
    </div>
  )
}
Theme.propTypes = {
  children: PropTypes.element.isRequired
}

export default Theme