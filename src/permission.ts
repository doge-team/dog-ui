import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'
import { ElMessage } from 'element-plus'
import { userStoreModule } from './store/modules/user/user'
NProgress.configure({ showSpinner: false })

const whitList = ['/login']

router.beforeEach(async(to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
  // Start progress bar
  NProgress.start()
  // Determine whether the user has logged in
  if (userStoreModule.token) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      next({ path: '/main' })
    }
    next()
  } else {
    if(whitList.indexOf(to.path) > -1) {
      next();
    } else {
      ElMessage.error('你没有权限访问此页面，请先登录')
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login`)
    }
  }
  NProgress.done()
})

router.afterEach((to: RouteLocationNormalized) => {
  console.log(to)
  NProgress.done()
})
