import PropTypes from 'prop-types'
import { useStore, themeStoreId } from 'stores'
import { themeDarkMode } from 'stores/theme'

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
  children: PropTypes.node.isRequired
}

export default Theme