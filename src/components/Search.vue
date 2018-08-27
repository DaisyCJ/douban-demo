<template>
  <div class="search">
    <div class="search-bar">
      <span @click="$emit('close')">关闭</span>
      <input type="text" v-model="text" @keyup.enter='searchStart'>
    </div>
    <div class="search-nav">
      <ul>
        <li v-for="nav in navs" :key="nav.id">
          <a :href="nav.url" :style="{color: nav.color}">{{ nav.name }}</a>
          <p>{{ nav.tip }}</p>
        </li>
      </ul>
    </div>
    <div class="use-app">
      <ul>
        <li><a>登录豆瓣</a></li>
        <li><a>注册豆瓣</a></li>
        <li><a>使用桌面版</a></li>
        <li><a>使用豆瓣App</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      text: ''
    }
  },
  computed: mapState({
    navs: state => state.search.navs
  }),
  methods: {
    searchStart: function() {
      this.$router.push({ path: '/search', query: { query: this.text }})
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  .empty {
    height: 60px;
  }
  .search-bar {
    padding: 15px 20px;
    border-bottom: 1px solid #f3f3f3;
    span {
      color: #00b600;
    }
    input {
      display: inline-block;
      height: 30px;
      width: 80%;
      margin-left: 10px;
      padding: 0 5px;
      background: url(../assets/search.png) no-repeat center;
      background-size: 18px 18px;
      background-color: #f3f3f3;
      border: 0;
    }
  }
  .search-nav {
    margin-bottom: 20px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        display: inline-block;
        width: 33%;
        height: 45px;
        margin-top: 20px;
        text-align: center;
        a {
          font-size: 24px;
        }
        p {
          font-size: 12px;
          color: #999999;
        }
      }
    }
  }
  .use-app {
    ul {
      display: flex;
      flex-wrap: wrap;
      border-top: 1px solid #f3f3f3;
    }
    li {
      display: inline-block;
      width: 50%;
      padding: 15px 0;
      border-bottom: 1px solid #f3f3f3;
      text-align: center;
    }
    a {
        display: inline-block;
        width: 100%;
        color: #42bd56;
        font-size: 15px;
    }
    li:nth-of-type(2n) a{
      border-left: 1px solid #e2e1e1;
    }
  }
}
</style>

