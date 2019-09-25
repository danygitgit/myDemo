import Vuex from 'vuex' // 引入Vuex
import Vue from 'vue' // 引入Vue
// 使用Vuex
Vue.use(Vuex)

// 创建Vuex实例
const store = new Vuex.Store({
  // state：vuex中的数据源，我们需要保存的数据就保存在这里，可以在页面通过 this.$store.state.stateName来获取我们定义的数据；
  state: {
    stateName: '哈哈哈'
  },
  // mutations：修改store中的值唯一的方法就是提交mutation，可以在组件中使用 this.$store.commit('xxx') 提交 mutation
  mutations: {
    mutationsName (state, params) { // 定义更改state的方法，可以传参，必须是同步函数
      state.stateName = params
    }
  },
  // Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。类似于vue的methods。可以在组件中使用this.$store.dispatch('actionName', 'xxx')分发
  actions: {
    actionName (contest, params) { // 触发mutation 方法要用commit分发，以此改变state
      contest.commit('mutationsName', params)
    }
  },
  // getters：相当于Vue中的computed,可以用于监听、state中的值的变化，返回计算后的结果。可以在组件中使用this.$store.getters.getStateName获取其中的值
  getters: {
    getStateName: state => {
      return state.stateName
    }
  }

})
export default store // 导出store
