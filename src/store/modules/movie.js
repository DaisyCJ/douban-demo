import Vue from 'vue'

const state = {
  hotMovie: [],
  topMovie: [],
  newMovie: []
};
const mutations = {
  loadItem(state, items) {
    switch(items.tag) {
      case 'hotMovie': 
        state.hotMovie = items.data 
        break
      case 'topMovie': 
        state.topMovie = items.data.map((ele) => {return ele.subject}).splice(0,6)
        break
      case 'newMovie': 
        state.newMovie = items.data 
        break
    }
  }
};
const actions = {
  loadItem(context) {
    Vue.http.jsonp('https://api.douban.com/v2/movie/in_theaters?count=6', { credentials: true})
      .then((response) => {
        context.commit({
          type: 'loadItem',
          tag: 'hotMovie',
          data: response.body.subjects
        })
      }, function(error) {
        console.log('error')
      }),
    Vue.http.jsonp('https://api.douban.com/v2/movie/us_box', { credentials: true})
      .then((response) => {
        context.commit({
          type: 'loadItem',
          tag: 'topMovie',
          data: response.body.subjects
        })
      }, function(error) {
        console.log('error')
      }),
    Vue.http.jsonp('https://api.douban.com/v2/movie/coming_soon?count=6', { credentials: true})
      .then((response) => {
        context.commit({
          type: 'loadItem',
          tag: 'newMovie',
          data: response.body.subjects
        })
      }, function(error) {
        console.log('error')
      })
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})