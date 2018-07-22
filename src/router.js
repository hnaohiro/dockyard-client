import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Club from './views/Club.vue'
import ClubSchedule from './views/ClubSchedule.vue'
import Purchase from './views/Purchase.vue'
import Thanks from './views/Thanks.vue'
import Mypage from './views/Mypage.vue'
import Pass from './views/Pass.vue'
import Login from './views/Login.vue'
import User from './views/User.vue'

import Qr from './views/shop/Qr.vue'
import DisplayUser from './views/shop/DisplayUser.vue'
import EntranceSuccess from './views/shop/EntranceSuccess.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/qr',
      name: 'qr',
      component: Qr
    },

    {
      path: '/displayUser',
      name: 'displayUser',
      component: DisplayUser
    },

    {
      path: '/entranceSuccess',
      name: 'entranceSuccess',
      component: EntranceSuccess
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
      path: '/pass',
      name: 'pass',
      component: Pass
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
