import { Http } from "./http"

export const getAllMenus = () => {
    return Http.get('/menu/listMenusInfo');
}