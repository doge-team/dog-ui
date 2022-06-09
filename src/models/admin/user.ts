import md5 from 'js-md5';
export class User {
    account: string;
    passwd: string;

    constructor(account: string, passwd: string) {
        this.account = account;
        this.passwd = md5(passwd);
    }
}