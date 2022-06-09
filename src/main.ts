/*
 * @Author: qiuzijie 771447612@qq.com
 * @Date: 2022-05-31 08:53:52
 * @LastEditors: qiuzijie 771447612@qq.com
 * @LastEditTime: 2022-06-01 10:00:01
 * @FilePath: \dog-ui\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/index.less';
// import '@/assets/font/font.less';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)
    .use(router);
app.mount('#app')