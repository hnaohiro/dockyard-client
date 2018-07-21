import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import { Connect, SimpleSigner, MNID } from 'uport-connect'
import web3 from './web3'

Vue.use(Vuex)

const uport = new Connect('night pass', {
  clientId: '2onXsyJx8GnJPjTeAbqFSAUBniQArNsMZia',
  network: 'rinkeby',
  signer: SimpleSigner('387342a6a3e3389aad47faf70a14f9680fb24aa38fc9565b26c3af746007b42f')
})

export default new Vuex.Store({
  state: {
    credential: null,
    address: null,
    balance: null
  },
  mutations: {
    setRequestToken(state, value) {
      state.requestToken = value
    },
    setCredential(state, value) {
      state.credential = value
    },
    setAddress(state, value) {
      state.address = value
    },
    setBalance(state, value) {
      state.balance = value
    }
  },
  actions: {
    async requestCredential({ commit }) {
      uport.requestCredentials({
        requested: ['name', 'avatar', 'phone', 'country'],
        notifications: true 
      })
      .then((credentials) => {
        commit('setCredential', credentials)
        
        const address = MNID.decode(credentials.address).address
        commit('setAddress', address)

        web3.eth.getBalance(address).then((balance) => {
          commit('setBalance', balance)
        })
      
        router.push('purchase')
      })
    },
    purchase({ commit }) {
      router.push('thanks')
    }
  },
  getters: {
    getCredential(state) {
      return state.credential
    },
    getName(state) {
      return (state.credential) ? state.credential.name : null
    },
    getAvatar(state) {
      return (state.credential) ? state.credential.avatar.uri : null
    },
    getPhone(state) {
      return (state.credential) ? state.credential.phone : null
    },
    getCountry(state) {
      return (state.credential) ? state.credential.country : null
    },
    getAddress(state) {
      return (state.credential) ? MNID.decode(state.credential.address).address : null
    },
    getBalance(state) {
      return state.balance
    }
  }
})
