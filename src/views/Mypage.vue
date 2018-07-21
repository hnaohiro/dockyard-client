<template>
  <div>
    <div class="mypage-user"><img src="../assets/mypage/1.png"></div>
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
export default {
  name: 'mypage'
}
</script>

<style>
.mypage-user img {
  margin: 0 auto;
  width: 100%;
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
