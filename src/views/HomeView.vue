<template>
  <div class="home-view">
    <home-nav></home-nav>
    <list-item></list-item>
  </div>
</template>

<script>
import HomeNav from '../components/HomeNav'
import ListItem from '../components/ListItem'

export default {
  components: {
    HomeNav, ListItem
  }
}
</script>

<style lang="scss" scoped>
.home-view {
  margin: 0 auto;
  padding: 10px 20px;
}
</style>

