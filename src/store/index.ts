/*
 * @Description: st
 * @Author: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-08 20:46:07
 */
import { createStore, createLogger, Store } from 'vuex'
import {  UserState } from './modules/user'
// import createPersistedState from 'vuex-persistedstate'

export interface RootState {
    user: UserState
}

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
// Plug in session storage based persistence
// plugins.push(createPersistedState({ storage: window.sessionStorage }))

export const store = createStore({
  plugins,
  modules: {
  }
})

export function useStore(): Store<RootState> {
  return store as Store<RootState>
}
