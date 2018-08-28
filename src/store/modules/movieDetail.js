import Vue from 'vue'

const state = {
  tags: [],
  attrs: {},
  people: {
    casts: [],
    directors: []
  },
  item: {}
};

const getters = {
  concatTitle: function(state) {
    if(state.attrs.year!=undefined){
      return state.item.title + '(' + state.attrs.year[0] + ')'
    }
    else return '出错1'
  },
  concatMsg: function(state) {
    var msg = [];
    if(state.attrs.country !=undefined
      && state.attrs.movie_type !=undefined
      && state.attrs.pubdate !=undefined
      && state.attrs.movie_duration !=undefined) {
      msg.push(state.attrs.country.join(' '));
      msg.push(state.attrs.movie_type.join(' '));
      msg.push('上映时间：' + state.attrs.pubdate.join(' '));
      msg.push('片长：' + state.attrs.movie_duration.join(' ') + '>');
      return msg.join(' / ')
    }
    else return '出错2'
  }
};

const mutations = {
  movieMsg(state, msg) {
    if(msg!=undefined) {
      state.item = msg,
      state.people.casts = msg.casts,
      state.people.directors = msg.directors
    }
  },
  tagMsg(state, msg) {
    if(msg!=undefined) {
      state.tags = msg.tags,
      state.attrs = msg.attrs
    }
  }
};

const actions = {
  getMovieMsg({commit}, id) {
    Vue.http.jsonp('http://api.douban.com/v2/movie/' + id, { credentials: true})
      .then((response) =>{
        commit('tagMsg', response.body)
      }, function(error) {
        console.log('error')
    });
    Vue.http.jsonp('https://api.douban.com/v2/movie/subject/' + id, { credentials: true})
      .then((response) =>{
        if(response.body.casts != undefined) {
          commit('movieMsg', response.body)
        }
      }, function(error) {
        console.log('error')
    })
  }
};

export default({
  state,
  getters,
  mutations,
  actions
})