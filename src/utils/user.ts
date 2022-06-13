import md5 from "js-md5";

export const encodePwd = (passwd: string) => {
    return md5(passwd);
}