import Vue from 'vue'
import App from './app.vue'
import SEUI from '../src'

Vue.use(SEUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
