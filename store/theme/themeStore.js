import React, {useReducer, useContext} from 'react';
export const ThemeContext = React.createContext({})
export const ThemeProvider = ThemeContext.Provider

const initState = {
  mode: 'light'
}

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return {
        mode: state.mode === 'dark' ? 'light' : 'dark',
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
      onToggleTheme: () => dispatch({type : 'toggle'})
  }
}