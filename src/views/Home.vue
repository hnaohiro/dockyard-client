<template>
  <div>
    <button v-on:click="onApiTestClick">API Test</button>
    <ResponseViewer></ResponseViewer>
  </div>
</template>

<script>
import ResponseViewer from '@/components/ResponseViewer'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  methods: mapActions({
    'onApiTestClick': 'onApiTestClick'
  }),
  components: {
    ResponseViewer
  }
}
</script>
