import { Menu } from "@/models/menu";
import { Http } from "./http"

export const getAllMenus = () => {
    return Http.get('/menu/listMenusInfo');
}

export const addMenu = (menu: Menu) => {
    return Http.post('/menu/insertMenu', menu);
}

export const removeMenu = (id: number) => {
    return Http.post(`/menu/deleteMenu?menuId=${id}`);
}

export const updateMenu = (menu: Menu) => {
    return Http.post('/menu/updateMenu', menu);
}