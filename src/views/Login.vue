
<template>
  <div>
    <p>Use uPort!</p>
    <qrcode-vue v-if="url" :value="url" :size="300" level="H"></qrcode-vue>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'login',
  methods: mapActions({
  }),
  mounted() {
    this.$store.dispatch('getRequestToken')
  },
  computed: {
    url() {
      if (this.$store.state.requestToken) {
        return 'https://id.uport.me/me?requestToken=' + this.$store.state.requestToken
      } else {
        return null
      }
    }
  },
  components: {
    QrcodeVue
  }
}
</script>
