
<template>
  <div class="hello">
    <h1>我是桃子</h1>
    mapState取值：<h2>{{ stateName }}</h2>
    mapGetters取值：<h2>{{ getStateName }}</h2>
    <button @click="clickAction">使用action改值</button>
    <button @click="clickMutation">使用mutation改值</button>
    <button @click="clickCommit">使用commit改值</button>
    <button @click="clickDispatch">使用dispatch改值</button>

  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  name: 'peach',
  computed: {
    ...mapGetters(['getStateName']),
    ...mapState(['stateName'])
  },

  methods: {
    // 使用辅助函数直接将触发函数映射到methods上
    ...mapActions(['actionName']),
    ...mapMutations(['mutationsName']),
    // 点击触发
    clickAction () {
      this.actionName('使用action改值')
    },
    clickMutation () {
      this.mutationsName('使用mutation改值')
    },
    clickCommit () {
      this.$store.commit('mutationsName', '使用commit改值')
    },
    clickDispatch () {
      this.$store.dispatch('actionName', '使用dispatch改值')
    }
  }
}
</script>
<style scoped>
.hello {
  background: pink;
}
</style>
