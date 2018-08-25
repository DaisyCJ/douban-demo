<template>
  <div class="movie-view">
    <movie-list title="影院热映" name="in_theaters" :items="hotMovie"></movie-list>
    <movie-list title="北美票房榜" name="us_box" :items="topMovie"></movie-list>
    <movie-list title="新片速递" name="coming_soon" :items="newMovie"></movie-list>
  </div>
</template>

<script>
import MovieList from '../components/MovieList'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    MovieList
  },
  computed: mapState(['hotMovie', 'topMovie', 'newMovie']),
  methods: {
    ...mapActions([
      'loadItem'
    ])
  },
  created() {
    this.loadItem()
  }
}
</script>

<style>
.movie-view {
}
</style>
