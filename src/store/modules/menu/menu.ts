import { addMenu, getAllMenus, removeMenu, updateMenu } from "@/api/menu"
import { addNavigation } from "@/api/navagation"
import { Menu } from "@/models/menu"
import { Navigation } from "@/models/navigation"
import { store } from "@/store"
import { getResultOrDefault } from "@/utils/store"
import { isEmpty } from "lodash"
import { Action, MutationAction, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { MenuMutationTypes } from "./mutation-types"

export interface MenuState{
    menus: Menu[];
    loading: boolean;
}

@Module({ dynamic: true, store, name: 'menuStore' })
export class MenuStore extends VuexModule implements MenuState {
    menus: Menu[] = [];
    loading: boolean = false;

    //#region Action
    @Action({ commit: MenuMutationTypes.LOAD_ALL_MENU })
    async loadMenus() {
        this.LOADING(true);
        const result = await getAllMenus();
        this.LOADING(false);
        return getResultOrDefault(result, []);
    }

    @Action({ commit: MenuMutationTypes.ADD_MENU })
    async addMenu(menu: Menu) {
        const result = await addMenu(menu);
        this.loadMenus();
        return getResultOrDefault(result, null) ? menu : null;
    }

    @Action({ commit: MenuMutationTypes.UPDATE_MENU })
    async updateMenu(menu: Menu) {
        const result = await updateMenu(menu);
        this.loadMenus();
        return getResultOrDefault(result, null) ? menu : null;
    }

    @Action({ commit: MenuMutationTypes.REMOVE_MENU })
    async removeMenu(menuId: number) {
        const result = await removeMenu(menuId);
        this.loadMenus();
        return getResultOrDefault(result, 0) ? menuId : 0;
    }

    @Action({ commit: MenuMutationTypes.ADD_MENU })
    async addNavigation(navigation: Navigation) {
        const result = await addNavigation(navigation);
        this.loadMenus();
        return getResultOrDefault(result, null) ? navigation : null;
    }

    
    //#endregion

    //#region mutation
    @Mutation
    LOAD_ALL_MENU(menus: Menu[]) {
        if(!isEmpty(menus)) {
            this.menus = menus;
        }
    }

    @Mutation
    ADD_MENU(menu: Menu) {
        if(!!menu) {
            this.menus.push(menu);
        }
    }

    @Mutation
    UPDATE_MENU(menu: Menu) {
        if(!!menu) {
            const findMenu = this.menus.find(i => i.id === menu.id);
            findMenu.icon = menu.icon;
            findMenu.order = menu.order;
            findMenu.title = menu.title;
            // findMenu.navigationList = menu.navigationList;
        }
    }

    @Mutation
    REMOVE_MENU(menuId: number) {
        if(!!menuId) {
            this.menus = this.menus.filter(i => i.id !== menuId);
        }
    }
    //#endregion

    //#region Common
    @Mutation
    async excuteWithLoading(action) {
        this.loading = true;
        const result = await action();
        this.loading = false;
        return result;
    }

    @Mutation
    LOADING(loading) {
        this.loading = loading;
    }
    //#endregion
}

export const menuStoreModule = getModule(MenuStore);