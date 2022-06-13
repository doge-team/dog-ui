export class User {
    account: string;
    passwd: string;

    constructor(account: string, passwd: string) {
        this.account = account;
        this.passwd = passwd;
    }
}