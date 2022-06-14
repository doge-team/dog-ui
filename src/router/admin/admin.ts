import { RouteRecordRaw } from 'vue-router'
const AdminRouter: Array<RouteRecordRaw> = [
  {
    path: '/admin',
    name: 'Admin Client',
    component: () => import('@/views/admin/admin.vue'),
    children: [
      {
        path: '',
        redirect: '/admin/main'
      },
      {
        path: '/admin/main',
        name: 'Admin Main',
        component: () => import('@/views/admin/admin.vue')
      }
    ]
  }
]
export default AdminRouter
