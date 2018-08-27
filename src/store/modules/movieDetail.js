import Vue from 'vue'

const state = {
  tags: [],
  people: {
    casts: [],
    directors: []
  },
  item: {}
};

const getters = {
  concatTitle: function(state) {
    if(state.item.attrs!=undefined){
      return state.item.title + '(' + state.item.attrs.year[0] + ')'
    }
    else return '出错'
  },
  concatMsg: function(state) {
    var msg = [];
    if(state.item.attrs !=undefined) {
      msg.push(state.item.attrs.country.join(' '));
      msg.push(state.item.attrs.movie_type.join(' '));
      msg.push('上映时间：' + state.item.attrs.pubdate[0]);
      msg.push('片长：' + state.item.attrs.movie_duration[0] + '>');
      return msg.join(' / ')
    }
    else return '出错'
  }
};

const mutations = {
  movieMsg(state, msg) {
    if(msg!=undefined) {
      state.tags = msg.tags,
      state.item = msg
    }
  },
  peopleMsg(state, msg) {
    if(msg!=undefined) {
      state.people.casts = msg.casts,
      state.people.directors = msg.directors
    }
  }
};

const actions = {
  getMovieMsg({commit}, id) {
    Vue.http.jsonp('http://api.douban.com/v2/movie/' + id, { credentials: true})
      .then((response) =>{
        commit('movieMsg', response.body)
      }, function(error) {
        console.log('error')
    });
    Vue.http.jsonp('http://api.douban.com/v2/movie/subject/' + id, { credentials: true})
      .then((response) =>{
        if(response.body.casts != undefined) {
          commit('peopleMsg', response.body)
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