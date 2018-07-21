<template>
  <div>
    <div class="logo">
      <img src="../../assets/logo.svg">
    </div>

    <div class="success">
      <img class="success-icon" src="../../assets/entranceSuccess/check.svg" alt="">
      <p class="success-text">
        Welcome
      </p>
    </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'entranceSuccess'
}
</script>

<style>

.success {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.success-icon {
  display: block;
  width: 200px;
  margin: 32px auto;
}

.success-text {
  font-size: 28px;
  font-weight: bold;
}

</style>
