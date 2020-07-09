<template>
  <suspend>
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
<!--      <el-form-item label="反向播放:">-->
<!--        <el-radio-group v-model="forms.direction" size="mini">-->
<!--          <el-radio-button :label="0">正常播放</el-radio-button>-->
<!--          <el-radio-button :label="1">反向播放</el-radio-button>-->
<!--        </el-radio-group>-->
<!--      </el-form-item>-->
      <el-form-item label="复制动画:">
        <el-button type="danger" size="small" @click="handleCopy">复制已选动画</el-button>
      </el-form-item>
    </el-form>
  </suspend>
</template>

<script>
import suspend from '../suspend'
export default {
  components: { suspend },
  data() {
    return {
      forms: {
        duration: 1.4,
        delay: 0,
        count: 1,
        infinite: false,
        direction: 0
      }
    }
  },
  watch: {
    forms: {
      handler() {
        // 这里需要一个防抖优化
        this.onChange()
      },
      deep: true
    }
  },
  methods: {
    onChange() {
      this.$emit('on-change', this.forms)
    },
    handleCopy() {
      this.$emit('on-copy')
    }
  }
}
</script>

<style lang="scss" scoped>
  .count {
    width: 100%;
    &__item {
      width: 50%;
      display: inline-block;
    }
  }
</style>
