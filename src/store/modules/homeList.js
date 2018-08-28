import Vue from 'vue'

const state = {
  items: [],
  count: 0
};

const mutations = {
  loadHomeItems(state, msg) {
    if(msg) {
      state.items = state.items.concat(msg),
      state.count = state.count+5>250 ? 250 : state.count+5,
      console.log(state.count),
      console.log(state.items.length + '个')
    }
  }
};

const actions = {
  loadHomeItems({commit, state}) {
    if(state.count < 250) {
      Vue.http.jsonp('https://api.douban.com/v2/movie/top250?start=' + state.count + '&count=' + 5, { credentials: false})
        .then((response) => {
          commit('loadHomeItems', response.body.subjects)
        }, function(error) {
          console.log(error)
        })
    }
  }
};

export default({
  state,
  mutations,
  actions
})