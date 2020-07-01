import React, {useReducer, useContext} from 'react';

const StoreContext = React.createContext({})

const stores = {}
const initMainStoreState = {}

const createMainStore = (initState) => {
  return useReducer(mainReducer, initState)
}

const mainReducer = (state, action) => {
  const storeId = action._storeId
  const storeState = state[storeId]
  return {
    ...state,
    [storeId]: stores[storeId].reducer(storeState, action)
  }
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

const getStore = (storeId, storeState, mainDispatch, storeGetter) => {
  const store = stores[storeId]
  if (!store) {
    throw new Error(`Store id ${storeId} does not register`);
  }
  const state = storeState[storeId]
  const dispatch = generateDispatch(storeId, mainDispatch)
  return generateStore(store, state, dispatch, storeGetter)
}

const generateDispatch = (storeId, mainDispatch) => {
  return (content) => {
    mainDispatch({
      ...content,
      _storeId: storeId,
    })
  }
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

export const useStore = (storeId) => {
  const [storeState, mainDispatch] = useContext(StoreContext)
  const _cacheStore = {}
  const _storeGetter = (storeId) => {
    if (!_cacheStore[storeId]) {
      _cacheStore[storeId] = getStore(storeId, storeState, mainDispatch, _storeGetter)
    }
    return _cacheStore[storeId]
  }
  _cacheStore[storeId] = getStore(storeId, storeState, mainDispatch, _storeGetter)
  return _cacheStore[storeId]
}

