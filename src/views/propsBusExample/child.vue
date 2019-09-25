
<template>
  <div class="hello">
    <h1>我是子元素</h1>
    <h1>{{ title }}</h1>
    <button @click="clickEmit">点我给父元素传值</button>
  </div>
</template>

<script>
export default {
  name: 'child',
  // 接收父子组件参数
  props: {
    imgWidth: {
      type: Number, // 数据类型
      default: 300 // 默认值
    },
    imgHeight: {
      type: Number
    },
    title: {
      type: String,
      default: ''
    },
    beforeClose: {
      type: Function,
      default: function () {
        console.log('你闭嘴')
      }
    }
  },
  created () {
    console.log(this.imgWidth)
    console.log(this.imgHeight)
    this.beforeClose()
  },
  methods: {
    // $emit给父组件传值
    clickEmit () {
      this.$emit('editorEmit', '你这个糟老头太坏了！')
    }
  }
}
</script>
<style scoped>
.hello {
  background: yellow;
}
</style>
