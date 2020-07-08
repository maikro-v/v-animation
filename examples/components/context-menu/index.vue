<template>
  <div class="context-menu" @click="handleClick">
    <div @contextmenu="handleOpenMenu">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowMenu: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
    handleOpenMenu() {
      this.isShowMenu = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
