<template>
  <div>
    <h1>Welcome!</h1>
    <p>name: {{getName}}</p>
    <p>phone: {{getPhone}}</p>
    <p>country: {{getCountry}}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'user',
   computed: {
    ...mapGetters([
      'getName',
      'getPhone',
      'getCountry'
    ])
  }
}
</script>
