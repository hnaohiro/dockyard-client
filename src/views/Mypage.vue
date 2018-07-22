<template>
  <div>
    <div class="mypage-user">
      <div class="mypage-avatar"><img  :src="getAvatar"></div>
      <div class="mypage-name">{{getName}}</div>
    </div>

    <div class="mypage-tab"><img src="../assets/mypage/2.png"></div>

    <div class="mypage-pass">
      <router-link to="/pass">
        <img src="../assets/mypage/3.png">
      </router-link>
      <router-link to="/pass">
        <img src="../assets/mypage/3.png">
      </router-link>
      <router-link to="/pass">
        <img src="../assets/mypage/3.png">
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
      'getAvatar'
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
</style>
