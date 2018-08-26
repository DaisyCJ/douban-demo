import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import movie from './modules/movie'
import color from './modules/color'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  modules: {
    color,
    movie
  }
})