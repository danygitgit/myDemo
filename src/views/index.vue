<template>
  <div>
    <!-- <h1>{{name}}</h1> -->
    <!-- <child title="静态文字"
           :img-width="344"
           :img-height="imgHeight"
           :before-close="closeFuction"
           @editorEmit='editorEmit1'></child> -->
    <!-- <orange></orange>
    <apple></apple>
    <banana></banana>
    <peach></peach> -->
    <listInline2></listInline2>

    <listInline></listInline>
  </div>
</template>
<script>
import child from './propsBusExample/child.vue' // 引入子组件
import orange from './eventBusExample/orange.vue' // 引入子组件
import apple from './eventBusExample/apple.vue' // 引入子组件
import banana from './vuexExample/banana.vue' // 引入子组件
import peach from './vuexExample/peach.vue' // 引入子组件
import listInline from './list/listInline.vue' // 引入子组件
import listInline2 from './list/listInline2.vue' // 引入子组件
export default {
  data () {
    return {
      imgHeight: 300,
      name: '我是父元素'
    }
  },
  components: {
    child, // 声明子组件
    orange,
    apple,
    banana,
    peach,
    listInline,
    listInline2
  },
  methods: {
    closeFuction () {
      console.log('叫爸爸！')
    },
    editorEmit1 (msg) {
      console.log('儿子你说啥？')
      console.log(msg)
      this.name = msg
    }
  }
}
</script>
