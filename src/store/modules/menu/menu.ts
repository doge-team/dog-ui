import { addMenu, getAllMenus, removeMenu, updateMenu } from "@/api/menu"
import { Menu } from "@/models/menu"
import { store } from "@/store"
import { getResultOrDefault } from "@/utils/store"
import { isEmpty } from "lodash"
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { MenuMutationTypes } from "./mutation-types"

export interface MenuState{
    menus: Menu[];
}

@Module({ dynamic: true, store, name: 'menuStore' })
export class MenuStore extends VuexModule implements MenuState {
    menus: Menu[] = [];

    //#region Action
    @Action({ commit: MenuMutationTypes.LOAD_ALL_MENU })
    async loadMenus() {
        const result = await getAllMenus();
        return getResultOrDefault(result, []);
    }

    @Action({ commit: MenuMutationTypes.ADD_MENU })
    async addMenu(menu: Menu) {
        const result = await addMenu(menu);
        return getResultOrDefault(result, null);
    }

    @Action({ commit: MenuMutationTypes.UPDATE_MENU })
    async updateMenu(menu: Menu) {
        const result = await updateMenu(menu);
        return getResultOrDefault(result, null);
    }

    @Action({ commit: MenuMutationTypes.REMOVE_MENU })
    async removeMenu(menuId: number) {
        const result = await removeMenu(menuId);
        return getResultOrDefault(result, 0);
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
}

export const menuStoreModule = getModule(MenuStore);