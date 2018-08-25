<template>
  <div class="pages-view">
    <head-bar></head-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import HeadBar from '../components/HeadBar'

export default {
  components: {
    HeadBar
  }
}
</script>

<style lang="scss" scoped>
.pages-view {
  padding: 10px 0;
}
</style>
