import { useStore } from 'store'
export const themeLightMode = 'light'
export const themeDarkMode = 'dark'

const initState = {
  mode: themeLightMode
}

const actionTypes = {
  toggle: 'toggle',
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.toggle:
      return {
        mode: state.mode === themeLightMode ? themeDarkMode : themeLightMode,
      }
    default:
      throw new Error('Unexpected action');
  }
}

const actions = ({dispatch}) => {
  return {
    onToggleTheme: () => dispatch({type : actionTypes.toggle})
  }
}

export const themeStore = {
  initState,
  reducer,
  actions,
}