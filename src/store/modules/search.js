import Vue from 'vue'

const state = {
  navs: [{
    id: 0,
    name: '电影',
    tip: '影院热映',
    url: '/',
    color: '#2386e9',
  }, {
    id: 1,
    name: '电视',
    tip: '正在热播',
    url: '/',
    color: '#8779dd',
  }, {
    id: 2,
    name: '图书',
    tip: '畅销排行',
    url: '/',
    color: '#b47860',
  }, {
    id: 3,
    name: '同城',
    tip: '周末活动',
    url: '/',
    color: '#e8467e',
  }, {
    id: 4,
    name: '小组',
    tip: '志趣相投',
    url: '/',
    color: '#2ab8cd',
  }, {
    id: 5,
    name: '音乐',
    tip: '新碟榜',
    url: '/',
    color: '#f48f62',
  }, {
    id: 6,
    name: '阅读',
    tip: '电子书',
    url: '/',
    color: '#9f7860',
  }, {
    id: 7,
    name: '游戏',
    tip: '虚拟世界',
    url: '/',
    color: '#5774c6',
  }, {
    id: 8,
    name: '应用',
    tip: '玩手机',
    url: '/',
    color: '#596cdd',
  }, {
    id: 9,
    name: '广播',
    tip: '友邻动态',
    url: '/',
    color: '#e5644d',
  }, {
    id: 10,
    name: 'FM',
    tip: '红心歌单',
    url: '/',
    color: '#40cfa9',
  }, {
    id: 11,
    name: '豆品',
    tip: '生活美学',
    url: '/',
    color: '#4fc495',
  }],
  answer: {}
};

const mutations = {
  getAnswer(state, msg) {
    state.answer = msg
  }
};

const actions = {
  getAnswer(context, text) {
    Vue.http.jsonp('https://api.douban.com/v2/movie/search?q='+text, { credentials: true})
    .then((response) => {
      context.commit('getAnswer', response.body)
    }, function(error) {
      console.log('error')
    })
  }
}

export default({
  state,
  mutations,
  actions
})