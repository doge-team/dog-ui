import { Navigation } from "@/models/navigation";
import { Http } from "./http"

export const getNavigations = (menuId: number) => {
    return Http.get(`/menu/listNavigationByMenuId?menuId=${menuId}`);
}

export const addNavigation = (navigation: Navigation) => {
    return Http.post('/menu/insertNavigation', navigation);
}

export const removeNavigation = (id: number) => {
    return Http.post(`/menu/deleteNavigation?navigationId=${id}`);
}

export const updateNavigation = (navigation: Navigation) => {
    return Http.post('/menu/updateNavigation', navigation);
}