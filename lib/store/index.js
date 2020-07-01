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
  const dispatch = (content) => {
    mainDispatch({
      ...content,
      _storeId: storeId,
    })
  }
  const store = stores[storeId]
  if (!store) {
    throw new Error(`Store id ${storeId} does not register`);
  }
  const state = storeState[storeId]

  return {
    state,
    actions: store.actions({
      state,
      dispatch
    })
  }
}