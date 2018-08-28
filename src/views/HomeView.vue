<template>
  <div class="home-view">
    <home-nav></home-nav>
    <div class="home-list">
      <h1 class="list-title">Top250的电影</h1>
      <ul>
        <li v-for="(item, index) in items" :key="index" class="list-item clearfix">
          <router-link :to="{ name: 'SubjectView', params: {id: item.id}}">
            <img :src="item.images.small" alt="error">
            <div>
              <h2 class="item-title">{{ item.title + '(' + item.year + ')' }}</h2>
              <rating-star :rating="item.rating.average"></rating-star>
              <span>{{ Number(item.rating.average).toFixed(1) }}</span>          
            </div>
            <p class="item-msg">{{ concatMsg(item) }}</p>
          </router-link>
        </li>
      </ul>
      <!-- <span @click="loadMoreMovie">加载更多</span> -->
      <div v-infinite-scroll="onInfinite" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <img src="../assets/loading.gif" alt="loading">
      </div>
    </div>
  </div>
</template>

<script>
import HomeNav from '../components/HomeNav'
import RatingStar from '../components/RatingStar'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    HomeNav, RatingStar
  },
  data () {
    return {
      busy: false
    }
  },
  computed: {
    ...mapState({
      items: state => state.homeList.items
    })
  },
  methods: {
    concatMsg(item) {
      if(item) {
        var msg = []
        msg.push(item.year),
        msg.push(item.genres.join(' ')),
        msg.push(item.directors[0].name),
        msg.push(item.casts.slice(0,2).map(e =>{return e.name}).join(' '))
        return msg.join(' / ')
      }
      else return '暂无信息'
    },
    onInfinite () {
      this.busy = true;
      setTimeout(() => {
        this.$store.dispatch('loadHomeItems')
        this.busy = false,
        console.log('load')
      }, 1000)
    }
  },
  created () {
    this.$store.dispatch('loadHomeItems')
  }
}
</script>

<style lang="scss" scoped>
.home-view {
  margin: 0 auto;
  padding: 10px 20px;
  .list-title {
    margin-top: 25px;
    font-size: 20px;
  }
    .list-item {
      padding: 20px 0;
      border-bottom: 1px solid #f3f3f3;
      img {
        width: 80px;
        float: left;
        margin-right: 10px;
      }
      .item-title {
        font-size: 18px;
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
  }
}
</style>

