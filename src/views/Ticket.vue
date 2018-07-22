<template>
  <div>
    <h2>Select</h2>

    <div class="tickets">
      <div class="ticket" v-for="ticket in getTickets" v-bind:key="ticket.id">
        <p>time: {{ticket.time}}</p>
        <p>price: {{ticket.price}} ETH</p>
        <p>remain: {{ticket.remain}}</p>
        <hr>
      </div>
    </div>

    <div class="select"><img src="../assets/club_schedule/1.png"></div>

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
  margin-top: 30px;
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
