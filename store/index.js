import { themeStore } from 'store/theme'
import { createStore, useStore as _useStore, StoreProvider as _StoreProvider } from 'lib/store'

export const themeStoreId = 'theme'

export const initStores = () => {
  createStore(themeStoreId, themeStore)
}
export const useStore = _useStore
export const StoreProvider = _StoreProvider