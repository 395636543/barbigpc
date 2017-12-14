import Vue from 'vue'
import Router from 'vue-router'
import Gameui from '@/components/Gameui'
// import Httpdata from "../Httpdata";
import Pascreenui from '@/components/Pascreenui'
// import Shake from '@/games/shake/Shake'
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
    }
    // {
    //   path: '/',
    //   name: 'Shake',
    //   component: Shake
    // }
  ]
})
