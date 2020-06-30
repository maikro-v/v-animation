import VAnimation from './components/index.vue'
import 'animate.css'

VAnimation.install = (Vue) => {
  Vue.component(VAnimation.name, VAnimation)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  VAnimation.install(window.Vue)
}

export default VAnimation
