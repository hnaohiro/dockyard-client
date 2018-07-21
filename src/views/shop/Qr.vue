<template>
  <div>
    <div class="logo">
      <img src="../../assets/logo.svg">
    </div>

    <div class="displayUser">
      <img src="../../assets/displayUser/avatar.png" width="200">
      <p class="displayUser-name">
        Mamoru Kijima
      </p>
      <dl class="displayUser-info">
        <dt>Age</dt>
        <dd>24</dd>
      </dl>
      <dl class="displayUser-info">
        <dt>BirthDay</dt>
        <dd>1994/05/12</dd>
      </dl>
      <img class="shopTicket" src="../../assets/displayUser/shopTicket.png" width="100%">
    </div>

  </div>
</template>

<script>
export default {
  name: 'qr'
}
</script>

<style>

.displayUser {
  text-align: center;
}

.displayUser-name {
  font-size: 28px;
  font-weight: bold;
}

.displayUser-info {
  text-align: left;
  display: flex;
  width: 50%;
  margin: 0 auto 8px;
}

dt {
  width: 60px;
}

.shopTicket {
  display: block;
  margin-top: 24px;
}

</style>
