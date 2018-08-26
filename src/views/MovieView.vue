<template>
  <div class="movie-view">
    <movie-list title="影院热映" :items="hotMovie"></movie-list>
    <movie-list title="北美票房榜" :items="topMovie"></movie-list>
    <movie-list title="新片速递" :items="newMovie"></movie-list>
    <recommand title="发现好电影" :items="recommandTags"></recommand>
  </div>
</template>

<script>
import MovieList from '../components/MovieList'
import Recommand from '../components/Recommand'
import { mapState } from 'vuex'

export default {
  components: {
    MovieList, Recommand
  },
  computed: mapState({
    hotMovie: state => state.movie.hotMovie,
    topMovie: state => state.movie.topMovie,
    newMovie: state => state.movie.newMovie,
    recommandTags: state => state.color.recommandTags
  }),
  created() {
    this.$store.dispatch('movie/loadItem'),
    this.$store.dispatch('getColor')
  }
}
</script>

<style>
</style>
