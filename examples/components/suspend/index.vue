<template>
  <div class="suspend">
    <div class="suspend__title" v-if="$slots.title">
      <slot name="title" />
    </div>
    <div class="suspend__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .suspend {
    position: fixed;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    border-radius: 6px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    &__title {
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      color: #838383;
    }
    &__content {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        width: 6px;
      }
      &::-webkit-scrollbar-thumb {
        width: 100%;
        background: #8c939d;
        border-radius: 4px;
      }
    }
  }
</style>
