<template>
  <div class="movie-list">
    <div class="list-head">
      <span>{{ title }}</span>
      <a href="">更多</a>
    </div>
    <ul>
      <li
        v-for='item in items'
        :key='item.id'>
        <img :src="item.images.small" class="list-img">
        <p class='movie-list-title'>{{ changeTitle(item.title) }}</p>
        <rating-star :rating='item.rating'></rating-star>
      </li>
    </ul>
  </div>
</template>

<script>
import RatingStar from './RatingStar'

export default {
  props: ['items', 'title'],
  components: {
    RatingStar
  },
  methods: {
    changeTitle: function(title) {
      if(title.length > 6) {
        return title.slice(0, 6).concat('...')
      }
      else return title;
    },
    showRating: function(average) {

    }
  }
}
</script>

<style lang="scss" scoped>
.movie-list {
  padding-left: 20px;
  .list-head {
    display: inline;
    padding: 5px 0;
    a {
      float: right;
      padding-right: 20px;
      color: #00b600;
    }
  }
  ul {
    display: -webkit-box;
    display: -ms-flexbox;
    overflow: auto;
    margin: 15px 0;
    li {
      width: 105px;
      .list-img {
        width: 100px;
        height: 140px;
      }
      .movie-list-title {
        font-size: 15px;
        text-align: center;
      }
    }
  }
}
</style>
