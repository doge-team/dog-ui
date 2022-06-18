export class User {
    username: string;
    password: string;
    avatar: string;
    token: string;
    profilePath: string;

    constructor(userName: string, password: string) {
        this.username = userName;
        this.password = password;
    }
}