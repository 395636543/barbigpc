import Vue from 'vue'
import Lottery from './Lottery.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#lottery',
  render: h => h(Lottery)
})
