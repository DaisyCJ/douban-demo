<template>
  <div class="pages-view">
    <div v-if="!comeSearch">
      <head-bar @choose="openSearch"></head-bar>
      <router-view class="page-content"></router-view>
    </div>
    <div v-if="comeSearch" class="pages-view">
      <search @close="closeSearch"></search>
    </div>
  </div>
</template>

<script>
import HeadBar from '../components/HeadBar'
import Search from '../components/Search'

export default {
  components: {
    HeadBar, Search
  },
  data () {
    return {
      comeSearch: false
    }
  },
  methods: {
    openSearch: function() {
      this.comeSearch = true
    },
    closeSearch: function() {
      this.comeSearch = false
    }
  }
}
</script>

<style lang="scss" scoped>
.pages-view {
  .page-content {
    margin-top: 70px;
  }
}
</style>
