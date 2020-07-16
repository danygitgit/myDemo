<!-- 我的页面 -->
<template>
  <div>
    <el-button @click.stop="sortUp(selectRowIndex, selectRow)">向上↑</el-button>
    <el-button @click.stop="sortDown(selectRowIndex, selectRow)">向下↓</el-button>
    <el-table @row-click="rowClick"
              :data="tableData"
              highlight-current-row
              style="width: 100%">
      <el-table-column prop="date"
                       label="日期"
                       width="180"></el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="180"></el-table-column>
      <el-table-column label="地址">
        <template slot-scope="scope">
          <el-button size="mini"
                     type="text"
                     @click.stop="sortUp(scope.$index, scope.row)">向上↑</el-button>
          <el-button size="mini"
                     type="text"
                     @click.stop="sortDown(scope.$index, scope.row)">向下↓</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'
import Vue from "vue";

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      selectRow: "",
      selectRowId: "",
      selectRowIndex: '',
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小狗",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小猫",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小老鼠",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  // 监听属性 类似于data概念
  // 方法集合
  methods: {
    rowClick (row, column, event) {
      this.selectRow = row;
      this.selectRowIndex = this.tableData.findIndex(el => {
        return el == row
      });
    },
    // 上移按钮
    sortUp (index, row) {
      if(index === ''){
        this.$message({
          message: "请选择需要上移的内容",
          type: "warning"
        });
        return
      }
      if (index === 0) {
        this.$message({
          message: "已经是列表中第一个素材！",
          type: "warning"
        });
      } else {
        let temp = this.tableData[index - 1];
        Vue.set(this.tableData, index - 1, this.tableData[index]);
        Vue.set(this.tableData, index, temp);
        this.selectRowIndex -= 1
      }
    },
    // 下移按钮
    sortDown (index, row) {
      if(index === ''){
        this.$message({
          message: "请选择需要下移的内容",
          type: "warning"
        });
        return
      }
      if (index === this.tableData.length - 1) {
        this.$message({
          message: "已经是列表中最后一个素材！",
          type: "warning"
        });
      } else {
        let i = this.tableData[index + 1];
        Vue.set(this.tableData, index + 1, this.tableData[index]);
        Vue.set(this.tableData, index, i);
        this.selectRowIndex += 1
      }
    }
  }
};
</script>

<style scoped>
</style>
