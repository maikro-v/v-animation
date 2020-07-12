# v-animation

![alt demo](/examples/assets/demo.png)

# 安装
```shell
    npm install v-animation -S
```

# VAnimation是什么
VAnimation 是一款便捷易使用的vue的动画组件，它集成了强大的预设css3动画库[amiante.css](https://animate.style)。

# 效果预览
[预览链接](https://maikro-v.github.io/v-animation/index/index)

# 注册组件
### 1. 全局注册
> main.js
```javascript
  import Vue from 'Vue'
  import VAnimation from 'v-animation'
  
  Vue.use(VAnimation)
```
> app.vue
```vue
  <template>
    <v-animation name="bounce">
      v-animation
    </v-animation>
  </template>
  <script>
    export default {}
  </script>
```

# 属性
