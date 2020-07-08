<template>
  <div class="app">
    <div class="views">
      <div class="el">
        <v-animation
          :name="playAnimation"
          :duration="forms.duration"
        >
          <img alt="VAnimation" src="./assets/logo.png" class="el__img">
          <h1 class="el__title">vAnimation</h1>
        </v-animation>
      </div>
    </div>
    <attr class="attr-wrap" @on-change="onAttrChange" @on-copy="onCopy"/>
    <type class="type-wrap" @on-change="onTypeChange" />
  </div>
</template>

<script>
import type from './components/type'
import attr from './components/attr'
export default {
  components: { type, attr },
  data() {
    return {
      forms: {
        name: [],
        duration: 1.4,
        delay: 0,
        count: 1,
        infinite: false,
        direction: 'normal' // normal 默认值。动画应该正常播放。 alternate 动画应该轮流反向播放。
      },
      playAnimation: []
    }
  },
  methods: {
    onCopy() {
      if (this.playAnimation.length <= 0) {
        return false
      }
      const textarea = document.createElement('textarea')
      textarea.value = this.playAnimation.join(' ')
      textarea.style.cssText = 'position: fixed;left:-10000px;top: -10000px;z-index: -1;'
      textarea.value = this.playAnimation.join(' ')
      document.body.appendChild(textarea)
      textarea.select()
      textarea.setSelectionRange(0, textarea.value.length)
      const result = document.execCommand('Copy')
      if (result) {
        this.$notify.success('复制成功')
      }
      document.body.removeChild(textarea)
    },
    onAttrChange(e) {
      console.log(e)
    },
    onTypeChange(e) {
      this.playAnimation = e
    }
  }
  // directives: {
  //   copy: {
  //     bind(el) {
  //       console.log(el)
  //     },
  //     unbind(el) {
  //       // el.removeEventListener('click')
  //     }
  //   }
  // }
}
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .app {
    width: 100vw;
    height: 100vh;
    display: flex;
    background: #eaeaea;
  }
  .views {
    position: relative;
    overflow: hidden;
    flex: 1;
    margin-right: 400px;
  }
  .el {
    width: 340px;
    display: block;
    margin: 180px auto 0;
    &__img {
      width: 100%;
      display: block;
    }
    &__title {
      font-size: 50px;
      text-align: center;
      margin-top: 20px;
    }
  }
  .attr-wrap {
    width: 300px;
    right: 300px;
    top: 10px;
  }
  .type-wrap {
    width: 280px;
    right: 10px;
    top: 10px;
    bottom: 10px;
  }
</style>
