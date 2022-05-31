/*
 * @Author: qiuzijie 771447612@qq.com
 * @Date: 2022-05-31 17:54:16
 * @LastEditors: qiuzijie 771447612@qq.com
 * @LastEditTime: 2022-05-31 17:56:41
 * @FilePath: \dog-ui\src\api\bas-api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios';

export class BaseApi {
    get<T>() {
        return axios.get()
    }
}