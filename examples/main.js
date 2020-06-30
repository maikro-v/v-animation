import Vue from 'vue'
import App from './app.vue'
import VAnimation from '../src'

Vue.use(VAnimation)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
