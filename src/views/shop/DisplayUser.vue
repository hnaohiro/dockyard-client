<template>
  <div>
    <div class="logo">
      <img src="../../assets/logo.svg">
    </div>
    <div class="scan">
      <img src="../../assets/qr/code.png" width="260">
      <h2 class="scan-title">
        Scan QR Code
      </h2>
      <p class="scan-text">
        Please scan the QR code to enter.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'displayUser'
}
</script>

<style>

.scan {
  width: 260px;
  margin: 64px auto 0;
  text-align: center;
}

.scan-title {
  font-size: 32px;
  padding-left: 0;
}

</style>
