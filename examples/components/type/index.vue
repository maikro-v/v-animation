<template>
  <div class="suspend type">
    <div class="type__title">
      动画
    </div>
    <div
      v-for="(item, index) in animationData"
      :key="index"
      class="list"
      :class="isChecked(item.value)"
      @click="handleChecked(item)"
    >
      <div class="list__icon"></div>
      <p class="list__name">{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import animationData from './data'
export default {
  data() {
    return {
      checkeds: [],
      animationData
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
  .suspend {
    position: fixed;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    border-radius: 6px;
    padding: 10px;
  }
  .type {
    width: 280px;
    right: 10px;
    top: 10px;
    bottom: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    &__title {
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      color: #838383;
    }
  }
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
