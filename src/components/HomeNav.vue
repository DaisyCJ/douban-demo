<template>
  <div class="home-nav">
      <ul>
        <li>
          <router-link :to="{name: 'MovieView'}">影院热映</router-link>
        </li>
        <li>
          <router-link :to="{name: 'MovieView'}">最受关注图书</router-link>
        </li>
        <li>
          <router-link :to="{name: 'MovieView'}">豆瓣时间</router-link>
        </li>
        <li>
          <router-link :to="{name: 'MovieView'}">使用豆瓣App</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home-nav ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 48%;
      margin: 1%;
      padding: 15px;
      list-style: none;
      background-color: #f6f6f6;
      text-align: center;
      color: #494949;
    }
  }
</style>

