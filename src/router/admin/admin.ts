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
        name: 'Admin Menu',
        component: () => import('@/components/admin/menu/menu-manage.vue')
      },
      {
        path: '/admin/navigation',
        name: 'Admin Navigation',
        component: () => import('@/components/admin/navigation/navigation-manage.vue')
      },
    ]
  }
]
export default AdminRouter
