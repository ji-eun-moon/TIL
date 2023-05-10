import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView.vue'
import LoginView from '@/views/LoginView'

Vue.use(VueRouter)
// 라우터 가드 - 로그인 여부에 대한 임시 변수
const isLoggedIn = false

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hello/:userName',
    name: 'hello',
    component: HelloView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    // 라우터 가드
    beforeEnter(to, from, next){
      if (isLoggedIn === true){
        console.log('이미 로그인 함')
        next({name:'home'})
      } else {
        next()  // 로그인이 안되어 있다면 로그인 페이지로 이동
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 전역 가드
// router.beforeEach((to, from, next) => {
//   // 로그인 여부
//   // const isLoggedIn = true // 로그인 됨
//   const isLoggedIn = false // 로그인 안됨

//   // 로그인이 필요한 페이지
//   const authPages = ['hello']
  
//   // 앞으로 이동할 페이지(to)가 로그인이 필요한 사이트인지 확인
//   const isAuthRequired = authPages.includes(to.name)
  
//   // Login하지 않아도 되는 페이지들을 모아 둘수도 있음
//   // const allowAllPages = ['login']
//   // const isAuthRequired = !allowAllPages.includes(to.name)

//   // 로그인이 필요한 페이지인데 로그인이 안되어있다면 로그인 페이지로 이동
//   if (isAuthRequired && !isLoggedIn) {
//     console.log('Login으로 이동!')
//     next({ name: 'login' })
//   } else {
//     console.log('to로 이동!')
//     next()
//   }
//   // next()가 호출되어야 화면이 전환됨
// })
export default router
