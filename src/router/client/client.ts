import { RouteRecordRaw } from 'vue-router'
const ClientRouter: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Main Client',
    component: () => import(/* webpackChunkName: "userManager" */'@/views/main/main.vue')
  }
]
export default ClientRouter
