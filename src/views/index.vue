<template>
  <div>
    <h1>我是父元素</h1>
    <child title="静态文字"
           :img-width="344"
           :img-height="imgHeight"
           :before-close="closeFuction"
           @editorEmit='editorEmit1'></child>
    <orange></orange>
    <apple></apple>
    <banana></banana>
    <peach></peach>
  </div>
</template>
<script>
import child from './propsBusExample/child.vue' // 引入子组件
import orange from './eventBusExample/orange.vue' // 引入子组件
import apple from './eventBusExample/apple.vue' // 引入子组件
import banana from './vuexExample/banana.vue' // 引入子组件
import peach from './vuexExample/peach.vue' // 引入子组件
export default {
  data () {
    return {
      imgHeight: 300
    }
  },
  components: {
    child, // 声明子组件
    orange,
    apple,
    banana,
    peach
  },
  methods: {
    closeFuction () {
      console.log('叫爸爸！')
    },
    editorEmit1 (msg) {
      console.log('儿子你说啥？')
      console.log(msg)
    }
  }
}
</script>
