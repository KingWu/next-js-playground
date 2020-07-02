import { useStore, themeStoreId } from 'stores'
import { themeDarkMode } from 'stores/theme'

/**
 * Theme Component. Subscribe Theme store to switch theme mode
 * 
 * @param {object} props Props
 * @param {import('react').ReactNode} props.children - Children
 * @returns {object} - Theme Component
 */
const Theme = ({children}) => {
  const { state } = useStore(themeStoreId)
  const themeMode = state.mode === themeDarkMode ? 'theme-dark' : ''
  return (
    <div className={`app ${themeMode}`}>
      {children}
    </div>
  )
}

export default Theme