import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Club from './views/Club.vue'
import ClubSchedule from './views/ClubSchedule.vue'
import Purchase from './views/Purchase.vue'
import Thanks from './views/Thanks.vue'
import Mypage from './views/Mypage.vue'
import Login from './views/Login.vue'
import User from './views/User.vue'

import Test from './views/shop/Test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/test',
      name: 'test',
      component: Test
    },

    {
      path: '/club',
      name: 'club',
      component: Club
    },
    {
      path: '/club/schedule',
      name: 'club_schedule',
      component: ClubSchedule
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: Purchase
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: Mypage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
