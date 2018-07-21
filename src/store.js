import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    requestToken: ''
  },
  mutations: {
    setRequestToken(state, value) {
      state.requestToken = value
    }
  },
  actions: {
    async getRequestToken({ commit }) {
      const token = await axios.get('http://localhost:3000/login')
      commit('setRequestToken', token.data)
    }
  }
})
