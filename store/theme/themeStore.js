import React, {useReducer, useContext} from 'react';

const ThemeContext = React.createContext({})

export const themeLightMode = 'light'
export const themeDarkMode = 'dark'

const initState = {
  mode: themeLightMode
}

const actionTypes = {
  toggle: 'toggle',
}

const createThemeStore = () => {
  return useReducer(themeReducer, initState)
}

const themeReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.toggle:
      return {
        mode: state.mode === themeLightMode ? themeDarkMode : themeLightMode,
      }
    default:
      throw new Error('Unexpected action');
  }
}

export const ThemeProvider = ({children}) => {
  return (
    <ThemeContext.Provider value={createThemeStore()}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const [state, dispatch] = useContext(ThemeContext)
  return {
      state: state,
      onToggleTheme: () => dispatch({type : actionTypes.toggle})
  }
}