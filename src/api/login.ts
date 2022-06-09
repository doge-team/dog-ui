import { User } from "@/models/admin/user";
import { Http } from "./http"

export const login = (user: User) => {
    return Http.post('/user/userLogin', user);
}