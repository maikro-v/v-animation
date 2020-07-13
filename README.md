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

# props
- #### <a href="#animationName">name - 动画名称</a>
- #### <a href="#animationDuration">duration - 执行时长</a>
- #### <a href="#animationDelay">delay - 延迟时长</a>
- #### <a href="#animationCount">count - 执行次数</a>
- #### <a href="#animationInfinite">infinite - 是否无限循环</a>

## name 设置动画名称 <a id="animationName"></a>
#### 1. 使用字符串
```vue
<template>
  <v-animation name="bounce">
    v-animation
  </v-animation>
</template>
```

#### 2. 使用数组
```vue
<template>
  <v-animation :name="animationName">
    v-animation
  </v-animation>
</template>
<script>
export default {
  data() {
    return {
      animationName: ['bounce']
    } 
  }
}
</script>
```

## duration 设置动画时长，单位 <a id="animationDuration"></a>
```vue
<template>
  <v-animation
    name="bounce"
    :duration="2"
  >
    v-animation
  </v-animation>
</template>
```

