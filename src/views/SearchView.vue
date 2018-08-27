<template>
  <div class="search-view">
    <head-bar></head-bar>
    <div class="search-bar">
      <input type="text" v-model="text" @keyup.enter='searchStart'>
      <span @click="searchStart">搜索</span>
    </div>
    <div class="search-answer" v-if="answer.subjects!=undefined">
      <p class="title">影视</p>
      <ul>
        <li v-for="(item, index) in answer.subjects.slice(0, num)" :key="index" class="clearfix">
          <img :src="item.images.small" alt="error">
          <p>{{ item.title }}</p>
          <rating-star :rating="item.rating.average"></rating-star>
          <span>{{ Number(item.rating.average).toFixed(1) }}</span>
        </li>
      </ul>
      <p class="load-more" @click="loadMore" v-if="num!=answer.subjects.length">更多影视结果……</p>
    </div>
  </div>
</template>

<script>
import HeadBar from '../components/HeadBar'
import RatingStar from '../components/RatingStar'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      text: '',
      num: 3
    }
  },
  components: {
    HeadBar, RatingStar
  },
  computed: {
    ...mapState({
      answer: state => state.search.answer
    })
  },
  created () {
    this.text = this.$route.query.query,
    this.$store.dispatch('getAnswer', this.text)
  },
  methods: {
    loadMore: function() {
      if(this.num+5 < this.answer.subjects.length) {
        this.num += 5
      }
      else this.num = this.answer.subjects.length
    },
    searchStart: function() {
      this.$router.push({ path: '/search', query: { query: this.text }})
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
    padding: 12px 20px;
    margin-top: 60px;
    border-bottom: 1px solid #f3f3f3;
    span {
      color: #00b600;
    }
    input {
      display: inline-block;
      height: 30px;
      width: 80%;
      margin-left: 10px;
      padding: 0 5px;
      background: url(../assets/search.png) no-repeat center;
      background-size: 18px 18px;
      background-color: #f3f3f3;
      border: 0;
    }
  }
  .search-answer {
    padding: 10px 20px;
    .title {
      padding: 10px 0;
      color: #b4b4b4;
    }
    li {
      margin: 10px 0;
      padding: 10px 0;
      border-bottom: 1px solid #f3f3f3;
      p {
        padding: 3px 0;
      }
      .rating-star {
        float: left;
        margin-right: 5px;
      }
      span {
        font-size: 14px;
        color: #b4b4b4;
      }
    }
    img {
      width: 40px;
      float: left;
      margin-right: 10px;
    }
  }
  .load-more {
    text-align: center;
    color: #00b600;
  }
</style>
