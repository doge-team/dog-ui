export class User {
    username: string;
    password: string;
    avatar: string;

    constructor(userName: string, password: string) {
        this.username = userName;
        this.password = password;
    }
}