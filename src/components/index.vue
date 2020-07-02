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
    /*
    * 动画名称或一个数组，列如：'bounce' | ['bounce'] | [ { name: 'bounce', duration: '2s' } ]
    * */
    name: {
      type: [String, Array],
      required: true
    },
    duration: {
      type: Number
    },
    delay: {
      type: Number
    },
    count: {
      type: Number
    }
  },
  data() {
    return {
      animationRef: `animation-ref-${(new Date().getTime() + randomNum(0, 10000)).toFixed(0)}`,
      animations: [] // 动画队列
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
        this.animations = []
        this.animations.push(...this.createQueue())
      },
      immediate: true
    },
    animations: {
      handler(val) {
        this.$nextTick(() => {
          this.runAllAnimation(val)
        })
      },
      deep: true
    }
  },
  methods: {
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
        if (animation.duration) el.style.animationDuration = `${animation.duration}s`
        if (animation.delay) el.style.animationDelay = `${animation.delay}s`
        const resolveFun = () => {
          el.removeEventListener('animationend', resolveFun, false)
          el.addEventListener('animationcancel', resolveFun, false)
          resolve()
        }
        el.addEventListener('animationend', resolveFun, false)
      })
    },
    /**
     * 播放所有动画
     */
    async runAllAnimation(animations) {
      for (let i = 0, len = animations.length; i < len; i++) {
        await this.runAnimation(this.$animate, animations[i])
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
      let obj = {}
      if (isString(animation)) {
        obj = Object.assign(this.createAnimationAttr(), {
          name: animation
        })
        this.animationName.push(obj)
      } else if (isArray(animation)) {
        animation.forEach(item => {
          let obj = this.createAnimationAttr()
          // 数组形式兼容传字符串和对象两种形式
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
        obj.duration = this.duration
      }
      if (this.delay) {
        obj.delay = this.delay
      }
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
