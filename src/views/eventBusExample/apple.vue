
<template>
  <div class="hello">
    <h1>我是苹果</h1>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import eventBus from '@/utils/eventBus.js'

export default {
  name: 'orange',
  data () {
    return {
      title: 300
    }
  },
  // 我们在created钩子中监听方法
  created () {
    // 在created（）钩子中调用eventBus监听getTarget事件，并接受参数,绑定方法
    eventBus.$on('getTarget', this.getTarget)
    // eventBus.$on('getTarget', target => {  // 也可以在后面直接写方法
    //   this.title = target
    // })
  },
  beforeDestroy () {
    // 组件销毁前需要解绑事件。否则会出现重复触发事件的问题
    eventBus.$off('getTarget', this.getTarget)
  },
  methods: {
    getTarget (param) {
      this.title = param
    }
  }
}
</script>
<style scoped>
.hello {
  background: red;
}
</style>
