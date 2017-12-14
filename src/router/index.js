import Vue from 'vue'
import Router from 'vue-router'
import Gameui from '@/components/Gameui'
import Pascreenui from '@/components/Pascreenui'
import Shakecomponent from '@/games/shake/Shakecomponent.vue'
Vue.use(Router)

// 使用
// Vue.use(Httpdata);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gameui',
      component: Gameui
    },
    {
      path: '/',
      name: 'Pascreenui',
      component: Pascreenui
    },
    {
      path: '/',
      name: 'Shakecomponent',
      component: Shakecomponent
    }
  ]
})
