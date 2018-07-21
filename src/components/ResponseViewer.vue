<template>
  <p v-if="response">
    <code>
      {{response}}
    </code>
  </p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ResponseViewer',
  computed: {
    response() {
      return this.$store.state.response
    }
  }
}
</script>

<style>
code {
  border: 1px solid #ccc;
  padding: 10px 20px;
  margin-top: 10px;
}
</style>
