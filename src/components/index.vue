<template>
  <div class="animate__animated" :class="[animationName]" :style="animationOptions">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'v-animation',
  props: {
    name: {
      type: String,
      required: true
    },
    duration: {
      type: Number
    }
  },
  computed: {
    animationName() {
      return `animate__${this.name}`
    },
    animationOptions() {
      const obj = {}
      if (this.duration && this.duration === 0) {
        obj.animationDuration = `${this.duration}s`
      }
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
