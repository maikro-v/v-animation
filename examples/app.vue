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
    <div class="suspend type">
      <div class="tag-wrap">
        <el-tag
          v-for="(item, index) in forms.name"
          :key="index"
          size="small"
          closable
          class="tag"
          @close="handleCloseTag(index)"
        >
          {{ item }}
        </el-tag>
      </div>
      <el-checkbox-group v-model="forms.name" @change="handleTypeChange">
        <el-row>
          <el-col
            v-for="(item, index) in animationData"
            :key="index"
            :span="24"
          >
            <el-checkbox
              :label="item.value"
            >
              {{ item.name }}
            </el-checkbox>
          </el-col>
        </el-row>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
import animationData from './data/animationData'
export default {
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
      playAnimation: [],
      animationData
    }
  },
  computed: {
    hasInfinite() {
      console.log(this.forms.count === 'infinite')
      return this.forms.count === 'infinite'
    }
  },
  methods: {
    handleCloseTag(index) {
      this.forms.name.splice(index, 1)
    },
    handleTypeChange(row) {
      this.playAnimation = []
      this.playAnimation.push(...row)
      console.log(row)
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
  .type {
    width: 280px;
    right: 10px;
    top: 10px;
    bottom: 10px;
    overflow-y: auto;
    overflow-x: hidden;
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
