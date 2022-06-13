import { login } from "@/api/user"
import { User } from "@/models/admin/user"
import { store } from "@/store"
import { getToken, setToken } from "@/utils/cookies"
import { encodePwd } from "@/utils/user"
import { Action, Module, VuexModule } from 'vuex-module-decorators'
import { UserMutationTypes } from "./mutation-types"

export interface UserState{
    token: string
    name: string
}

export const state: UserState = {
  token: getToken() || '',
  name: ''
}

@Module({ dynamic: true, store, name: 'app' })
class UserModule extends VuexModule implements UserState {
    token: string
    name: string

    @Action({ commit: UserMutationTypes.SET_TOKEN })
    async login(user: User) {
        const md5Passwd = encodePwd(user.passwd);
        const username = user.account.trim()
        var result = await login({ account: username,  passwd: md5Passwd });
        if (result?.data.code === 0 && result.data.accessToken) {
            setToken(result.data.accessToken)
            return result.data.accessToken;
        } else {
            return '';
        }
    }
}