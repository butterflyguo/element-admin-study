import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export const constantRoutes= [ //默认路由
  { path: '/login', component: ()=> import('@/views/login/index.vue'), hidden: true },
  { path: '/404', component: ()=> import('@/views/error-page/404.vue'),hidden: true },
  { path:'/',redirect:'/login'}
]

export const asyncRoutes = [
  //{path: '/user-manage', component: ()=> import('@/views/user-manage/index')}
]



const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router