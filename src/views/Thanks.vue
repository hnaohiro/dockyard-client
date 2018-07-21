<template>
  <div>
    <div class="headerBar"><img src="../assets/thanks/header.png"></div>
    <div class="thanks"><img src="../assets/thanks/thanks.svg" width="200"></div>

    <h2 style="text-align: center">
      enjoy night time!
    </h2>
    <div class="mypage">
      <router-link to="/mypage">
        Mypage
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'thanks'
}
</script>

<style>

.headerBar img {
  max-width: 100%;
}
.thanks img {
  margin: 20px auto;
  display: block;
}

.mypage {
  text-align: center;
  margin: 30px 0 50px;
}

.mypage a {
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
