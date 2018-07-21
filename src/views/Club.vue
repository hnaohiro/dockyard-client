<template>
  <div>
    <div class="header"><img src="../assets/club/page.png"></div>
    <h2>Other Event</h2>

    <div class="event-thumbs">
      <div class="event-thumb">
        <router-link to="/club">
          <img src="../assets/top/events01.png">
        </router-link>
      </div>
      <div class="event-thumb">
        <router-link to="/club">
          <img src="../assets/top/events02.png">
        </router-link>
      </div>
      <div class="event-thumb">
        <router-link to="/club">
          <img src="../assets/top/events03.png">
        </router-link>
      </div>
      <div class="event-thumb">
        <router-link to="/club">
          <img src="../assets/top/events04.png">
        </router-link>
      </div>
    </div>

    <div class="button">
      <router-link to="/ticket">
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
</style>
