import { RouteRecordRaw } from 'vue-router'
const AdminRouter: Array<RouteRecordRaw> = [
  {
    path: '/admin',
    name: 'Admin Client',
    component: () => import('@/views/admin/admin.vue'),
    children: [
      {
        path: '',
        redirect: '/admin/menu'
      },
      {
        path: '/admin/menu',
        name: 'Admin Main',
        component: () => import('@/components/admin/menu.vue')
      }
    ]
  }
]
export default AdminRouter
