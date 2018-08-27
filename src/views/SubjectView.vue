<template>
  <div class="subject-view" v-if="item!=undefined">
    <header class="subject-head clearfix">
      <img v-if="item.images!=undefined" :src="item.images.small" alt="error">
      <div class="subject-head-content">
        <h1>{{ item.title }}</h1>
        <div class="subject-head-rating" v-if="item.rating!=undefined">
          <rating-star :rating='item.rating.average'></rating-star>
          <span>{{ Number(item.rating.average).toFixed(1) }}</span>
          <span>{{ item.ratings_count + '人评价' }}</span>
        </div>
        <p class="title">{{ title }}</p>
        <p class="msg">{{ msg }}</p>
        <a :href="item.mobile_link">在豆瓣中查看</a>
      </div>
    </header>
    <section class="subject-tip">
      <ul>
        <li><a>想看</a></li>
        <li><a>看过</a></li>
      </ul>
    </section>
    <section class="subject-summary">
      <p class="section-title">{{ item.title +'的剧情简介' }}</p>
      <movie-summary :msg='item.summary'></movie-summary>
    </section>
    <section class="subject-tags">
      <div class="section-title">
        <p>所属频道</p>
      </div>
      <ul>
        <li v-for="tag in tags"><a>{{ tag.name }}</a></li>
      </ul>
    </section>
    <section class="subject-people">
      <div class="section-title">
        <span>影人</span>
        <span class="more">全部 ></span>
      </div>
      <cast-list :items="people"></cast-list>
    </section>
    <section class="subject-pic">
      <div class="section-title">
        <span>预告片 / 视频评论 / 剧照</span>
        <span class="more">全部 ></span>
      </div>
      <ul>
        <li>
          <img v-if="item.images!=undefined" :src="item.images.small" alt="error">
        </li>
      </ul>
    </section>
    <section class="subject-comment">
      <div class="section-title clearfix">
        <span>短评</span>
        <span class="more">{{ '全部' + item.comments_count + ' >'}}</span>
      </div>
      <comments :items="movieComments"></comments>
    </section>
  </div>
  <div v-else>正在载入</div>
</template>

<script>
import RatingStar from '../components/RatingStar'
import MovieSummary from '../components/MovieSummary'
import CastList from '../components/CastList'
import Comments from '../components/Comments'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    RatingStar, MovieSummary, CastList, Comments
  },
  computed: {
    ...mapState({
      tags: state => state.movieDetail.tags,
      item: state => state.movieDetail.item,
      people: state => state.movieDetail.people,
      movieComments: state => state.comments.movieComments
    }),
    ...mapGetters({
      title: 'concatTitle', 
      msg: 'concatMsg',
      altTitle: 'altTitle'
    })
  },
  created () {
    this.$store.dispatch('getMovieMsg',this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
.subject-view {
  padding: 10px 20px;
  .subject-head {
    font-size: 14px;
    img {
      width: 120px;
      float: left;
      margin-right: 10px;
    }
    h1 {
      font-size: 22px;
    }
    p {
      padding-top: 5px;
    }
    .rating-star {
      padding: 0;
      float: left;
    }
    span {
      padding-left: 10px;
      font-size: 12px;
      color: #aaaaaa;
    }
    a {
      display: block;
      padding: 5px 0;
      color: #00b600;
    }
  }
  section {
    padding: 10px 0;
  }
  .subject-tip {
    padding: 5px 0;
    li {
      display: inline-block;
      height: 40px;
      width: 49%;
      text-align: center;
      border-radius: 3px;
      border: 1px solid #ffac2d;
      margin-top: 15px;
      a {
        height: 35px;
        width: 90px;
        color: #ffac2d;
        line-height: 40px;
      }
    }
  }
  .subject-summary {
    padding: 10px 0;
    font-size: 15px;
  }
  .subject-tags {
    ul {
      overflow-x: auto;
      white-space: nowrap;
      li {
        display: inline-block;
        background-color: #f5f5f5;
        border-radius: 10px;
        padding: 5px 10px;
        height: 35px;
        margin-right: 10px;
      }
    }
  }
  .subject-pic {
    li {
      width: 180px;
      height: 120px;
      overflow: hidden;
      img {
        width: 180px;
      }
    }
  }
  .section-title {
    color: #aaaaaa;
    padding: 8px 0;
    .more {
      float: right;
      font-size: 14px;
      color: #838080
    }
  }
}
</style>
