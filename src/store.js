import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import { Connect, SimpleSigner } from 'uport-connect'

Vue.use(Vuex)

const uport = new Connect('night pass', {
  clientId: '2onXsyJx8GnJPjTeAbqFSAUBniQArNsMZia',
  network: 'rinkeby',
  signer: SimpleSigner('387342a6a3e3389aad47faf70a14f9680fb24aa38fc9565b26c3af746007b42f')
})

export default new Vuex.Store({
  state: {
    credential: null
  },
  mutations: {
    setRequestToken(state, value) {
      state.requestToken = value
    },
    setCredential(state, value) {
      state.credential = value
    }
  },
  actions: {
    requestCredential({ commit }) {
      uport.requestCredentials({
        requested: ['name', 'phone', 'country'],
        notifications: true 
      })
      .then((credentials) => {
        commit('setCredential', credentials)
        router.push('user')
      })
    }
  },
  getters: {
    getName: (state) => {
      return (state.credential) ? state.credential.name : null
    },
    getPhone: (state) => {
      return (state.credential) ? state.credential.phone : null
    },
    getCountry: (state) => {
      return (state.credential) ? state.credential.country : null
    },
  }
})
