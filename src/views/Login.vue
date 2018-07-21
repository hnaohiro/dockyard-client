
<template>
  <div>
    <p>Use uPort!</p>
    <button v-on:click="onUPortButtonClick">uPort</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'login',
  methods: mapActions({
    "onUPortButtonClick": "requestCredential"
  }),
  components: {
  }
}
</script>
