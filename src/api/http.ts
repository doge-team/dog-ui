/*
 * @Author: qiuzijie 771447612@qq.com
 * @Date: 2022-05-31 17:54:16
 * @LastEditors: qiuzijie 771447612@qq.com
 * @LastEditTime: 2022-06-01 14:01:21
 * @FilePath: \dog-ui\src\api\http.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from '../utils/http/axios';

export class Http {
    static get(url: string){
        console.log(axios.defaults.baseURL);
        return axios.get(url)
    }

    static post(url: string, data?: any){
        return axios.post(url, data)
    }
}