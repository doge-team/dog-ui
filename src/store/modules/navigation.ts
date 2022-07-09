import { removeMenu } from "@/api/menu"
import { addNavigation, getNavigations, removeNavigation, updateNavigation } from "@/api/navagation"
import { Navigation } from "@/models/navigation"
import { store } from "@/store"
import { getResultOrDefault } from "@/utils/store"
import { isEmpty } from "lodash"
import { Store } from "vuex"
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { menuStoreModule } from "./menu"

export interface NavState{
    loading: boolean[];
}

@Module({ dynamic: true, store, name: 'navigationStore' })
export class NavigationStore extends VuexModule implements NavState {
    loading: boolean[] = [];

    //#region Action
    @Action
    async loadNavigations(menuId: number) {
        this.NAV_LOADING(menuId, true);
        const result = await getNavigations(menuId);
        this.NAV_LOADING(menuId, false);
        const navs = getResultOrDefault(result, []) as Navigation[];
        this.LOAD_NAVIGATIONS({menuId, navs});
        return navs;
    }

    @Action
    async addNavigation(navigation: Navigation) {
        const result = await addNavigation(navigation);
        this.loadNavigations(navigation.menuId);
        return getResultOrDefault(result, null);
    }

    @Action
    async updateNavigation(navigation: Navigation) {
        const result = await updateNavigation(navigation);
        this.loadNavigations(navigation.menuId);
        return getResultOrDefault(result, null);
    }

    @Action
    async removeNav(navigation: Navigation) {
        const result = await removeNavigation(navigation.id);
        this.loadNavigations(navigation.menuId);
        return getResultOrDefault(result, 0);
    }
    
    //#endregion

    //#region mutation
    @Mutation
    LOAD_NAVIGATIONS({ menuId, navs }: {menuId: number, navs: Navigation[]}) {
        if(!isEmpty(navs)) {
            store.commit('LOAD_NAVIGATION', { menuId, navs });
        }
    }
    //#endregion

    //#region Common

    @Mutation
    NAV_LOADING(menuId: number, loading: boolean) {
        this.loading[menuId] = loading || undefined;
    }
    //#endregion
}

export const navigationStoreModule = getModule(NavigationStore);