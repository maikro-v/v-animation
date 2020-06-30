function importAll(r) {
  const arr = {}
  r.keys().forEach(key => {
    arr[r(key).default.name] = r(key).default
  })
  return arr
}

const components = importAll(require.context('../packages/', true, /index\.js$/))

const install = (Vue) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  ...components
}
