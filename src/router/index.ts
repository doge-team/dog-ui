import { createRouter, createWebHistory } from 'vue-router'
import AdminRouter from './admin/admin';
import ClientRouter from './client/client';

//路由数组
const routes = [
    ...ClientRouter,
    ...AdminRouter
];

//路由对象
const router = createRouter({
          history: createWebHistory(process.env.BASE_URL),
          routes //上面的路由数组

})

//导出路由对象，在main.js中引用
export default router