<template>
  <suspend>
    <template slot="title">动画</template>
    <div
      v-for="(item, index) in animationData"
      :key="index"
      :class="isChecked(item.value)"
      :title="item.name"
      class="list"
      @click="handleChecked(item)"
    >
      <div class="list__icon"></div>
      <p class="list__name">{{ item.name }}</p>
    </div>
  </suspend>
</template>

<script>
import animationData from './data'
import suspend from '../suspend'
export default {
  components: { suspend },
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      checkeds: [],
      animationData,
      menuList: ['复制'],
      isInit: false
    }
  },
  mounted() {
    if (this.value && this.value.length) {
      this.checkeds.push(...this.value)
    }
  },
  methods: {
    isChecked(row) {
      if (this.checkeds.includes(row)) {
        return 'list_active'
      }
    },
    handleChecked(row) {
      const index = this.checkeds.indexOf(row.value)
      if (index === -1) {
        this.checkeds.push(row.value)
      } else {
        this.checkeds.splice(index, 1)
      }
      this.$emit('on-change', this.checkeds)
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    width: 33.33%;
    display: inline-block;
    text-align: center;
    padding: 12px 4px;
    cursor: pointer;
    &__icon {
      width: 40px;
      height: 40px;
      background: url('../../assets/use-animate.png') no-repeat 0 0 / 401px 920px;
      margin: 0 auto;
    }
    &__name {
      line-height: 1;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    &_active {
      .list__icon {
        background-position: 0 -480px;
      }
      .list__name {
        color: #1593ff;
      }
    }
  }
</style>
