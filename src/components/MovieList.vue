<template>
  <div class="movie-list">
    <div class="list-head">
      <span>{{ title }}</span>
      <a href="">更多</a>
    </div>
    <ul class="list-content">
      <li v-for='item in items' :key='item.id' class="clearfix">
        <router-link :to="{ name: 'SubjectView', params: {id: item.id}}">
          <img :src="item.images.small" class="list-img">
          <p class='movie-list-title'>{{ changeTitle(item.title) }}</p>
          <div class="movie-rating">
            <rating-star :rating='item.rating.average'></rating-star>
            <span v-if="item.rating.average!=0">{{ Number(item.rating.average).toFixed(1) }}</span>
          </div>
        </router-link>
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
    overflow-x: auto;
    white-space: nowrap;
    margin: 15px 0;
    li {
      display: inline-block;
      width: 105px;
      .list-img {
        width: 100px;
        height: 140px;
      }
      .movie-list-title {
        font-size: 15px;
        text-align: center;
      }
      span {
        padding-left: 5px;
        font-size: 12px;
        color: #aaaaaa;
      }
    }
    .movie-rating {
      padding: 0 3px;
    }
    .rating-star {
      float: left;
    }
  }
  // .list-content {
  //   display: -webkit-box;
  //   display: -ms-flexbox;
  //   overflow: auto;
  //   margin: 15px 0;
  //   li {
  //     width: 105px;
  //     .list-img {
  //       width: 100px;
  //       height: 140px;
  //     }
  //     .movie-list-title {
  //       font-size: 15px;
  //       text-align: center;
  //     }
  //     span {
  //       padding-left: 5px;
  //       font-size: 12px;
  //       color: #aaaaaa;
  //     }
  //   }
  //   .movie-rating {
  //     padding: 0 3px;
  //   }
  //   .rating-star {
  //     float: left;
  //   }
  // }
}
</style>
