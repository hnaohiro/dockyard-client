<template>
  <div>
    <h2>Purchase</h2>

    <div class="shopTicket">
      <div>
        <img class="shopTicket-image" src="../assets/shop.png" width="100">
      </div>
      <div class="shopTicket-block">
        <p class="shopTicket-name">
          Dockyard
        </p>
        <p class="shopTicket-time">
          Sat, July 21 / 23:00~
        </p>
        <p class="shopTicket-token">
          Drink Token / <span>500</span>
        </p>
      </div>
      <div class="shopTicket-info">
        <p class="shopTicket-label">price</p>
        <p class="shopTicket-price">0.01ETH</p>
      </div>
    </div>

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
  position: absolute;
  top: 8px;
  right: 0px;
  display: flex;
  align-items: baseline;
  margin: 30px;
  padding-bottom: 20px;
}

.wallet .balance {
  margin-left: 16px;
  font-weight: bold;
  font-size: 20px;
}


.purchase {
  text-align: center;
  margin: 30px 0 50px;
}

.shopTicket {
  position: relative;
  background: #1E2937;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.14);
  border-radius: 12px;
  margin: 16px;
  padding: 16px 16px 40px 16px;
  display: flex!important;
  align-items: top;
}

.shopTicket-image {
  display: block;
}

.shopTicket-block {
  margin-left: 16px;
}

.shopTicket-name {
  font-size: 22px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
}

.shopTicket-time {
  margin-top: 4px;
  margin-bottom: 0;
}
.shopTicket-token {
  margin-top: 4px;
  margin-bottom: 0;
  font-weight: bold;
}

.shopTicket-info {
  border-top: 1px solid white;
  position: absolute;
  left: 132px;
  bottom: 4px;
  text-align: right;
  display: flex;
  justify-content: space-between;
}

.shopTicket-price {
  margin-left: 16px;
  font-weight: bold;
}

.purchase button {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 256px;
  font-weight: bold;
  padding: 16px;
  background: #c83951;
  color: white;
  border: none;
  font-size: 1.2em;
  font-weight: bold;
  display: inline-block;
  text-decoration: none;
  background-image: linear-gradient(-90deg, #933AAF 0%, #E63C56 100%);
  border-radius: 30px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.50);
}
</style>
