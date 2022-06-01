/*
 * @Author: qiuzijie 771447612@qq.com
 * @Date: 2022-06-01 10:58:45
 * @LastEditors: qiuzijie 771447612@qq.com
 * @LastEditTime: 2022-06-01 13:59:53
 * @FilePath: \dog-ui\src\models\menu.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Navigation } from "./navigation";

export interface Menu {
    icon: string;
    id: number;
    navigationList: Navigation[];
    order: number;
    title: string;
}