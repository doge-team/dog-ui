import { createApp, devtools } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/index.less';
import '@/assets/font/font.less';
import App from './App.vue'
import router from './router'
import vue from 'vue'
import './permission'

const app = createApp(App)

app.use(ElementPlus)
    .use(router);
app.mount('#app')
