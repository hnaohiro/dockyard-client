import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import LoginInfo from './views/LoginInfo.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/login/info',
      name: 'login_info',
      component: LoginInfo
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
