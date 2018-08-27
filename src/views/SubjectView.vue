<template>
  <div class="subject-view" v-if="item!=undefined">
    <header class="subject-head">
      <img :src="item.image" alt="error">
      <h1>{{ item.alt_title }}</h1>
      <p>{{ title }}</p>
      <p>{{ msg }}</p>
      <ul>
        <li><a>想看</a></li>
        <li><a>看过</a></li>
      </ul>
    </header>
    <section class="subject-rating" v-if="item.rating!=undefined">
      <rating-star :rating='item.rating'></rating-star>
      <p>{{ item.rating.numRaters + '人评价' }}</p>
    </section>
    <section class="subject-tags">
      <p>所属频道</p>
      <ul>
        <li v-for="tag in tags">{{ tag.name }}</li>
      </ul>
    </section>
    <section class="subject-summary">
      <h2>简介</h2>
      <p>{{ item.summary }}</p>
    </section>
    <section class="subject-people">
      <ul>
        <li v-for="director in people.directors" :key="director.id">{{ director.name }}</li>
      </ul>
    </section>
  </div>
  <div v-else>正在载入</div>
</template>

<script>
import RatingStar from '../components/RatingStar'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    RatingStar
  },
  computed: {
    ...mapState({
      tags: state => state.movieDetail.tags,
      item: state => state.movieDetail.item,
      people: state => state.movieDetail.people
    }),
    ...mapGetters({
      title: 'concatTitle', 
      msg: 'concatMsg'
    })
  },
  created () {
    this.$store.dispatch('getMovieMsg',this.$route.params.id)
  }
}
</script>

<style>

</style>
