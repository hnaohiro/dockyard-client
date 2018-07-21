<template>
  <div>
    <h2>Select</h2>
    <div class="close">
      <router-link to="/club">
        <img class="close" src="../assets/club_schedule/icon-close.svg" >
      </router-link>
    </div>

    <div class="tickets">
      <div class="ticket" v-for="ticket in getTickets" v-bind:key="ticket.id">
        <p class="ticket-time">{{ticket.time}}~</p>
        <p class="ticket-price">{{ticket.price}} ETH</p>
        <p class="ticket-remain">残り:  {{ticket.remain}}</p>
      </div>
    </div>

    <div class="confirm">
      <button v-on:click="onUPortButtonClick">Confirm</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ticket',
  methods: mapActions({
    "onUPortButtonClick": "requestCredential"
  }),
  mounted() {
    this.$store.dispatch('fetchTickets')
  },
  computed: {
    ...mapGetters([
      'getTickets'
    ])
  }
}
</script>

<style>
h2 {
  padding-left: 1em;
  font-size: 24px;
  margin-top: 32px;
  margin-bottom: 32px;
}

.close {
  position: absolute;
  top: 18px;
  right: 16px;
}

.select img {
  margin: 20px auto;
  width: 100%;
}

.confirm {
  text-align: center;
  margin: 30px 0 50px;
}

.confirm button {
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

.ticket {
  position: relative;
  background: #1E2937;
  margin: 16px;
  padding: 8px 16px 8px 74px;
  border-radius: 8px;
  background-image: url("../assets/club_schedule/icon-off.svg");
  background-repeat: no-repeat;
  background-size: 32px;
  background-position: 20px center;
}

.ticket:nth-child(1) {
    border: 2px solid #D53B68;
    background-image: url("../assets/club_schedule/icon-on.svg");
  }

.ticket-time {
  margin-bottom: -20px;
}

.ticket-price {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 8px;
}

.ticket-remain {
  position: absolute;
  right: 16px;
  bottom: 4px;
}

</style>
