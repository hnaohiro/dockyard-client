<template>
  <div>
    <div class="header"><img src="../assets/portrait.png"></div>

    <div class="top1"><img src="../assets/top/1.png"></div>
    
    <h2>Feature</h2>
    <div class="top-img">
      <router-link to="/club">
        <img src="../assets/top/2.png">
      </router-link>
    </div>
    <div class="top-img">
      <router-link to="/club">
        <img src="../assets/top/3.png">
      </router-link>
    </div>
    <div class="top-img">
      <router-link to="/club">
        <img src="../assets/top/2.png">
      </router-link>
    </div>

    <div class="more">
      <p>More</p>
    </div>

    <h2>Category</h2>
    <div class="top-img"><img src="../assets/top/4.png"></div>
    <div class="top-img"><img src="../assets/top/5.png"></div>
    <div class="top-img"><img src="../assets/top/6.png"></div>

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

h2 {
  padding-left: 1em;
  margin-top: 35px;
}

.top1 img {
  width: 100%;
}

.top-img {
  padding: 10px 15px;
}
.top-img img {
  width: 100%;
}

.more {
  text-align: center;
  border: 2px solid white;
  width: 70%;
  margin: 10px auto;
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
