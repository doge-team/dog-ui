import { changePassword, login, logout } from "@/api/user"
import { User } from "@/models/admin/user"
import { store } from "@/store"
import { getToken, removeToken, removeUser, setToken, setUser } from "@/utils/cookies"
import { encodePwd } from "@/utils/user"
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'

enum UserMutationTypes {
    SET_USER = 'SET_USER',
    SET_TOKEN = 'SET_TOKEN'
}

export interface UserState extends User{

}

@Module({ dynamic: true, store, name: 'userStore' })
export class UserStore extends VuexModule {
    user: User;
    get token() {
        return getToken();
    }
    //#region Action
    @Action({ commit: UserMutationTypes.SET_USER })
    async login(user: User) {      
        const md5Passwd = encodePwd(user.password);
        const userName = user.username.trim();
        var user = new User(userName, md5Passwd);
        var result = await login(user)
        if (result?.data.code === 0 && result.data.data.token) {
            setToken(result.data.data.token);
            setUser(result.data.data);
            return result.data.data;
        } else {
            return null
        }
    }

    @Action({ commit: UserMutationTypes.SET_TOKEN })
    async logout() { 
        removeToken()
        removeUser()
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
    SET_USER(user: User) {
        this.user = { ...user };
    }

    @Mutation
    SET_TOKEN(token: string) {
        this.user.token = token;
    }
    //#endregion
}

export const userStoreModule = getModule(UserStore);