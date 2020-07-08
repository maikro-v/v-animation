<template>
  <suspend>
    <template slot="title">已选动画</template>
    <div
      v-for="(item, index) in animationData"
      :key="index"
      class="list"
    >
      <div class="list__icon"></div>
      <p class="list__name">{{ item.name }}</p>
    </div>
  </suspend>
</template>

<script>
import suspend from '../suspend'
export default {
  components: { suspend },
  data() {
    return {
      animationData: []
    }
  },
  methods: {
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
