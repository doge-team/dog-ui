/*
 * @Description: app actions
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-29 08:46:37
 */
import { changePassword, login, logout } from '@/api/user'
import { User } from '@/models/admin/user'
import { RootState } from '@/store'
import { removeToken, setToken } from '@/utils/cookies'
import { encodePwd } from '@/utils/user'
import { ActionContext, ActionTree } from 'vuex'
import { UserActionTypes } from './action-types'
import { UserMutationTypes } from './mutation-types'
import { Mutations } from './mutations'
import { UserState } from './state'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<UserState, RootState>, 'commit'>

export interface Actions {
  [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: User
  ): void
  [UserActionTypes.ACTION_CHANGE_PWD](
    { commit }: AugmentedActionContext, password: string
  ): void
  [UserActionTypes.ACTION_LOGIN_OUT](
    { commit }: AugmentedActionContext,
  ): void
}

export const actions: ActionTree<UserState, RootState> & Actions = {
  async [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    user: User
  ) {
    const md5Passwd = encodePwd(user.passwd);
    const username = user.account.trim()
    await login({ account: username,  passwd: md5Passwd }).then(async(res) => {
      if (res?.data.code === 0 && res.data.accessToken) {
        setToken(res.data.accessToken)
        commit(UserMutationTypes.SET_TOKEN, res.data.accessToken)
      }
    }).catch((err) => {
      console.log(err)
    })
  },

  async [UserActionTypes.ACTION_CHANGE_PWD](
    { commit }: AugmentedActionContext,
    passwd: string
  ) {
    const md5Passwd = encodePwd(passwd);
    await changePassword(md5Passwd).then(async(res) => {
      if (res?.data.code === 0 && res.data.data) {
        removeToken()
        commit(UserMutationTypes.SET_TOKEN, '')
      }
    }).catch((err) => {
      console.log(err)
    })
  },
  
  async [UserActionTypes.ACTION_LOGIN_OUT](
    { commit }: AugmentedActionContext
  ) {
    await logout().then((res) => {
      if (res?.data.code === 0 && res.data.data) {
        removeToken()
        commit(UserMutationTypes.SET_TOKEN, '')
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
