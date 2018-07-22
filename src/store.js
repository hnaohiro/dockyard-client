import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import { Connect, SimpleSigner, MNID } from 'uport-connect'
import web3 from './web3'
import { drinkContract, entranceContract } from './contract'

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
    balance: null,
    tickets: []
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
    },
    setTickets(state, value) {
      state.tickets = value
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
      
        router.push('/purchase')
      })
    },
    purchase({ commit }) {
      router.push('/thanks')
    },
    async fetchTickets({ commit, state }) {
      const stockCount = await entranceContract.methods.stockCount().call()
      let tickets = state.tickets

      for (let i = 0; i < stockCount; i++) {
        const ticket = await entranceContract.methods.stocks(i).call()
        const remain = await entranceContract.methods.stockRemainings(i).call()

        tickets.push({
          id: i,
          time: ticket.entranceAt,
          price: web3.utils.fromWei(ticket.price.toString(), 'ether'),
          amountOfDrinkToken: ticket.amountOfDrinkToken,
          remain: remain
        })

        commit('setTickets', tickets)
      }
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
    getBalanceWei(state) {
      return state.balance
    },
    getBalanceEth(state, getters) {
      return (getters.getBalanceWei) ? web3.utils.fromWei(getters.getBalanceWei.toString(), 'ether') : null
    },
    getTickets(state) {
      return state.tickets
    },
  }
})
