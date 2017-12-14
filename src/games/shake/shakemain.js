import Vue from 'vue'
import Shake from './Shake.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#shake',
  render: h => h(Shake)
})
