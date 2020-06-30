import React, {useReducer, useContext} from 'react';
export const ThemeContext = React.createContext({})
export const ThemeProvider = ThemeContext.Provider

export const themeLightMode = 'light'
export const themeDarkMode = 'dark'

const initState = {
  mode: themeLightMode
}

const actionTypes = {
  toggle: 'toggle',
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
};

export const createThemeStore = () => {
  return useReducer(themeReducer, initState)
}

export const useThemeContext = () => {
  const [state, dispatch] = useContext(ThemeContext)
  return {
      state: state,
      onToggleTheme: () => dispatch({type : actionTypes.toggle})
  }
}