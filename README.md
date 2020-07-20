# v-animation

![alt demo](http://maikro.cn/upload/cfacdbf0-c96a-11ea-99fd-151b281bc120.png)

# 安装
```shell
  npm install v-animation -S
```

# VAnimation是什么
VAnimation 是一款便捷易使用的vue的动画组件，它集成了强大的预设css3动画库[amiante.css](https://animate.style)。

# 效果预览
## [预览效果](http://maikro.gitee.io/v-animation)

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

## 属性 Attributes
具体使用方法看[详细实例](#example)

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|<a href="#animationName">name</a>| 动画名称，可用数组方式设置多个 | Array/String | - |
|<a href="#animationDuration">duration</a>| 执行时长 | Number | - |
|<a href="#animationDelay">delay</a>| 延迟时长 | Number | - |
|<a href="#animationCount">count</a>| 执行次数，如果设置了infinite="true"，此属性无效 | Number | 1 |
|<a href="#animationInfinite">infinite</a>| 是否无限循环 | Boolean | false |

## 示例 <a id="example"></a>
#### 1. 单个动画
```vue
<template>
  <v-animation name="bounce">
    v-animation
  </v-animation>
</template>
```

#### 2. 多个动画
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
      animationName: ['bounce', 'backInUp']
    } 
  }
}
</script>
```

#### 3. 多个动画定义其它属性，优先级高于属性方式
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
      animationName: [{
        name: 'bounce',
        duration: 3,
        infinite: true
      }]
    } 
  }
}
</script>
```

## Issues
[https://github.com/maikro-v/v-animation/issues](https://github.com/maikro-v/v-animation/issues)

## License
[MIT](https://opensource.org/licenses/MIT)  

Copyright (c) 2020-present, Maikro
