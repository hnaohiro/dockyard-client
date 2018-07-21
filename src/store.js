import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    response: ''
  },
  mutations: {
    setResponse(state, value) {
      state.response = value
    }
  },
  actions: {
    async onApiTestClick({ commit }) {
      const response = await axios.get('http://localhost:3000/api/test')
      commit('setResponse', response.data)
    }
  }
})
