import { User } from "@/models/admin/user";
import { Http } from "./http"

export const login = (user: User) => {
    return Http.post('/user/userLogin', user);
}

export const changePassword = (passwd: string) => {
    return Http.post('/user/changePassword', passwd);
}

export const logout = () => {
    return Http.post('/user/logout');
}