import Component from './src/main'

Component.install = (Vue) => {
  Vue.component(Component.name, Component)
}

export default Component
