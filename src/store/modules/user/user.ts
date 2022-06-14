import { changePassword, login, logout } from "@/api/user"
import { User } from "@/models/admin/user"
import { RootState, store } from "@/store"
import { getToken, removeToken, setToken } from "@/utils/cookies"
import { encodePwd } from "@/utils/user"
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { UserMutationTypes } from "./mutation-types"

export interface UserState{
    token: string
    name: string
}

@Module({ dynamic: true, store, name: 'userStore' })
export class UserStore extends VuexModule implements UserState {
    token: string = getToken() || ''
    name: string = ''

    //#region Action
    @Action({ commit: UserMutationTypes.SET_TOKEN })
    async login(user: User) {      
        const md5Passwd = encodePwd(user.password);
        const userName = user.username.trim()
        var result = await login({ username: userName,  password: md5Passwd })
        if (result?.data.code === 0 && result.data.data.token) {
            setToken(result.data.data.token)
            return result.data.data.token;
        } else {
            return ''
        }
    }

    @Action({ commit: UserMutationTypes.SET_TOKEN })
    async loginout() { 
        removeToken()
        logout()
        return '';
    }

    @Action({ commit: UserMutationTypes.SET_TOKEN })
    async changePwd(password: string) {
        var result = await changePassword(password);
        if (result?.data.code === 0 && result.data.data.token) {
            removeToken()
            return result.data.data.token;
        } else {
            return ''
        }
    }
    //#endregion

    //#region mutation
    @Mutation
    SET_TOKEN(token: string) {
        this.token = token
    }
    //#endregion
}

export const userStoreModule = getModule(UserStore);