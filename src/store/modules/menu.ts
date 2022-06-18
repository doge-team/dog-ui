import { addMenu, getAllMenus, removeMenu, updateMenu } from "@/api/menu"
import { Menu } from "@/models/menu"
import { Navigation } from "@/models/navigation"
import { store } from "@/store"
import { getResultOrDefault } from "@/utils/store"
import { isEmpty } from "lodash"
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { StoreBase } from "./storeBase"

export interface MenuState{
    menus: Menu[];
    loading: boolean;
}

enum MenuMutationTypes {
    LOAD_ALL_MENU = 'LOAD_ALL_MENU',
    LOAD_NAVIGATION = 'LOAD_NAVIGATION'
}

@Module({ dynamic: true, store, name: 'menuStore' })
export class MenuStore extends VuexModule implements MenuState {
    menus: Menu[] = [];
    loading: boolean = false;

    //#region Action
    @Action({ commit: MenuMutationTypes.LOAD_ALL_MENU, rawError: true })
    async loadMenus() {
        this.MENU_LOADING(true);
        const menus = await getAllMenus();
        this.MENU_LOADING(false);
        return getResultOrDefault(menus, []);
    }

    @Action
    async addMenu(menu: Menu) {
        const result = await addMenu(menu);
        this.loadMenus();
        return getResultOrDefault(result, null) ? menu : null;
    }

    @Action
    async updateMenu(menu: Menu) {
        const result = await updateMenu(menu);
        this.loadMenus();
        return getResultOrDefault(result, null) ? menu : null;
    }

    @Action
    async removeMenu(menuId: number) {
        const result = await removeMenu(menuId);
        this.loadMenus();
        return getResultOrDefault(result, 0) ? menuId : 0;
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
    LOAD_NAVIGATION({ menuId, navs }: {menuId: number, navs: Navigation[]}) {
        const findMenu = this.menus.find(m => m.id === menuId);
        if(!findMenu) {
            throw new Error(`LOAD_NAVIGATION error, menuId - ${menuId} not found in store`);
        }
        findMenu.navigationList = [...navs];
    }

    @Mutation
    MENU_LOADING(loading: boolean) {
        this.loading = loading;
    }
    //#endregion

    //#region Common

    //#endregion
}

export const menuStoreModule = getModule(MenuStore);