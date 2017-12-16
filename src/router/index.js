import Vue from 'vue'
import Router from 'vue-router'
import Gameui from '@/components/Gameui'
import Lottery from '@/components/games/Lottery'
import Shake from '@/components/games/Shake'
import {Routeurls} from '@/api/Configrouter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: Routeurls.gameui_route,
      name: 'Gameui',
      component: Gameui
    },
    {
      path: Routeurls.lottery_route,
      name: 'Lottery',
      component: Lottery
    },
    {
      path: Routeurls.shake_route,
      name: 'Shake',
      component: Shake,
      // beforeEnter: (to, from, next) => {
      //   next()
      // }
    }
  ]
})
