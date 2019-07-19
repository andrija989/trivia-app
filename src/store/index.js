import Vue from 'vue'
import Vuex from 'vuex'

import { ChuckModule } from '@/store/ChuckStoreModule'
import { TriviaModule } from '@/store/TriviaStoreModule'


Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    ChuckModule,
    TriviaModule
  }
})

export default store
