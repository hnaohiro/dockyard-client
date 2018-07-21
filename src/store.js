import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import { Connect, SimpleSigner, MNID } from 'uport-connect'
import Web3 from 'web3'

Vue.use(Vuex)

const uport = new Connect('night pass', {
  clientId: '2onXsyJx8GnJPjTeAbqFSAUBniQArNsMZia',
  network: 'rinkeby',
  signer: SimpleSigner('387342a6a3e3389aad47faf70a14f9680fb24aa38fc9565b26c3af746007b42f')
})

const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/c68e51f96f6242a9814e63ff752344d8');
const web3 = new Web3(provider);

export default new Vuex.Store({
  state: {
    credential: null,
    balance: null
  },
  mutations: {
    setRequestToken(state, value) {
      state.requestToken = value
    },
    setCredential(state, value) {
      state.credential = value
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
        web3.eth.getBalance(address)
          .then((balance) => {
            commit('setBalance', balance)    
          })
      
        router.push('user')
      })
    },

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
