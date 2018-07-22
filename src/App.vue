<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0 auto;
  padding: 0;
  width: 375px;
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
  font-family: Avenir Next, -apple-system,BlinkMacSystemFont,Helvetica Neue,Hiragino Kaku Gothic ProN,Arial,meiryo,sans-serif;
  background: #171D27;
  color: white;
}
a:visited {
  color: white;
}

.logo  {
  text-align: center;
  margin: 24px 0;
}

.button {
  text-align: center;
  margin: 30px 0 50px;
}

.button a {
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translate(-50%, 0);
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
