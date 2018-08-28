import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import movie from './modules/movie'
import color from './modules/color'
import category from './modules/category'
import comments from './modules/comments'
import movieDetail from './modules/movieDetail'
import search from './modules/search'
import homeList from './modules/homeList'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  modules: {
    color,
    movie,
    category,
    comments,
    movieDetail,
    search,
    homeList
  }
})