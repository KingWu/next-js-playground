import { themeDarkMode, useThemeContext } from 'store/theme/themeStore'

const Theme = ({children}) => {
  const { state } = useThemeContext()
  const themeMode = state.mode === themeDarkMode ? 'theme-dark' : ''
  return (
    <div className={`app ${themeMode}`}>
      {children}
    </div>
  )
}
export default Theme