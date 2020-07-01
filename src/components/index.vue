<template>
  <div :ref="animationRef" class="animate__animated">
    <slot />
  </div>
</template>

<script>
import { isArray, isObject, isString, randomNum } from '../libs/tools'

export default {
  name: 'v-animation',
  props: {
    name: {
      type: [String, Array],
      required: true
    },
    duration: {
      type: Number
    }
  },
  data() {
    return {
      animationRef: `animation-ref-${(new Date().getTime() + randomNum(0, 10000)).toFixed(0)}`,
      animations: []
    }
  },
  computed: {
    $animate() {
      return this.$refs[this.animationRef]
    }
  },
  watch: {
    name: {
      handler(val) {
        this.animations = this.createQueue()
        console.log(this.animations)
      },
      immediate: true
    }
  },
  mounted() {
    this.runAllAnimation()
  },
  methods: {
    init() {
      this.$animate.addEventListener('animationstart', (e) => {
        this.$emit('animationstart', e)
      }, false)
      this.$animate.addEventListener('animationend', (e) => {
        e.target.className = 'animate__animated'
        this.$emit('animationend', e)
      }, false)
    },
    /**
     * 执行动画
     * @param el 播放动画的元素
     * @param animation 动画选项
     * @param animation.name 动画名称
     * @param animation.duration 动画时长 单位：秒
     * @return {Promise<void>}
     */
    runAnimation(el, animation = {}) {
      return new Promise(resolve => {
        el.style.animationName = animation.name
        // 动画时长时间
        if (animation.duration) {
          el.style.animationDuration = animation.duration
        }
        const resolveFun = () => {
          el.removeEventListener('animationend', resolveFun, false)
          el.removeEventListener('animationcancel', resolveFun, false)
          resolve()
        }
        el.addEventListener('animationend', resolveFun, false)
        el.addEventListener('animationcancel', resolveFun, false)
      })
    },
    async runAllAnimation() {
      for (let i = 0, len = this.animations.length; i < len; i++) {
        await this.runAnimation(this.$animate, this.animations[i])
      }
      return Promise.resolve()
    },
    /**
     * 创建动画队列
     * @param animation 动画名称或一个数组，列如：'bounce' | ['bounce'] | [ { name: 'bounce', duration: '2s' } ]
     * @returns {Array}
     */
    createQueue(animation = this.name) {
      const arr = []
      // const prefix = 'animate__'
      let obj = {}
      // 如果是字符串push到数组中
      if (isString(animation)) {
        obj = Object.assign(this.createAnimationAttr(), {
          name: animation
        })
        this.animationName.push(obj)
      } else if (isArray(animation)) {
        // 如果是数组循环添加到数组中
        animation.forEach(item => {
          let obj = this.createAnimationAttr()
          // 数组格式兼容传字符串和对象两种形式
          if (isString(item)) {
            obj = Object.assign(obj, {
              name: item
            })
          } else if (isObject(item)) {
            obj = Object.assign(obj, item)
          }
          arr.push(obj)
        })
      }
      return arr
    },
    /**
     * 创建动画的属性
     * @returns {Object}
     */
    createAnimationAttr() {
      const obj = {}
      if (this.duration) {
        obj.duration = `${this.duration}s`
      }
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
