import { RouteRecordRaw } from 'vue-router'
const ClientRouter: Array<RouteRecordRaw> = [
  {
    path: '/main',
    name: 'Main Client',
    component: () => import('@/views/main/mainPage.vue')
  },
  {
    path: '',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/admin/login.vue')
  },
  {
    path: '/404',
    name: 'Not Found',
    component: () => import('@/views/error/401.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  }
]
export default ClientRouter
