import PropTypes from 'prop-types'
import React, {useReducer, useContext} from 'react'

const StoreContext = React.createContext({})

const stores = {}
const initMainStoreState = {}

const mainReducer = (state, action) => {
  // eslint-disable-next-line no-underscore-dangle
  const storeId = action._storeId
  const storeState = state[storeId]
  return {
    ...state,
    [storeId]: stores[storeId].reducer(storeState, action)
  }
}

const createMainStore = (initState) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useReducer(mainReducer, initState)
}

const generateStore = (store, state, dispatch, storeGetter) => {
  return {
    state,
    actions: store.actions({
      useStore: storeGetter,
      state,
      dispatch
    })
  }
}

const generateDispatch = (storeId, mainDispatch) => {
  return (content) => {
    mainDispatch({
      ...content,
      _storeId: storeId,
    })
  }
}

const getStore = (storeId, storeState, mainDispatch, storeGetter) => {
  const store = stores[storeId]
  if (!store) {
    throw new Error(`Store id ${storeId} does not register`)
  }
  const state = storeState[storeId]
  const dispatch = generateDispatch(storeId, mainDispatch)
  return generateStore(store, state, dispatch, storeGetter)
}

export const createStore = (storeId, storeObj) => {
  if (!stores[storeId]) {
    stores[storeId] = storeObj
    initMainStoreState[storeId] = storeObj.initState
  }
}

export const StoreProvider = ({children}) => {
  return (
    <StoreContext.Provider value={createMainStore(initMainStoreState)}>
      {children}
    </StoreContext.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export const useStore = (storeId) => {
  const [storeState, mainDispatch] = useContext(StoreContext)
  const cacheStore = {}
  // eslint-disable-next-line no-shadow
  const storeGetter = (storeId) => {
    if (!cacheStore[storeId]) {
      cacheStore[storeId] = getStore(storeId, storeState, mainDispatch, storeGetter)
    }
    return cacheStore[storeId]
  }
  cacheStore[storeId] = getStore(storeId, storeState, mainDispatch, storeGetter)
  return cacheStore[storeId]
}

