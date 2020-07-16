<template>
  <div class="list">
    <h1>{{ msg }}</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/">List</router-link>
    <ul>
      <li v-for="(item,index) in newsList"
          track-by="index">
        <span class="title">{{item.title}}</span>
        <div class="operate">
          <span @click="del(index)">删除</span>
          <span @click="sortUp(index)">向上↑</span>
          <span @click="sortDown(index)">向下↓</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "list",
  data () {
    return {
      msg: "list",
      newsList: [
        {
          id: 1,
          title: "11111",
          descript: "descript1"
        },
        {
          id: 2,
          title: "22222",
          descript: "descript2"
        },
        {
          id: 3,
          title: "33333",
          descript: "descript3"
        },
        {
          id: 4,
          title: "44444",
          descript: "descript4"
        }
      ]
    };
  },
  methods: {
    del (index) {
      this.newsList.splice(index, 1);
    },
    sortUp (index) {
      if (index === 0) {
        alert("到顶了！");
      } else {
        this.newsList.push(this.newsList.shift());
      }
    },
    sortDown (index) {
      if (index === this.newsList.length - 1) {
        alert("到底了！");
      } else {
        this.newsList.unshift(this.newsList.pop());
      }
    }
  }
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
}

li {
  width: 500px;
  border: 1px solid #ccc;
  margin: 10px;
  line-height: 30px;
  height: 30px;
  padding: 5px;
}

a {
  color: #42b983;
}

.operate {
  float: right;
}

.operate span:first-of-type {
  color: #f00;
}

.operate span {
  cursor: pointer;
  color: #42b983;
}
</style>