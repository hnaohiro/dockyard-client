<template>
  <div>
    <h1>Welcome!</h1>
    <p>name: {{getName}}</p>
    <p>avater: <img :src="getAvatar" width="50px" height="50px"/></p>
    <p>phone: {{getPhone}}</p>
    <p>country: {{getCountry}}</p>
    <p>balance: {{getBalanceEth}} ETH</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import router from '../router'
import web3 from 'web3'

export default {
  name: 'user',
  computed: {
    ...mapGetters([
      'getName',
      'getAvatar',
      'getPhone',
      'getCountry',
      'getBalanceEth'
    ])
  },
  mounted() {
    if (!this.$store.getters.getCredential) {
      router.push('login')
    }
  }
}
</script>
