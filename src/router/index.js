import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../views/HomeView'
import PagesView from '../views/PagesView'
import MovieView from '../views/MovieView'
import DetailView from '../views/DetailView'
import SubjectView from '../views/SubjectView'
import SearchView from '../views/SearchView'
import LoginView from '../views/LoginView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
        },
        {
          path: 'subject/:id',
          name: 'SubjectView',
          component: SubjectView
        }
      ]
    },
    {
      path: '/search',
      name: 'SearchView',
      component: SearchView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    }
  ]
})
