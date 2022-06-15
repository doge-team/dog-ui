import axios from '../utils/http/axios';

export class Http {
    static get(url: string){
        return axios.get(url)
    }

    static post(url: string, data?: any){
        return axios.post(url, data)
    }
}