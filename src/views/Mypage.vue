<template>
  <div>
    <div class="headerBar"><img src="../assets/thanks/header.png"></div>
    <div class="mypage-user">
      <div class="mypage-avatar"><img  :src="getAvatar"></div>
      <div class="mypage-name">{{getName}}</div>
    </div>

    <div class="mypage-tab"><img src="../assets/mypage/tab.png"></div>

    <div class="tickets">
      <router-link to="/pass">
        <div class="ticket" v-for="ticket in getUserTickets" v-bind:key="ticket.id">
          <p>id: {{ticket.id}}</p>
          <p>time: {{ticket.time}}</p>
          <p>drink: {{ticket.amountOfDrinkToken}}</p>
          <hr>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'mypage',
  mounted() {
    this.$store.dispatch('fetchUserTickets')
  },
  computed: {
    ...mapGetters([
      'getName',
      'getAvatar',
      'getUserTickets'
    ])
  }
}
</script>

<style>

.mypage-user {
  padding: 30px 30px 20px;
}

.mypage-avatar {
  display: table-cell;
  vertical-align: middle;
  width: 100px;
}

.mypage-avatar img {
  width: 100px;
  border-radius: 50%;
}

.mypage-name {
  display: table-cell;
  vertical-align: middle;
  font-size: 24px;
  font-weight: bold;
  padding-left: 30px;
}

.mypage-tab img {
  margin: 0 auto 20px;
  width: 100%;
}

.mypage-pass img {
  margin: 0 auto;
  width: 100%;
}

.tickets a {
  text-decoration: none;
}
</style>
