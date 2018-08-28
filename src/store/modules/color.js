import Vue from 'vue'
import Vuex from 'vuex'

const state = {
  color: ['#42bd56', '#ffac2d', '#ff4055', '#cc3344', '#4f9ded'],
  recommandTags: [{
    tag: '同时入选IMDB250和豆瓣电影250的电影',
    url: 'https://m.douban.com/doulist/968362/',
    color: '#000',
    id: 0
  }, {
    tag: '带你进入不正常的世界',
    url: 'https://m.douban.com/doulist/16002/',
    color: '#000',
    id: 1
  }, {
    tag: '用电【影】来祭奠逝去的岁月',
    url: 'https://m.douban.com/doulist/190343/',
    color: '#000',
    id: 2
  }, {
    tag: '女孩们的故事【电影】',
    url: 'https://m.douban.com/doulist/1125971/',
    color: '#000',
    id: 3
  }, {
    tag: '科幻是未来的钥匙——科幻启示录【科幻题材】',
    url: 'https://m.douban.com/doulist/4253902/',
    color: '#000',
    id: 4
  }, {
    tag: '美国生活面面观',
    url: 'https://m.douban.com/doulist/121326/',
    color: '#000',
    id: 5
  }, {
    tag: '经典韩国电影——搜集100部',
    url: 'https://m.douban.com/doulist/458087/',
    color: '#000',
    id: 6
  }]
}

const mutations = {
  getColor(state) {
    state.recommandTags.map(e => {
      e.color = state.color[Math.floor(Math.random()*5)]
    })
  }
}

const actions = {
  getColor(context) {
    context.commit('getColor')
  }
}

export default({
  state,
  mutations,
  actions
})