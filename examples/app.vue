<template>
  <div class="app">
    <div class="views">
      <div class="el">
        <v-animation
          :name="playAnimation"
          :duration="forms.duration"
          :delay="forms.delay"
          :count="forms.count"
          :infinite="forms.infinite"
          :direction="forms.direction"
          class="logo"
        >
          <img alt="VAnimation" src="./assets/logo.png" class="el__img_absolute">
          <img alt="VAnimation" src="./assets/logo.png" class="el__img_shadow">
        </v-animation>
        <v-animation :name="['fadeInLeft']" :delay="2">
          <h1 class="el__title">v</h1>
        </v-animation>
        <v-animation name="fadeInTopLeft" :delay="1.8">
          <h1 class="el__title">A</h1>
        </v-animation>
        <v-animation name="backInDown" :delay="1.6">
          <h1 class="el__title">n</h1>
        </v-animation>
        <v-animation name="zoomInRight" :delay="1" :duration="2">
          <h1 class="el__title">i</h1>
        </v-animation>
        <v-animation name="zoomInUp" :delay="1" :duration="2">
          <h1 class="el__title">m</h1>
        </v-animation>
        <v-animation name="zoomInDown" :delay="1" :duration="2">
          <h1 class="el__title">a</h1>
        </v-animation>
        <v-animation name="zoomInLeft" :delay="1" :duration="2">
          <h1 class="el__title">t</h1>
        </v-animation>
        <v-animation name="bounceIn" :delay="1">
          <h1 class="el__title">i</h1>
        </v-animation>
        <v-animation name="bounceInDown" :delay=".4">
          <h1 class="el__title">o</h1>
        </v-animation>
        <v-animation name="bounceInLeft" :delay="0">
          <h1 class="el__title">n</h1>
        </v-animation>
      </div>
    </div>
    <attr class="attr-wrap" @on-change="onAttrChange" @on-copy="onCopy"/>
    <type :value="playAnimation" class="type-wrap" @on-change="onTypeChange" />
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
        duration: 1,
        delay: 2.8,
        count: 1,
        infinite: false,
        direction: 0 // 0正向播放 1反向播放
      },
      playAnimation: ['bounceIn']
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
      this.forms = { ...this.forms, ...e }
    },
    onTypeChange(e) {
      this.playAnimation.length = 0
      this.playAnimation.push(...e)
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
    background: #3a3a3a;
  }
  .views {
    position: relative;
    overflow: hidden;
    flex: 1;
    margin-right: 400px;
  }
  .logo {
    position: relative;
  }
  .el {
    width: 340px;
    display: block;
    margin: 180px auto 0;
    &__img {
      width: 100%;
      display: block;
      &_shadow {
        filter: blur(100px);
      }
      &_absolute {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 1;
      }
    }
    &__title {
      font-size: 50px;
      text-align: center;
      margin-top: 20px;
      color: white;
      text-shadow: 4px 2px 6px rgba(255, 255, 255, .4);
      margin-left: 2px;
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
