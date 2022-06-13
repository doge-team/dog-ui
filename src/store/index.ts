/*
 * @Description: st
 * @Author: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-08 20:46:07
 */
import { createStore, createLogger } from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import { store as admin, AppStore, AppState } from '@/store/modules/admin'

export interface RootState {
    admin: AppState
}

export type Store = AppStore<Pick<RootState, 'admin'>>

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
// Plug in session storage based persistence
// plugins.push(createPersistedState({ storage: window.sessionStorage }))

export const store = createStore({
  plugins,
  modules: {
    admin
  }
})

export function useStore(): Store {
  return store as Store
}
