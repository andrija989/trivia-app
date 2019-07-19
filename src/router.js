import Vue from 'vue'
import Router from 'vue-router'
import TriviaApp from './views/TriviaApp.vue'
import Chuck from './views/Chuck.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'trivia-app',
      component: TriviaApp
    },
    {
      path: '/chuck',
      name: 'chuck',
      component: Chuck
    }
  ]
})
