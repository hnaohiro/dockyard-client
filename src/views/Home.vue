<template>
  <div>

    <div class="top1"><img src="../assets/top/home-header.png"></div>

    <h2 class="title">Events</h2>
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
    <div class="more">
      <p>More</p>
    </div>

    <h2 class="title">Category</h2>
    <div class="event-thumbs">
      <div class="event-thumb">
        <img src="../assets/top/category01.png">
      </div>
      <div class="event-thumb">
        <img src="../assets/top/category02.png">
      </div>
      <div class="event-thumb">
        <img src="../assets/top/category03.png">
      </div>
      <div class="event-thumb">
        <img src="../assets/top/category04.png">
      </div>
      <div class="event-thumb">
        <img src="../assets/top/category05.png">
      </div>
      <div class="event-thumb">
        <img src="../assets/top/category06.png">
      </div>
    </div>

    <div class="footer">
      <ul>
        <li>ABOUT</li>
        <li>PRIVACY</li>
        <li>TEAMS</li>
        <li>HELP</li>
      </ul>

      <div class="copyright">
        <p>&copy; 2018 Night Pass</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
.header img {
  width: 100%;
}

.title {
  font-size: 32px;
  margin: 24px 0;
  padding-left: 24px;
}

.top1 img {
  width: 100%;
}

.event-thumbs {
  width: auto;
  margin-bottom: 24px;
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.event-thumb img {
  display: block;
  width: 163px;
  margin-bottom: 16px;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.14);
}
.more {
  text-align: center;
  border: 2px solid white;
  border-radius: 32px;
  width: 280px;
  margin: 16px auto 32px;
}

.footer {
  text-align: center;
  margin-bottom: 40px;
}

.footer ul {
  padding: 0;
  margin: 30px 0;
  list-style: none;
}

.footer li {
  padding: 5px;
}
</style>
