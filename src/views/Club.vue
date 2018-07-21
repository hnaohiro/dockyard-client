<template>
  <div>
    <div class="header"><img src="../assets/portrait.png"></div>

    <div class="club-img"><img src="../assets/club/1.png"></div>

    <div class="club-name">V2 TOKYO</div>

    <div class="club-info"><img src="../assets/club/2.png"></div>

    <div class="club-map"><img src="../assets/club/3.png"></div>

    <h2>Other Event</h2>

    <div class="club-events"><img src="../assets/club/4.png"></div>

    <div class="buy">
      <router-link to="/club/schedule">
        Buy Ticket
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'club'
}
</script>

<style>
h2 {
  padding-left: 1em;
  margin-top: 30px;
}

.club-img img {
  width: 100%;
}

.club-name {
  font-weight: bold;
  font-size: 24px;
  padding: 10px 20px;
}

.club-info img {
  width: 100%;
  margin: 10px auto;
}

.club-map img {
  width: 100%;
  margin: 10px auto;
}

.club-events img {
  width: 100%;
  margin: 10px auto;
}

.buy {
  text-align: center;
  margin: 30px 0 50px;
}

.buy a {
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
