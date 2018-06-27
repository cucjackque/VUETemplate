import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  active: [true, false, false]
}

const mutations = {
  setActive(state, param){
    state.active = param;
  }
}

export default new Vuex.Store({
  state,
  mutations
})
