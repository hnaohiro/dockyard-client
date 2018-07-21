<template>
  <div>
    <div class="thanks"><img src="../assets/thanks/1.png"></div>

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
.thanks img {
  margin: 20px auto;
  width: 100%;
}

.mypage {
  text-align: center;
  margin: 30px 0 50px;
}

.mypage a {
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
