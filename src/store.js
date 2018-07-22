import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import { Connect, SimpleSigner, MNID } from 'uport-connect'
import web3 from './web3'
import { drinkContract, entranceContract } from './contract'

import { drinkTokenABI, EntranceTokenABI } from './abi'
const entranceTokenAddress = '0xed9b30178f0eb74456947e835e2796f03e241b3c'

Vue.use(Vuex)

const uport = new Connect('night pass', {
  clientId: '2onXsyJx8GnJPjTeAbqFSAUBniQArNsMZia',
  network: 'rinkeby',
  signer: SimpleSigner('387342a6a3e3389aad47faf70a14f9680fb24aa38fc9565b26c3af746007b42f')
})

export default new Vuex.Store({
  state: {
    credential: null,
    address: '0x4c867c935ceb980e211326733a5c9704d0a4a459', //null,
    balance: null,
    tickets: [],
    selectedTicket: { id: 1, time: '2018-01-01 00:00:00', price: '0.1', amountOfDrinkToken: '500' }, //null,
    userTickets: [],
    drikenTokenBalance: null,
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
    },
    setUserTickets(state, value) {
      state.userTickets = value
    },
    setDrikenTokenBalance(state, value) {
      state.drikenTokenBalance = value
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
    // チケット一覧を取得する
    async fetchTickets({ commit, state }) {
      const count = await entranceContract.methods.stockCount().call()
      let tickets = state.tickets

      for (let i = 0; i < count; i++) {
        const ticket = await entranceContract.methods.stocks(i).call()
        const remain = await entranceContract.methods.stockRemainings(i).call()

        tickets.push({
          id: i,
          time: ticket.entranceAt,
          price: web3.utils.fromWei(ticket.price.toString(), 'ether'),
          amountOfDrinkToken: web3.utils.fromWei(ticket.amountOfDrinkToken.toString(), 'ether'),
          remain: remain
        })

        commit('setTickets', tickets)
      }
    },
    // チケットを購入する
    async purchaseTicket({ commit, state }) {
      const tokenId = state.selectedTicket.id
      const price = state.selectedTicket.price
      const weiValue = Number(price) * 1e18 / 1000 // for uport tranfer bug

      const contractInstance = uport.contract(EntranceTokenABI)
      const contract = contractInstance.at(entranceTokenAddress)

      await contract.buyToken(tokenId, { value: weiValue, gasPrice: 5e9 })

      router.push('/thanks')
    },
    // ユーザーが所持するチケット一覧を取得する
    async fetchUserTickets({ commit, state }) {
      const address = state.address
      const count = await entranceContract.methods.userTokenCount().call({ from: address })
      let userTickets = state.userTickets

      for (let i = 0; i < count; i++) {
        const userTokenId = await entranceContract.methods.userTokens(address, i).call()

        // tokenId が 0 の時は使用済み
        if (userTokenId == 0) continue;

        // userTokenId は配列の位置+1で有ることに注意
        const token = await entranceContract.methods.tokens(userTokenId - 1).call()

        userTickets.push({
          id: userTokenId,
          time: token.entranceAt,
          amountOfDrinkToken: web3.utils.fromWei(token.amountOfDrinkToken.toString(), 'ether')
        })

        commit('setUserTickets', userTickets)
      }
    },
    // ユーザーチケットの使用する
    async useUserTicket({ commit, state }, tokenId) {
      await entranceContract.methods.useToken(tokenId).call({ gasPrice: 5e9, from: state.address })
    },
    // ドリンクトークンの残高を取得する
    async fetchDrikenTokenBalance({ commit, state }) {
      const balance = await drinkContract.methods.balanceOf(state.address).call({ from: state.address })
      commit('setDrikenTokenBalance', balance)
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
    getDrikenTokenBalance(state) {
      return state.drikenTokenBalance
    },
    getSelectedTicket(state) {
      return state.selectedTicket
    },
    getUserTickets(state) {
      return state.userTickets
    }
  }
})
