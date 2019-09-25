
<template>
  <div class="hello">
    <h1>我是橙子</h1>
    <h1>{{ title }}</h1>
    <button @click="doSomething">点击触发eventBus</button>
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
  methods: {
    // $emit触发事件getTarget事件
    doSomething () {
      // 向getTarget方法传参22
      eventBus.$emit('getTarget', 22)
    }
  }
}
</script>
<style scoped>
.hello {
  background: orange;
}
</style>
