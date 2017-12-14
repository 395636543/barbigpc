import Vue from 'vue'
import Shake from './Shake.vue'
import  VueResource  from 'vue-resource'

Vue.use(VueResource);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#shake',
  render: h => h(Shake)
})
