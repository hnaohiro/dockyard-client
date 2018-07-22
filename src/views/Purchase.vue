<template>
  <div>
    <h2>Purchase</h2>

    <div class="info"><img src="../assets/purchase/1.png"></div>

    <div class="purchase-ticket" v-if="getSelectedTicket">
      <p>id: {{getSelectedTicket.id}}</p>
      <p>time: {{getSelectedTicket.time}}</p>
      <p>price: {{getSelectedTicket.price}} ETH</p>
      <p>drink: {{getSelectedTicket.amountOfDrinkToken}} DRTK</p>
    </div>

    <div class="wallet">
      <div class="label">Wallet</div>
      <div class="balance">{{getBalanceEth}} ETH</div>
    </div>

    <div class="purchase">
      <button v-on:click="onPurchaseButtonClick">Purchase</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'purchase',
  methods: mapActions({
    "onPurchaseButtonClick": "purchaseTicket"
  }),
  computed: {
    ...mapGetters([
      'getBalanceEth',
      'getSelectedTicket'
    ])
  },
}
</script>

<style>
.info img {
  margin: 20px auto;
  width: 100%;
}

.wallet {
  clear: both;
  margin: 30px;
  padding-bottom: 20px;
}

.wallet .label {
  float: left;
}

.wallet .balance {
  float: right;
}

.purchase {
  text-align: center;
  margin: 30px 0 50px;
}

.purchase button {
  width: 70%;
  padding: 10px;
  background: #c83951;
  color: white;
  border: none;
  font-size: 1.2em;
  display: inline-block;
  text-decoration: none;
}
</style>
