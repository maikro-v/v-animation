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
    <div class="suspend attr">
<!--      <el-tag></el-tag>-->
      <el-form
        :model="forms"
        class="side__form"
        label-position="left"
        label-width="80px"
      >
        <el-form-item label="时间:">
          <el-slider v-model="forms.duration" :min="0" :max="10" :step="0.5" />
        </el-form-item>
        <el-form-item label="延迟:">
          <el-slider v-model="forms.delay" :min="0" :max="10" :step="0.5" />
        </el-form-item>
        <el-form-item label="次数:">
          <div class="count">
            <span class="count__item">
              <el-checkbox
                v-model="forms.infinite"
                border
                size="mini"
              >
                无限播放
              </el-checkbox>
            </span>
            <span v-show="!forms.infinite" class="count__item">
              <el-input-number v-model="forms.count" controls-position="right" size="mini" style="width: 100%;"/>
            </span>
          </div>
        </el-form-item>
        <el-form-item label="反向播放:">
          <el-radio-group v-model="forms.direction" size="mini">
            <el-radio-button label="normal">正常播放</el-radio-button>
            <el-radio-button label="alternate">反向播放</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <type @on-change="onTypeChange"/>
  </div>
</template>

<script>
import type from './components/type/index'
export default {
  components: { type },
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
    onTypeChange(e) {
      this.playAnimation = e
    }
  }
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
  .suspend {
    position: fixed;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    border-radius: 6px;
    padding: 10px;
  }
  .attr {
    width: 300px;
    right: 300px;
    top: 10px;
  }
  .list {
    width: 100%;
    display: block;
  }
  .count {
    width: 100%;
    &__item {
      width: 50%;
      display: inline-block;
    }
  }
  .tag {
    margin-right: 6px;
    margin-bottom: 6px;
  }
</style>
